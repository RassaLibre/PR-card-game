/**
* GAME HOOKS
* ----------
* The actions in this file are related to the cycle of the game
* and are triggered in order to run some of the side effects such as
* moving cards, moving gold between players etc.
*/

import {
  discardLastOfferedCard
  moveAllOfferedCardsToDiscardPile,
} from '../cards/actions'
import {
  endDiscoverPhaseAbruptly
} from '../phases/actions'
import {
  getDiscoverPhaseActivePlayerIndex,
  getTradePhaseActivePlayerIndex,
} from '../phases/selectors'
import {
  rewardPlayersForFlush,
  removeCoinsFromPlayer,
  addCoinsToPlayer
} from '../players/actions'
import {
  areTwoShipsWithSameColorOffered
} from '../cards/selectors'
import {
  getActiveEnhancedPlayerOfActivePhase,
  getPlayersWithTwelveOrMoreCoins,
  getPlayersWithMaxDefence,
  getPlayersWithMinInfluence
} from '../players/selectors'
import { CARD_TYPES, TAX_TYPES } from '../cards/consts/index.js'

const REWARD_FOR_TAXES = 1

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
      break
    case CARD_TYPES.PERSON:
      //  check if the active player has madam
      //    if yes, lower the price by one per each madam
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
*
*/
export const tradingPhaseStarts = () => (dispatch, getState) => {
  console.log('TRADING PHASE STARTS!')
}

/**
* Triggered when the user clicks on one of the offered
* cards.
*/
export const playCard = card => (dispatch, getState) => {
  const player = getActiveEnhancedPlayerOfActivePhase(getState()),
    activeTradePhasePlayerIndex = getTradePhaseActivePlayerIndex(getState()),
    activeDiscoverPhasePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
  switch(card.type){
    case CARD_TYPES.SHIP:
      break
    case CARD_TYPES.EXPEDITION:
      break
    case CARD_TYPES.PERSON:
      break
    case CARD_TYPES.TAX:
      break
    default:
      throw new Error(`Unknown card type ${card.type}`)
  }
}

export const newPlayerInTradingPhase = () => (dispatch, getState) => {
  console.log('NEW PLAYER IN TRADING PHASE!')
}

/**
*
*/
export const tradingPhaseEnds = () => (dispatch, getState) => {
  console.log('TRADING PHASE ENDS!')
}

/**
*
*/
export const roundOver = () => (dispatch, getState) => {
  console.log('THE ROUND ENDS!')
  dispatch(moveOfferedCardsToDiscardPile())
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
