import { combineReducers } from 'redux'

const PLAYERS_DEFAULT_STATE = [
  {id: 1, name: "Tomas", coins: 3, color: "#10DBE8", cards:[]},
  {id: 2, name: "Lisa", coins: 3, color: "#09FFC0", cards:[]},
  {id: 3, name: "Denisa", coins: 3, color: "#69BF7B", cards:[]},
  {id: 4, name: "Jan", coins: 3, color: "#F5E27C", cards:[]}
]

const listOfPlayers = (state = PLAYERS_DEFAULT_STATE, action) => {
  switch(action.type){
    default:
      return state
  }
}

export default listOfPlayers
