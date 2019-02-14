import {
  OFFER_CARD,
  REMOVE_TOP_CARD_FROM_DECK,
  EMPTY_OFFERED_CARDS,
  ADD_CARDS_TO_DISCARD_PILE,
  ADD_CARDS_TO_DECK,
  SHUFFLE_DECK,
  EMPTY_DISCARD_PILE
} from './consts'

import {
  getTopCardOnDeck,
  getDiscardPile,
  getAmountOfCardsOnDeck,
  getOfferedShipsWithColor,
  getOfferedCards
} from './selectors'

import {
  getActivePlayerOfActivePhase,
  getPlayersWithJoker
} from '../players/selectors'

import {
  addCoinsToPlayer
} from '../players/actions'

/**
* @tested
*/
export const emptyOfferedCards = () => ({ type: EMPTY_OFFERED_CARDS })

/**
* @tested
*/
export const addCardsToDiscardPile = cards => ({ type: ADD_CARDS_TO_DISCARD_PILE, cards })


/**
* @tested
*/
export const addCardsToDeck = cards => ({ type: ADD_CARDS_TO_DECK, cards })

/**
*
*/
export const shuffleDeck = () => ({ type: SHUFFLE_DECK })

/**
* @tested
*/
export const emptyDiscardPile = () => ({ type: EMPTY_DISCARD_PILE })

/**
* @tested
*/
export const removeTopCardFromDeck = () => ({ type: REMOVE_TOP_CARD_FROM_DECK })

/**
* @tested
*/
export const moveTopCardToDiscardPile = () => (dispatch, getState) => {
  const topCard = getTopCardOnDeck(getState())
  dispatch(addCardsToDiscardPile([topCard]))
  dispatch(removeTopCardFromDeck())
}

/**
* @tested
*/
export const moveOfferedCardsToDiscardPile = () => (dispatch, getState) => {
  dispatch(addCardsToDiscardPile(getOfferedCards(getState())))
  dispatch(emptyOfferedCards())
}

/**
* Because when the deck runs out of cards, we want to fill it
* with the cards from discard pile and shuffle them
* @tested
*/
export const moveDiscardPileToDeck = () => (dispatch, getState) => {
  dispatch(addCardsToDeck(getDiscardPile(getState())))
  dispatch(emptyDiscardPile())
  dispatch(shuffleDeck())
}

/**
* This action takes the card from the top of the deck
* and offers it.
*/
export const offerCard = card => (dispatch, getState) => {
  const card = getTopCardOnDeck(getState())
  dispatch({ type: OFFER_CARD, card })
  dispatch(removeTopCardFromDeck())
}
