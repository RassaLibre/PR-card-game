import { combineReducers } from "redux"
import {
  TOGGLE_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER
} from './consts'

const PHASES = ["DISCOVER", "TRADE"]

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

const activePhase = (state = 0, action) => {
  switch(action.type){
    case TOGGLE_PHASE:
      if(state === 0) return 1
      else return 0
    default:
      return state
  }
}

export default combineReducers({
  discoverPhase,
  tradePhase,
  activePhase
})
