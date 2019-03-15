import Reducer from '../reducer'
import {
  TOGGLE_PHASE,
  INCREMENT_ACTIVE_CARDS_PLAYED,
  SET_CARDS_PLAYED_IN_TRADE_PHASE
} from '../consts'

describe("Phase reducer", ()=>{

  let reducer, initState

  beforeEach(()=>{
    reducer = Reducer
    initState = reducer(undefined, {type: "NON_EXISTENT"})
  })

  it("should toggle the phase", ()=>{
    const newState = reducer(initState, {type: TOGGLE_PHASE})
    expect(initState.activePhase).not.toBe(newState.activePhase)
    const newNewState = reducer(newState, {type: TOGGLE_PHASE})
    expect(newNewState.activePhase).toBe(initState.activePhase)
  })

  it("should increment the number of played cards", () => {
    const newState = reducer(initState, { type: INCREMENT_ACTIVE_CARDS_PLAYED })
    expect(newState.tradePhase.cardsPlayed).toBe(initState.tradePhase.cardsPlayed + 1)
  })

  it("should set the number of played cards", () => {
    const newState = reducer(initState, { type: SET_CARDS_PLAYED_IN_TRADE_PHASE, value: 33 })
    expect(newState.tradePhase.cardsPlayed).toBe(33)
  })

})
