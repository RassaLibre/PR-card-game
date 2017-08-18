import {
  togglePhase,
  setTradePhaseActivePlayer,
  setDiscoverPhaseActivePlayer,
  activePlayerInDiscoverPhaseLosesTurn
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

})
