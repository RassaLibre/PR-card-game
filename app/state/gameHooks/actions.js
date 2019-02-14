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
