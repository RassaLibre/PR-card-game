import {
  togglePhase,
  setTradePhaseActivePlayer
} from '../actions'
import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import RootReducer from '../../../RootReducer'
import {
  getTradePhaseActivePlayerIndex,
  getActivePhaseIndex
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
  });

  it("should set the active player in the trade phase", ()=>{
    const initPlayer = getTradePhaseActivePlayerIndex(store.getState())
    const newIndex = 5
    setTradePhaseActivePlayer(newIndex)(store.dispatch)
    expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(newIndex)
  })

});
