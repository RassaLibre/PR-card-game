/**
* GAME HOOKS
* ----------
* The actions in this file are related to the cycle of the game
* and are triggered in order to run some of the side effects such as
* moving cards, moving gold between players etc.
*/

import {
  moveAllOfferedCardsToDiscardPile,
  discardLastOfferedCard,
  moveOfferedCardToDiscardPile,
  destroyOfferedCard,
  addCardsToDiscardPile,
} from '../cards/actions'
import {
  endDiscoverPhaseAbruptly,
  incrementCardsPlayedInTradePhase,
  setPlayedCardsInTradingPhase,
  next,
} from '../phases/actions'
import {
  getDiscoverPhaseActivePlayerIndex,
  getTradePhaseActivePlayerIndex,
  getNumberOfPlayedCardsInTradePhase,
} from '../phases/selectors'
import {
  rewardPlayersForFlush,
  removeCoinsFromPlayer,
  addCoinsToPlayer,
  addCardToPlayer,
  removeCardFromPlayer,
} from '../players/actions'
import {
  areTwoShipsWithSameColorOffered,
} from '../cards/selectors'
import {
  getActiveEnhancedPlayerOfActivePhase,
  getPlayersWithTwelveOrMoreCoins,
  getPlayersWithMaxDefence,
  getPlayersWithMinInfluence,
  getActiveEnhancedPlayerOfDiscoverPhase,
  getActiveEnhancedPlayerOfTradePhase,
} from '../players/selectors'
import { CARD_TYPES, TAX_TYPES, SIGNS, PERSON_TYPES } from '../cards/consts/index.js'

const REWARD_FOR_TAXES = 1

const TAXES_TO_ACTIVE_PLAYER_WHEN_IN_TRADE_PHASE = 1

/**
*
*/
export const discoverPhaseStarts = () => (dispatch, getState) => {
  console.log('DISCOVER PHASE STARTS!')
}

/**
*
*/
export const cardOffered = card => (dispatch, getState) => {
  const player = getActiveEnhancedPlayerOfActivePhase(getState())
  switch(card.type){
    case CARD_TYPES.SHIP:
      if(areTwoShipsWithSameColorOffered(getState())){
        if(card.defence !== 0 && player.defence >= card.defence){
          //  the player has successfully defeated the ship
          console.log('PLAYER HAS SUCCESSFULLY A BOAT')
          dispatch(discardLastOfferedCard())
        } else {
          //  the player did not defeat the ship
          console.log('PLAYER LOSES TURN!')
          dispatch(endDiscoverPhaseAbruptly())
          dispatch(rewardPlayersForFlush())
        }
      }
      break
    case CARD_TYPES.EXPEDITION:
      // Nothing to do here
      break
    case CARD_TYPES.PERSON:
      // Nothing to do here
      break
    case CARD_TYPES.TAX:
      const playersToBeTaxed = getPlayersWithTwelveOrMoreCoins(getState())
      for(let player of playersToBeTaxed)
        dispatch(removeCoinsFromPlayer(player.id, Math.ceil(player.coins / 2)))
      if(card.name === TAX_TYPES.MAX_DEFENCE)
        getPlayersWithMaxDefence(getState())
          .map(player => dispatch(addCoinsToPlayer(player.id, REWARD_FOR_TAXES)))
      else if(card.name === TAX_TYPES.MIN_INFLUENCE)
        getPlayersWithMinInfluence(getState())
          .map(player => dispatch(addCoinsToPlayer(player.id, REWARD_FOR_TAXES)))
      else throw new Error(`Unknown tax subtype ${card.name}`)
      break
    default:
      throw new Error(`Unknown card type ${card.type}`)
  }
}

/**
*
*/
export const discoverPhaseEnds = () => (dispatch, getState) => {
  console.log('DISCOVER PHASE ENDS!')
}

/**
* triggered only once, not every single time the active player
* in the trading phase changes. See newPlayerInTradingPhase instead.
*/
export const tradingPhaseStarts = () => (dispatch, getState) => {
  console.log('TRADING PHASE STARTS!')
}

