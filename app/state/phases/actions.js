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
* @tested
*/
export const activePlayerInDiscoverPhaseLosesTurn = () => (dispatch, getState) => {
  const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
  const newPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
  dispatch(setTradePhaseActivePlayer(newPlayerIndex))
  dispatch(setDiscoverPhaseActivePlayer(newPlayerIndex))
  dispatch(moveOfferedCardsToDiscardPile())
}

/**
* This function just controls the flow in the game. It switches
* phases and active players
*/
export const next = () => (dispatch, getState) => {
  const activePhaseIndex = getActivePhaseName(getState()),
    tradeActivePlayerIndex = getTradePhaseActivePlayerIndex(getState())
  if(activePhaseIndex === PHASES.DISCOVER) dispatch(togglePhase())
  else{
    const discoverActivePlayerIndex = getDiscoverPhaseActivePlayerIndex(getState())
    const newPlayerIndex = getNextPlayerIndex(getState(), tradeActivePlayerIndex)
    //when all the players had a turn in the trade phase
    if(discoverActivePlayerIndex === newPlayerIndex){
      dispatch(togglePhase())
      dispatch(moveOfferedCardsToDiscardPile())
      const newDiscoverPlayerIndex = getNextPlayerIndex(getState(), discoverActivePlayerIndex)
      dispatch(setDiscoverPhaseActivePlayer(newDiscoverPlayerIndex))
      dispatch(setTradePhaseActivePlayer(newDiscoverPlayerIndex))
    }
    else dispatch(setTradePhaseActivePlayer(newPlayerIndex))
  }
}


