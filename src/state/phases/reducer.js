import { combineReducers } from "redux"
import {
  TOGGLE_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER,
  SET_PHASE,
  PHASES
} from './consts'

const discoverPhase = (state = {activePlayerIndex: 0, name: "Discover"}, action) => {
  switch(action.type){
    case SET_DISCOVER_PHASE_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayerIndex: action.playerIndex
      }
    default:
      return state
  }
}

const tradePhase = (state = {activePlayerIndex: 0, name: "Trade and Hire"}, action) => {
  switch(action.type){
    case SET_TRADE_PHASE_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayerIndex: action.playerIndex
      }
    default:
      return state
  }
}

const activePhase = (state = PHASES.DISCOVER, action) => {
  switch(action.type){
    case SET_PHASE:
      return action.phase
    case TOGGLE_PHASE:
      if(state === PHASES.DISCOVER)
        return PHASES.TRADE
      else
        return PHASES.DISCOVER
    default:
      return state
  }
}

export default combineReducers({
  discoverPhase,
  tradePhase,
  activePhase
})

