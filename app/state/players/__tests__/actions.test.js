import {
  addCoinsToPlayer,
  removeCoinsFromPlayer,
} from '../actions'
import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER
} from '../consts'

import RootReducer from '../../../RootReducer'

const getPlayerById = ({ players }, playerId) =>
  players.find(p => p.id === playerId)

describe("Players actions", () => {

  let store

  beforeEach(() => store = RootReducer)

  it('Should add coins to the player', () => {
    const playerId = 1
    const coinsToBeAdded = 2
    expect(addCoinsToPlayer(playerId, coinsToBeAdded)).toEqual({
      type: ADD_COINS_TO_PLAYER,
      playerId,
      numOfCoins: coinsToBeAdded
    })
  })

  it('Should remove coins from the player', () => {
    const playerId = 1
    const coinsToBeRemoved = 2
    expect(removeCoinsFromPlayer(playerId, coinsToBeRemoved)).toEqual({
      type: REMOVE_COINS_FROM_PLAYER,
      playerId,
      numOfCoins: coinsToBeRemoved
    })
  })

})
