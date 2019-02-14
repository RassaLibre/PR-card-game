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


/**
*
*/
export const discoverPhaseStarts = () => (dispatch, getState) => {
  console.log('DISCOVER PHASE STARTS!')
}

/**
*
*/
export const offerCard = () => (dispatch, getState) => {

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
