import Reducer from '../reducer'
import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER,
  ADD_CARD_TO_PLAYER,
  REMOVE_CARD_FROM_PLAYER,
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

  it("Should add a card to a player", () => {
    const playerId = 1,
      card = { id: 34 }
    const newState = reducer(initState, { type: ADD_CARD_TO_PLAYER, playerId, card })
    expect(newState.find(p => p.id === playerId).cards.find(c => c.id === card.id))
      .toBe(card)
  })

  describe("removing cards from a player" , () => {

    const CARD_TO_BE_REMOVED = { id: 44 }, playerId = 1
    let defaultState = null

    // make sure that the player has a card before we attempt to remove it
    beforeEach(() => {
      defaultState = reducer(initState, { type: ADD_CARD_TO_PLAYER, playerId, card: CARD_TO_BE_REMOVED })
    })

    it("Should remove a card from a player", () => {
      const newState = reducer(defaultState, { type: REMOVE_CARD_FROM_PLAYER, playerId, card: CARD_TO_BE_REMOVED })
      expect(newState.find(p => p.id === playerId).cards.find(c => c.id === CARD_TO_BE_REMOVED.id))
        .toBeUndefined()
    })

  })

})
