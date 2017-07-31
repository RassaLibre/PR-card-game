import { combineReducers } from "redux"

const PHASES = ["DISCOVER", "TRADE"]

const discoverPhase = (state = {activePlayerIndex: 0}, action) => {
  switch(action.type){
    default:
      return state
  }
}

const tradePhase = (state = {activePlayerIndex: 0}, action) => {
  switch(action.type){
    default:
      return state
  }
}

const activePhase = (state = 0, action) => {
  switch(action.type){
    default:
      return state
  }
}

export default combineReducers({
  discoverPhase,
  tradePhase,
  activePhase
})

