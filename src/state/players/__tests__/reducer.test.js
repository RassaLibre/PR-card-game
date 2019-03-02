import Reducer from '../reducer'
import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER
} from '../consts'



describe("Players reducer", ()=>{

  let reducer, initState

  beforeEach(()=>{
    reducer = Reducer
    initState = reducer(undefined, { type: "NON_EXISTENT" })
  })

  it("should add coins to player", () => {
    const playerId = 1,
      numOfCoins = 2
    const newState = reducer(initState, {
      type: ADD_COINS_TO_PLAYER,
      playerId, numOfCoins
    })
    expect(newState.find(p => p.id === playerId).coins)
      .toBe(initState.find(p => p.id === playerId).coins + numOfCoins)
  })

  it("Should remove coins from player", () => {
    const playerId = 1,
      numOfCoins = 2
    const newState = reducer(initState, {
      type: REMOVE_COINS_FROM_PLAYER,
      playerId, numOfCoins
    })
    expect(newState.find(p => p.id === playerId).coins + numOfCoins)
      .toBe(initState.find(p => p.id === playerId).coins)
  })

})
