import { combineReducers } from "redux"
import {
  TOGGLE_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER,
  SET_PHASE,
  PHASES,
  SET_CARDS_PLAYED_IN_TRADE_PHASE,
  INCREMENT_ACTIVE_CARDS_PLAYED
} from './consts'

const DISCOVER_PHASE_DEFAULT_STATE = {
  activePlayerIndex: 0,
  name: PHASES.DISCOVER
}

const TRADE_PHASE_DEFAULT_STATE = {
  activePlayerIndex: 0,
  name: PHASES.TRADE,
  cardsPlayed: 0
}

const discoverPhase = (state = DISCOVER_PHASE_DEFAULT_STATE, action) => {
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

const tradePhase = (state = TRADE_PHASE_DEFAULT_STATE, action) => {
  switch(action.type){
    case SET_TRADE_PHASE_ACTIVE_PLAYER:
      return {
        ...state,
        activePlayerIndex: action.playerIndex
      }
    case INCREMENT_ACTIVE_CARDS_PLAYED:
      return {
        ...state,
        cardsPlayed: state.cardsPlayed + 1
      }
    case SET_CARDS_PLAYED_IN_TRADE_PHASE:
      return {
        ...state,
        cardsPlayed: action.value
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

