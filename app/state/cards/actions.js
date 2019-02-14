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
*
*/
export const emptyOfferedCards = () => ({ type: EMPTY_OFFERED_CARDS })

/**
*
*/
export const addCardsToDiscardPile = cards => ({ type: ADD_CARDS_TO_DISCARD_PILE, cards })


/**
*
*/
export const addCardsToDeck = cards => ({ type: ADD_CARDS_TO_DECK, cards })

/**
*
*/
export const shuffleDeck = () => ({ type: SHUFFLE_DECK })

/**
*
*/
export const emptyDiscardPile = () => ({ type: EMPTY_DISCARD_PILE })

/**
*
*/
export const removeTopCardFromDeck = () => ({ type: REMOVE_TOP_CARD_FROM_DECK })

/**
*
*/
export const moveTopCardToDiscardPile = () => (dispatch, getState) => {
  const topCard = getTopCardOnDeck(getState())
  dispatch(addCardsToDiscardPile([topCard]))
  dispatch(removeTopCardFromDeck())
}

/**
*
*/
export const moveOfferedCardsToDiscardPile = () => (dispatch, getState) => {
  dispatch(addCardsToDiscardPile(getOfferedCards(getState())))
  dispatch(emptyOfferedCards())
}

/**
*
*/
export const moveDiscardPileToDeck = () => (dispatch, getState) => {
  dispatch(addCardsToDeck(getDiscardPile(getState())))
  dispatch(emptyDiscardPile())
  dispatch(shuffleDeck())
}

/**
*
*/
export const offerCard = card => (dispatch, getState) => {
  const card = getTopCardOnDeck(getState())
  dispatch({ type: OFFER_CARD, card })
  dispatch(removeTopCardFromDeck())
}
