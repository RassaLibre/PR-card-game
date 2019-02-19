import {
  TOGGLE_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER,
  PHASES
} from './consts'

import {
  getActivePhase,
  getActivePhaseIndex,
  getTradePhaseActivePlayerIndex,
  getActivePhaseName,
  getDiscoverPhaseActivePlayerIndex
} from './selectors'

import {
  getNextPlayerIndex
} from '../players/selectors'

import {
  discoverPhaseStarts,
  discoverPhaseEnds,
  tradingPhaseStarts,
  tradingPhaseEnds,
  roundOver,
  newPlayerInTradingPhase,
} from '../gameHooks/actions'

/**
* @tested
*/
export const togglePhase = () => ({ type: TOGGLE_PHASE })

/**
* @tested
*/
export const setTradePhaseActivePlayer = playerIndex =>
  ({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex })

/**
* @tested
*/
export const setDiscoverPhaseActivePlayer = playerIndex =>
  ({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex })

/**
* Gets triggered when the player has offered a new boat on an
* already offered color and is not able to defeat it.
*/
export const endDiscoverPhaseAbruptly = () => (dispatch, getState) => {
  const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
  const newDiscoverPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
  dispatch(discoverPhaseEnds())
  dispatch(roundOver())
  dispatch(setDiscoverPhaseActivePlayer(newDiscoverPlayerIndex))
  dispatch(setTradePhaseActivePlayer(newDiscoverPlayerIndex))
  dispatch(discoverPhaseStarts())
}

/**
* This function just controls the flow in the game. It switches
* phases and active players
*/
export const next = () => (dispatch, getState) => {
  const activePhaseIndex = getActivePhaseName(getState()),
    tradeActivePlayerIndex = getTradePhaseActivePlayerIndex(getState())
  if(activePhaseIndex === PHASES.DISCOVER) {
    dispatch(discoverPhaseEnds())
    dispatch(togglePhase())
    dispatch(tradingPhaseStarts())
  }
  else{
    const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
    const newPlayerIndex = getNextPlayerIndex(getState(), tradeActivePlayerIndex)
    //when all the players had a turn in the trade phase
    if(discoverActivePlayerIndex === newPlayerIndex){ // round ends
      dispatch(togglePhase())
      const newDiscoverPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
      dispatch(tradingPhaseEnds())
      dispatch(roundOver())
      dispatch(setTradePhaseActivePlayer(newDiscoverPlayerIndex))
      dispatch(setDiscoverPhaseActivePlayer(newDiscoverPlayerIndex))
      dispatch(discoverPhaseStarts())
    }
    else {  // next player in trading phase
      dispatch(setTradePhaseActivePlayer(newPlayerIndex))
      dispatch(newPlayerInTradingPhase())
    }
  }
}


