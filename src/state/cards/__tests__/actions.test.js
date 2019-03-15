import RootReducer from '../../../RootReducer'

import {
  addCardsToDiscardPile,
  addCardsToDeck,
  emptyDiscardPile,
  removeTopCardFromDeck,
  moveTopCardToDiscardPile,
  moveAllOfferedCardsToDiscardPile,
  emptyOfferedCards,
  moveDiscardPileToDeck,
  moveOfferedCardToDiscardPile,
  destroyOfferedCard,
  discardLastOfferedCard
} from '../actions'

import {
  ADD_CARDS_TO_DISCARD_PILE,
  OFFER_CARD,
  EMPTY_DISCARD_PILE,
  EMPTY_OFFERED_CARDS,
} from '../consts'

import {
  getDiscardPile,
  getDeck,
  getOfferedCards
} from '../selectors'

describe("Cards actions", ()=>{

  let store
  const cards = [
    { id: 1, name: "handyman", "type": "person", influence: 1, price: 6},
    { id: 2, name: "sailor", "type": "person", defence: 1, influence: 2, price: 7},
    { id: 3, name: "pirate", "type": "person", defence: 2, influence: 2, price: 7}
  ];


  beforeEach(()=>{
    store = RootReducer
    store.dispatch({ type: EMPTY_DISCARD_PILE })
    store.dispatch({ type: EMPTY_OFFERED_CARDS })
  })

  it("should add cards to discard pile", ()=>{
    const discardPile = getDiscardPile(store.getState())
    store.dispatch(addCardsToDiscardPile(cards))
    const newDiscardPile = getDiscardPile(store.getState())
    expect(newDiscardPile.length).toBe(discardPile.length + cards.length)
  })

  it("should empty discard pile", ()=>{
    //to make sure that something is in the discard pile
    store.dispatch({ type: ADD_CARDS_TO_DISCARD_PILE, cards })
    store.dispatch(emptyDiscardPile())
    expect(getDiscardPile(store.getState()).length).toBe(0)
  })

  it("should add cards to deck", ()=>{
    const deck = getDeck(store.getState())
    store.dispatch(addCardsToDeck(cards))
    const newDeck = getDeck(store.getState())
    expect(newDeck.length).toBe(deck.length + cards.length)
  })

  it("should remove the top card from the deck", ()=>{
    const deck = getDeck(store.getState())
    const topCard = deck[0]
    store.dispatch(removeTopCardFromDeck())
    const newDeck = getDeck(store.getState())
    const newTopCard = newDeck[0]
    expect(deck.length - 1).toBe(newDeck.length)
  })

  it("should move the top card from deck to discard pile", ()=>{
    const deck = getDeck(store.getState())
    const topCard = deck[0]
    const discardPile = getDiscardPile(store.getState())
    moveTopCardToDiscardPile()(store.dispatch, store.getState)
    const newDeck = getDeck(store.getState())
    const newDiscardPile = getDiscardPile(store.getState())
    const newDiscardPileTopCard = newDiscardPile[0]
    expect(deck.length - 1).toBe(newDeck.length)
    expect(discardPile.length).toBe(newDiscardPile.length - 1)
    expect(topCard).toEqual(newDiscardPileTopCard)
  })

  it("should move offered cards to the discard pile", ()=>{
    //to make sure there are some offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card }))
    const discardPile = getDiscardPile(store.getState())
    const offeredCards = getOfferedCards(store.getState())
    moveAllOfferedCardsToDiscardPile()(store.dispatch, store.getState)
    const newDiscardPile = getDiscardPile(store.getState())
    const newOfferedCards = getOfferedCards(store.getState())
    expect(newOfferedCards.length).toBe(0)
    expect(newDiscardPile.length).toBe(discardPile.length + offeredCards.length)
  })

  it("should empty offered cards", ()=>{
    //to make sure there are some offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card }))
    const offeredCards = getOfferedCards(store.getState())
    store.dispatch(emptyOfferedCards())
    const newOfferedCards = getOfferedCards(store.getState())
    expect(newOfferedCards.length).toBe(0)
  })

  it("should move all cards on discard pile to deck", ()=>{
    //to make sure something is in the discard pile
    store.dispatch({ type: ADD_CARDS_TO_DISCARD_PILE, cards })
    const discardPile = getDiscardPile(store.getState())
    const deck = getDeck(store.getState())
    store.dispatch(moveDiscardPileToDeck())
    const newDiscardPile = getDiscardPile(store.getState())
    const newDeck = getDeck(store.getState())
    expect(newDiscardPile.length).toBe(0);
    expect(newDeck.length).toBe(deck.length + discardPile.length)
  })

  it("should move offered card to discard pile", () => {
    //to make sure there are some offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card }))
    moveOfferedCardToDiscardPile(cards[2])(store.dispatch)
    const newOfferedCards = getOfferedCards(store.getState())
    const newDiscardPile = getDiscardPile(store.getState())
    expect(newOfferedCards.find(c => c.id === cards[2].id)).toBeUndefined()
    expect(newDiscardPile.find(c => c.id === cards[2].id)).toBe(cards[2])
  })

  it('should completely remove the card from the game', () => {
    //to make sure there are some offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card }))
    store.dispatch(destroyOfferedCard(cards[1]))
    const newOfferedCards = getOfferedCards(store.getState())
    expect(newOfferedCards.find(c => c.id === cards[1].id)).toBeUndefined()
  })

  it('should discard last offered card', () => {
    const lastOffered = cards[cards.length - 1]
    //to make sure there are some offered cards
    cards.map(card => store.dispatch({ type: OFFER_CARD, card }))
    const offeredCards = getOfferedCards(store.getState())
    discardLastOfferedCard(store.dispatch, store.getState)
    const newOfferedCards = getOfferedCards(store.getState())
    const newDiscardPile = getDiscardPile(store.getState())
    expect(newOfferedCards[newOfferedCards.length - 1]).toBe(offeredCards[offeredCards.length - 2])
    expect(newOfferedCards.find(c => c.id === lastOffered.id)).toBeUndefined()
    expect(newDiscardPile[newDiscardPile.length - 1]).toBe(lastOffered)
  })

})
