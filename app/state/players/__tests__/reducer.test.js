import Reducer from '../reducer'
import {
  ADD_COINS_TO_PLAYER
} from '../consts'

describe("Players reducer", ()=>{

  let reducer, initState

  beforeEach(()=>{
    reducer = Reducer
    initState = reducer(undefined, {type: "NON_EXISTENT"})
  })

  it("should add coins to player", ()=>{
    const newState = reducer(initState, {type: ADD_COINS_TO_PLAYER, playerId: 1, numOfCoins: 2})
    expect(newState.find(p => p.id === 1).coins).toBe(initState.find(p => p.id === 1).coins + 2)
  })

})
