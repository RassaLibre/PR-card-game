import {
  togglePhase,
  setTradePhaseActivePlayer,
  setDiscoverPhaseActivePlayer,
  activePlayerInDiscoverPhaseLosesTurn,
  nextStep,
  next
} from '../actions'
import RootReducer from '../../../RootReducer'
import {
  getTradePhaseActivePlayerIndex,
  getActivePhaseIndex,
  getActivePhaseName,
  getDiscoverPhaseActivePlayerIndex
} from '../selectors'
import {
  OFFER_CARD
} from '../../cards/consts'
import {
  SET_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER,
  PHASES
} from '../consts'
import {
  getPlayers
} from '../../players/selectors'
import {
  getOfferedCards,
  getDiscardPile
} from '../../cards/selectors'


describe("Phase actions", ()=>{

  let store;
  const cards = [
    {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
    {name: "pirate", "type": "person", defence: 2, influence: 2, price: 7},
    {name: "madam", "type": "person", influence: 3, price: 9}
  ];

  beforeAll(()=>{
    store = RootReducer
    //fill the state with some dummy cards. I have to make sure that something
    //is in the offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card: card }))
  })

  describe('next', () => {
    it('should follow the game cycle', () => {
      expect(getActivePhaseName(store.getState())).toBe(PHASES.DISCOVER)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())

      expect(getActivePhaseName(store.getState())).toBe(PHASES.DISCOVER)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())

      expect(getActivePhaseName(store.getState())).toBe(PHASES.DISCOVER)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())

      expect(getActivePhaseName(store.getState())).toBe(PHASES.DISCOVER)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())

      expect(getActivePhaseName(store.getState())).toBe(PHASES.DISCOVER)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(0)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(2)
      store.dispatch(next())
      expect(getActivePhaseName(store.getState())).toBe(PHASES.TRADE)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(3)
      store.dispatch(next())
    })
  })

})
