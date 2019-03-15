import {
  OFFER_CARD,
  REMOVE_TOP_CARD_FROM_DECK,
  EMPTY_OFFERED_CARDS,
  ADD_CARDS_TO_DISCARD_PILE,
  ADD_CARDS_TO_DECK,
  SHUFFLE_DECK,
  EMPTY_DISCARD_PILE,
  DISCARD_LAST_OFFERED_CARD,
  REMOVE_OFFERED_CARD,
  DESTROY_OFFERED_CARD
} from './consts'

import {
  getTopCardOnDeck,
  getDiscardPile,
  getOfferedCards,
  getLastOfferedCard
} from './selectors'

import gameHooks from '../gameHooks/actions'

export const emptyOfferedCards = () => ({ type: EMPTY_OFFERED_CARDS })

export const removeOfferedCard = card => ({ type: REMOVE_OFFERED_CARD, card })

export const addCardsToDiscardPile = cards => ({ type: ADD_CARDS_TO_DISCARD_PILE, cards })

export const addCardToOfferedCards = card => ({ type: OFFER_CARD, card })

export const addCardsToDeck = cards => ({ type: ADD_CARDS_TO_DECK, cards })

export const shuffleDeck = () => ({ type: SHUFFLE_DECK })

export const emptyDiscardPile = () => ({ type: EMPTY_DISCARD_PILE })

export const removeTopCardFromDeck = () => ({ type: REMOVE_TOP_CARD_FROM_DECK })

/**
* Completely remove this card from the game. This function should NOT be called
* on its own if the card has not been copied for example to a player before.
*/
export const destroyOfferedCard = card => ({ type: DESTROY_OFFERED_CARD, card })

export const moveTopCardToDiscardPile = () => (dispatch, getState) => {
  const topCard = getTopCardOnDeck(getState())
  dispatch(addCardsToDiscardPile([topCard]))
  dispatch(removeTopCardFromDeck())
}

export const moveOfferedCardToDiscardPile = card => dispatch => {
  dispatch(addCardsToDiscardPile([card]))
  dispatch(removeOfferedCard(card))
}

export const moveAllOfferedCardsToDiscardPile = () => (dispatch, getState) => {
  dispatch(addCardsToDiscardPile(getOfferedCards(getState())))
  dispatch(emptyOfferedCards())
}

export const moveDiscardPileToDeck = () => (dispatch, getState) => {
  dispatch(addCardsToDeck(getDiscardPile(getState())))
  dispatch(emptyDiscardPile())
  dispatch(shuffleDeck())
}

export const offerTopFromDeck = () => (dispatch, getState) => {
  const card = getTopCardOnDeck(getState())
  dispatch(addCardToOfferedCards(card))
  dispatch(removeTopCardFromDeck())
  dispatch(gameHooks.cardOffered(card))
}

export const discardLastOfferedCard = (dispatch, getState) => {
  const lastOffered = getLastOfferedCard(getState())
  dispatch(addCardsToDiscardPile([lastOffered]))
  dispatch({ type: DISCARD_LAST_OFFERED_CARD })
}
