import {
  addCoinsToPlayer
} from '../actions'

import {
  getPlayerWithId
} from '../selectors'

import RootReducer from '../../../RootReducer'

describe("Players actions", ()=>{

  let store

  beforeEach(()=> store = RootReducer)

  it('Should add coints to the player', ()=>{
    const playerId = 1
    const coinsToBeAdded = 2
    const initPlayer = getPlayerWithId(store.getState(), playerId)
    addCoinsToPlayer(playerId, coinsToBeAdded)(store.dispatch)
    const updatedPlayer = getPlayerWithId(store.getState(), playerId)
    expect(initPlayer.coins + coinsToBeAdded).toBe(updatedPlayer.coins)
  })

})
