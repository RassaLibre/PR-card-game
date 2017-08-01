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

/**
*
*/
export const togglePhase = () => dispatch => {
  dispatch({ type: TOGGLE_PHASE })
};

export const setTradePhaseActivePlayer = (playerIndex) => dispatch => {
  dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex })
}

export const setDiscoverPhaseActivePlayer = (playerIndex) => dispatch => {
  dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex })
}

export const nextStep = () => (dispatch, getState) => {
  const activePhaseIndex = getActivePhaseIndex(getState());
  if(activePhaseIndex === 0){ //discover, just switch phase
    dispatch(togglePhase())
  }
  else{ //trade
    const tradeActivePlayerIndex = getTradePhaseActivePlayerIndex(getState())
    const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
    const newPlayerIndex = getNextPlayerIndex(getState(), tradeActivePlayerIndex)
    if(discoverActivePlayerIndex === newPlayerIndex){ //toggle phase and set next player for discover and trade
      dispatch(togglePhase())
      const newDiscoverPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
      dispatch(setDiscoverPhaseActivePlayer(newDiscoverPlayerIndex))
      dispatch(setTradePhaseActivePlayer(newDiscoverPlayerIndex))
    }
    else dispatch(setTradePhaseActivePlayer(newPlayerIndex))
  }
}


