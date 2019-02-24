import {
  addCoinsToPlayer,
  removeCoinsFromPlayer,
} from '../actions'

import RootReducer from '../../../RootReducer'

const getPlayerById = ({ players }, playerId) =>
  players.find(p => p.id === playerId)

describe("Players actions", () => {

  let store

  beforeEach(() => store = RootReducer)

  it('Should add coins to the player', () => {
    const playerId = 1
    const coinsToBeAdded = 2
    const initPlayer = getPlayerById(store.getState(), playerId)
    store.dispatch(addCoinsToPlayer(playerId, coinsToBeAdded))
    const updatedPlayer = getPlayerById(store.getState(), playerId)
    expect(initPlayer.coins + coinsToBeAdded).toBe(updatedPlayer.coins)
  })

  it('Should remove coins from the player', () => {
    const playerId = 1
    const coinsToBeRemoved = 2
    const initPlayer = getPlayerById(store.getState(), playerId)
    store.dispatch(removeCoinsFromPlayer(playerId, coinsToBeRemoved))
    const updatedPlayer = getPlayerById(store.getState(), playerId)
    expect(initPlayer.coins - coinsToBeRemoved).toBe(updatedPlayer.coins)
  })

})
