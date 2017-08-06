import {
  TOGGLE_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER
} from './consts'

import {
  getActivePhase,
  getActivePhaseIndex,
  getTradePhaseActivePlayerIndex,
  getDiscoverPhaseActivePlayerIndex
} from './selectors'

import {
  getNextPlayerIndex
} from '../players/selectors'

import {
  moveOfferedCardsToDiscardPile
} from '../cards/actions'

/**
* @tested
*/
export const togglePhase = () => dispatch => {
  dispatch({ type: TOGGLE_PHASE })
};

/**
* @tested
*/
export const setTradePhaseActivePlayer = (playerIndex) => dispatch => {
  dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex })
}

/**
* @tested
*/
export const setDiscoverPhaseActivePlayer = (playerIndex) => dispatch => {
  dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex })
}

/**
* because when a players turns two boats of the same color
* and is not able to defeat the second one, the player loses
* his turn and a next player plays
*/
export const activePlayerInTradePhaseLosesTurn = () => dispatch => {
  const tradeActivePlayerIndex = getTradePhaseActivePlayerIndex(getState())
  const newPlayerIndex = getNextPlayerIndex(getState(), tradeActivePlayerIndex)
  dispatch(setTradePhaseActivePlayer(newPlayerIndex))
  dispatch(setDiscoverPhaseActivePlayer(newPlayerIndex))
  dispatch(moveOfferedCardsToDiscardPile())
}

/**
*
*/
export const nextStep = () => (dispatch, getState) => {
  const activePhaseIndex = getActivePhaseIndex(getState());
  if(activePhaseIndex === 0){ //trade, just switch phase
    dispatch(togglePhase())
  }
  else{ //trade
    const tradeActivePlayerIndex = getTradePhaseActivePlayerIndex(getState())
    const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
    const newPlayerIndex = getNextPlayerIndex(getState(), tradeActivePlayerIndex)
    if(discoverActivePlayerIndex === newPlayerIndex){ //toggle phase and set next player for discover and trade
      dispatch(togglePhase())
      dispatch(moveOfferedCardsToDiscardPile())
      const newDiscoverPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
      dispatch(setDiscoverPhaseActivePlayer(newDiscoverPlayerIndex))
      dispatch(setTradePhaseActivePlayer(newDiscoverPlayerIndex))
    }
    else dispatch(setTradePhaseActivePlayer(newPlayerIndex))
  }
}


