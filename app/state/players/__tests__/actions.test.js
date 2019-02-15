import {
  addCoinsToPlayer
} from '../actions'

import RootReducer from '../../../RootReducer'

const getPlayerById = ({ players }, playerId) =>
  players.find(p => p.id === playerId)

describe("Players actions", ()=>{

  let store

  beforeEach(()=> store = RootReducer)

  it('Should add coints to the player', ()=>{
    const playerId = 1
    const coinsToBeAdded = 2
    const initPlayer = getPlayerById(store.getState(), playerId)
    addCoinsToPlayer(playerId, coinsToBeAdded)(store.dispatch)
    const updatedPlayer = getPlayerById(store.getState(), playerId)
    expect(initPlayer.coins + coinsToBeAdded).toBe(updatedPlayer.coins)
  })

})
