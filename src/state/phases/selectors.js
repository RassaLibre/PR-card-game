import { createSelector } from "reselect"
import { PHASES } from './consts'

export const getPhases = state => state.phases

export const getActivePhaseIndex = state => state.phases.activePhase

export const getActivePhaseName = state => state.phases.activePhase

export const getDiscoverPhaseActivePlayerIndex = state => state.phases.discoverPhase.activePlayerIndex

export const getTradePhaseActivePlayerIndex = state => state.phases.tradePhase.activePlayerIndex

export const getActivePhase = createSelector([ getPhases ], (phases)=>{
  if(phases.activePhase === PHASES.DISCOVER) return phases.discoverPhase
  else return phases.tradePhase
})

export const getNumberOfPlayedCardsInTradePhase = state => state.phases.tradePhase.cardsPlayed

export const getActivePlayerIndex =
  createSelector([ getActivePhase ], (activePhase) => activePhase.activePlayerIndex)
