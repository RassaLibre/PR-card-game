import {
  togglePhase,
  setTradePhaseActivePlayer,
  setDiscoverPhaseActivePlayer,
  activePlayerInDiscoverPhaseLosesTurn,
  nextStep
} from '../actions'
import RootReducer from '../../../RootReducer'
import {
  getTradePhaseActivePlayerIndex,
  getActivePhaseIndex,
  getDiscoverPhaseActivePlayerIndex
} from '../selectors'
import {
  OFFER_CARD
} from '../../cards/consts'
import {
  SET_PHASE,
  SET_TRADE_PHASE_ACTIVE_PLAYER,
  SET_DISCOVER_PHASE_ACTIVE_PLAYER
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

  describe("Player loses turn in discover phase", ()=>{

    it("should set a new active player in trade phase", ()=>{
      const activePlayer = getTradePhaseActivePlayerIndex(store.getState())
      activePlayerInDiscoverPhaseLosesTurn()(store.dispatch, store.getState)
      const newActivePlayer = getTradePhaseActivePlayerIndex(store.getState())
      expect(activePlayer).not.toBe(newActivePlayer)
    })

    it("should set a new active player in discover phase", ()=>{
      const activePlayer = getDiscoverPhaseActivePlayerIndex(store.getState())
      activePlayerInDiscoverPhaseLosesTurn()(store.dispatch, store.getState)
      const newActivePlayer = getDiscoverPhaseActivePlayerIndex(store.getState())
      expect(activePlayer).not.toBe(newActivePlayer)
    })

    it("should set the same player as an active player for both phases", ()=>{
      activePlayerInDiscoverPhaseLosesTurn()(store.dispatch, store.getState)
      const activeTradePlayer = getTradePhaseActivePlayerIndex(store.getState())
      const activeDiscoverPlayer = getDiscoverPhaseActivePlayerIndex(store.getState())
      expect(activeTradePlayer).toBe(activeDiscoverPlayer)
    })

    it("should move offered cards to discard pile", ()=>{
      let numOfDiscardCards = getDiscardPile(store.getState()).length
      let numOfOfferedCards = getOfferedCards(store.getState()).length
      activePlayerInDiscoverPhaseLosesTurn()(store.dispatch, store.getState)
      //offered cards shall be empty
      expect(getOfferedCards(store.getState()).length).toBe(0)
      //everything that was offered is now discarded
      expect(getDiscardPile(store.getState()).length).toBe(numOfDiscardCards + numOfOfferedCards)
    })

  })

  describe("Phase cycles in the game", ()=>{

    it("should change the phase when the active phase is discover", ()=>{
      //to make sure we are in the discover phase
      store.dispatch({ type: SET_PHASE, phase: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getActivePhaseIndex(store.getState())).toBe(1);
    })

    it("should keep the phase when in trade phase and not at the end", ()=>{
      //to make sure trade phase is active
      store.dispatch({ type: SET_PHASE, phase: 1 })
      //to make sure that the first player is active
      store.dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      store.dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getActivePhaseIndex(store.getState())).toBe(1)
    })

    it("should change the phase when trade phase is over", ()=>{
      //to make sure trade phase is active
      store.dispatch({ type: SET_PHASE, phase: 1 })
      //to make sure that the first player is active
      store.dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex: 3 })
      store.dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getActivePhaseIndex(store.getState())).toBe(0)
    })

    it("should change the active player in discover phase when trade phase is over", ()=>{
      //to make sure trade phase is active
      store.dispatch({ type: SET_PHASE, phase: 1 })
      //to make sure that the first player is active
      store.dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex: 3 })
      store.dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getDiscoverPhaseActivePlayerIndex(store.getState())).toBe(1)
    })

    it("should change the active player in trade phase when trade phase is over", ()=>{
      //to make sure trade phase is active
      store.dispatch({ type: SET_PHASE, phase: 1 })
      //to make sure that the first player is active
      store.dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex: 3 })
      store.dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getTradePhaseActivePlayerIndex(store.getState())).toBe(1)
    })

    it("active players should be the same when trade phase is over", ()=>{
      //to make sure trade phase is active
      store.dispatch({ type: SET_PHASE, phase: 1 })
      //to make sure that the first player is active
      store.dispatch({ type: SET_TRADE_PHASE_ACTIVE_PLAYER, playerIndex: 3 })
      store.dispatch({ type: SET_DISCOVER_PHASE_ACTIVE_PLAYER, playerIndex: 0 })
      nextStep()(store.dispatch, store.getState)
      expect(getTradePhaseActivePlayerIndex(store.getState()))
        .toBe(getDiscoverPhaseActivePlayerIndex(store.getState()))
    })

  })

})
