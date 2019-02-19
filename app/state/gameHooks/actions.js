/**
* GAME HOOKS
* ----------
* The actions in this file are related to the cycle of the game
* and are triggered in order to run some of the side effects such as
* moving cards, moving gold between players etc.
*/

import {
  moveOfferedCardsToDiscardPile
} from '../cards/actions'
import {
  endDiscoverPhaseAbruptly
} from '../phases/actions'
import {
  rewardPlayersForFlush
} from '../players/actions'
import {
  areTwoShipsWithSameColorOffered
} from '../cards/selectors'
import {
  getActiveEnhancedPlayerOfActivePhase
} from '../players/selectors'
import { CARD_TYPES } from '../cards/consts/index.js'

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
  console.log(player)
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
      //  check if any player has more than 12 coins
      //    if yes, return bigger half
      //  execute the subtype of taxes
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
