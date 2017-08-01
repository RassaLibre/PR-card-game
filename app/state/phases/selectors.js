import { createSelector } from "reselect";

/**
*
*/
export const getPhases = (state) => state.phases

/**
*
*/
export const getActivePhaseIndex = (state) => state.phases.activePhase

/**
*
*/
export const getDiscoverPhaseActivePlayerIndex = (state) => state.phases.discoverPhase.activePlayerIndex

/**
*
*/
export const getTradePhaseActivePlayerIndex = (state) => state.phases.tradePhase.activePlayerIndex

/**
*
*/
export const getActivePhase = createSelector([ getPhases ], (phases)=>{
  if(phases.activePhase === 0) return phases.discoverPhase
  else return phases.tradePhase
})

/**
*
*/
export const getActivePlayerIndex =
  createSelector([ getActivePhase ], (activePhase) => activePhase.activePlayerIndex);
