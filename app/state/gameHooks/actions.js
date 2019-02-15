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
  switch(card.type){
    case CARD_TYPES.SHIP:
      //  check if the boat is of redundant colour
      //    if yes, check if the player can defeat it
      //      if yes, remove the card to discard pile
      //      if not, does any player has a joker?
      //        if yes, give them coins
      //        end of the round
      //    if no, check if the player has more than 4 different colours
      //      if the player has 4 increase the amount of turns by 1
      //      if the player has 5 increase the amount of turns by 2
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
  dispatch(moveOfferedCardsToDiscardPile())
}

/**
*
*/
export const roundOver = () => (dispatch, getState) => {
  console.log('THE ROUND ENDS!')
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
