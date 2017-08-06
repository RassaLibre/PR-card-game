import {
  togglePhase,
  setTradePhaseActivePlayer,
  setDiscoverPhaseActivePlayer
} from '../actions'
import RootReducer from '../../../RootReducer'
import {
  getTradePhaseActivePlayerIndex,
  getActivePhaseIndex,
  getDiscoverPhaseActivePlayerIndex
} from '../selectors'

describe("Phase actions", ()=>{

  let store;

  beforeEach(()=>{
    store = RootReducer
  })

  it("should toggle between two phases", ()=>{
    const initPhase = getActivePhaseIndex(store.getState())
    togglePhase()(store.dispatch)
    expect(getActivePhaseIndex(store.getState())).not.toBe(initPhase)
    togglePhase()(store.dispatch)
    expect(getActivePhaseIndex(store.getState())).toBe(initPhase)
  })

  it("should set the active player in the trade phase", ()=>{
    const initPlayer = getTradePhaseActivePlayerIndex(store.getState())
    const newIndex = initPlayer + 1
    setTradePhaseActivePlayer(newIndex)(store.dispatch)
    expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(newIndex)
  })

  it("should set the active player in the discover phase", ()=>{
    const initPlayer = getDiscoverPhaseActivePlayerIndex(store.getState())
    const newIndex = initPlayer + 1
    setDiscoverPhaseActivePlayer(newIndex)(store.dispatch)
    expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(newIndex)
  })

})
