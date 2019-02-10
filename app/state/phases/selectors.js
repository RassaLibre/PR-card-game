import { createSelector } from "reselect";

/**
*
*/
export const getPhases = (state) => state.phases

/**
* @return {Number}
*/
export const getActivePhaseIndex = (state) => state.phases.activePhase

/**
* @return {Number}
*/
export const getDiscoverPhaseActivePlayerIndex = (state) => state.phases.discoverPhase.activePlayerIndex

/**
* @return {Number}
*/
export const getTradePhaseActivePlayerIndex = (state) => state.phases.tradePhase.activePlayerIndex

/**
* @return {Object}
*/
export const getActivePhase = createSelector([ getPhases ], (phases)=>{
  if(phases.activePhase === 0) return phases.discoverPhase
  else return phases.tradePhase
})

/**
* @return {Number}
*/
export const getActivePlayerIndex =
  createSelector([ getActivePhase ], (activePhase) => activePhase.activePlayerIndex)
