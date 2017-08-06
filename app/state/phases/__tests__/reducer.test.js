import Reducer from '../reducer'
import {
  TOGGLE_PHASE
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

})
