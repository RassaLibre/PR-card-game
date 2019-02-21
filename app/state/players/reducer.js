import { combineReducers } from 'redux'
import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER
} from './consts'

const PLAYERS_DEFAULT_STATE = [
  {id: 1, name: "Tomas", coins: 3, color: "#10DBE8", cards:[]},
  {id: 2, name: "Lisa", coins: 3, color: "#09FFC0", cards:[]},
  {id: 3, name: "Denisa", coins: 3, color: "#69BF7B", cards:[]},
  {id: 4, name: "Jan", coins: 3, color: "#F5E27C", cards:[]}
]

const listOfPlayers = (state = PLAYERS_DEFAULT_STATE, action) => {
  switch(action.type){

    case ADD_COINS_TO_PLAYER: {
      const { numOfCoins, playerId } = action,
        playerToAlter = state.find(p => p.id === playerId),
        indexOfPlayer = state.indexOf(playerToAlter)
      if(indexOfPlayer > -1){
        return [
          ...state.slice(0, indexOfPlayer),
          {...state[indexOfPlayer], coins: state[indexOfPlayer].coins + numOfCoins},
          ...state.slice(indexOfPlayer + 1)
        ]
      }
      else return state
    }

    case REMOVE_COINS_FROM_PLAYER: {
      const { numOfCoins, playerId } = action,
        playerToAlter = state.find(p => p.id === playerId),
        indexOfPlayer = state.indexOf(playerToAlter)
      if(indexOfPlayer > -1){
        return [
          ...state.slice(0, indexOfPlayer),
          {...state[indexOfPlayer], coins: state[indexOfPlayer].coins - numOfCoins},
          ...state.slice(indexOfPlayer + 1)
        ]
      }
      else return state
    }

    default:
      return state
  }
}

export default listOfPlayers