/**
* Triggered when the user clicks on one of the offered
* cards.
*/
export const playCard = card => (dispatch, getState) => {
  const currentPlayer = getActiveEnhancedPlayerOfActivePhase(getState()),
    activeDiscoverPhasePlayer = getActiveEnhancedPlayerOfDiscoverPhase(getState()),
    activeTradePhasePlayer = getActiveEnhancedPlayerOfTradePhase(getState())
  switch(card.type){

    case CARD_TYPES.SHIP: {
      // Give the right amount of coins to the active trade player
      dispatch(addCoinsToPlayer(currentPlayer.id, card.coins + card.bonus))
      // Remove the card from offered cards
      dispatch(moveOfferedCardToDiscardPile(card))
      // Is the active trade player an active player in the discover phase?
      // If not, give the active DPAP one coin from the TPAP
      if(currentPlayer.id !== activeDiscoverPhasePlayer.id) {
        dispatch(removeCoinsFromPlayer(currentPlayer.id, TAXES_TO_ACTIVE_PLAYER_WHEN_IN_TRADE_PHASE))
        dispatch(addCoinsToPlayer(activeDiscoverPhasePlayer.id, TAXES_TO_ACTIVE_PLAYER_WHEN_IN_TRADE_PHASE))
      }
      // Increate the counter of played cards
      dispatch(incrementCardsPlayedInTradePhase())
      // If the active number of played cards is the same as the number of players turns,
      //  Automatically call the next function
      const cardsPlayed = getNumberOfPlayedCardsInTradePhase(getState())
      if(currentPlayer.turnsInTradePhase === cardsPlayed)
        dispatch(next())
      break
    }

    case CARD_TYPES.EXPEDITION: {
      //  remove players cards with the symbols on the expedition
      card.signs.map(cardSign => {
        const playersCard = currentPlayer.cards.find(c => c.sign === cardSign)
        if(playersCard){
          dispatch(removeCardFromPlayer(currentPlayer.id, playersCard))
          dispatch(addCardsToDiscardPile([playersCard]))
        //  If the player does not have the card with the right symbol
        //  we search for a handyman to pay with the handyman
        } else {
          const playersHandyman = currentPlayer.cards
            .find(c => c.type === CARD_TYPES.PERSON && c.name === PERSON_TYPES.HANDYMAN)
          if(!playersHandyman) throw new Error(`No handyman found!`)
          dispatch(removeCardFromPlayer(currentPlayer.id, playersHandyman))
          dispatch(addCardsToDiscardPile([playersCard]))
        }
      })
      //  give the current player a bonus written on the expedition
      dispatch(addCoinsToPlayer(currentPlayer.id, card.reward))
      //  add the expedition card to the players cards
      dispatch(addCardToPlayer(currentPlayer.id, card))
      //  destroy the card from the offered cards
      dispatch(destroyOfferedCard(card))
      //  There are no checks in terms of players turns and such because
      //  the rules say that the player is allowed to take the expedition
      //  at any time during his turn.
      break
    }

    case CARD_TYPES.PERSON: {
      // Remove the cost of the card from the player
      removeCoinsFromPlayer(currentPlayer.id, card.price - card.discount)
      // move card to the player
      dispatch(addCardToPlayer(currentPlayer.id, card))
      dispatch(destroyOfferedCard(card))
      // Is the active trade player an active player in the discover phase?
      // If not, give the active DPAP one coin from the TPAP
      if(currentPlayer.id !== activeDiscoverPhasePlayer.id) {
        dispatch(removeCoinsFromPlayer(currentPlayer.id, TAXES_TO_ACTIVE_PLAYER_WHEN_IN_TRADE_PHASE))
        dispatch(addCoinsToPlayer(activeDiscoverPhasePlayer.id, TAXES_TO_ACTIVE_PLAYER_WHEN_IN_TRADE_PHASE))
      }
      // Increment the counter of played cards
      dispatch(incrementCardsPlayedInTradePhase())
      // If the active number of played cards is the same as the number of players turns,
      //  Automatically call the next function
      const cardsPlayed = getNumberOfPlayedCardsInTradePhase(getState())
      if(currentPlayer.turnsInTradePhase === cardsPlayed)
        dispatch(next())
      break
    }

    default:
      throw new Error(`Unknown card type ${card.type}`)
  }
}

/**
* This hooks get triggered every single time there is a new player
* in the trading phase
*/
export const newPlayerInTradingPhase = () => (dispatch, getState) => {
  console.log('NEW PLAYER IN TRADING PHASE!')
  dispatch(setPlayedCardsInTradingPhase(0))
}

/**
* Called only once when the trading phase is over, not with
* every single change of the active player in the trade phase.
*/
export const tradingPhaseEnds = () => (dispatch, getState) => {
  console.log('TRADING PHASE ENDS!')
}

/**
*
*/
export const roundOver = () => (dispatch, getState) => {
  console.log('THE ROUND ENDS!')
  dispatch(moveAllOfferedCardsToDiscardPile())
}

export default {
  discoverPhaseStarts,
  cardOffered,
  discoverPhaseEnds,
  tradingPhaseStarts,
  newPlayerInTradingPhase,
  tradingPhaseEnds,
  roundOver,
}
