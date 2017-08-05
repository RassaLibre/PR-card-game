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
  getDiscardPile
} from './selectors'

export const offerCard = card => (dispatch, getState) => {
  dispatch({ type: OFFER_CARD, card: getTopCardOnDeck(getState()) })
  dispatch({ type: REMOVE_TOP_CARD_FROM_DECK })
}

export const emptyOfferedCards = () => dispatch => {
  dispatch({ type: EMPTY_OFFERED_CARDS })
}

export const addCardsToDiscardPile = (cards) => dispatch => {
  dispatch({ type: ADD_CARDS_TO_DISCARD_PILE, cards })
}

export addCardsToDeck = (cards) => dispatch => {
  dispatch({ type: ADD_CARDS_TO_DECK, cards })
}

export const shuffleDeck = () => dispatch => {
  dispatch({ type: SHUFFLE_DECK })
}

export emptyDiscardPile = () => dispatch => {
  dispatch({ type: EMPTY_DISCARD_PILE })
}

export MoveDiscardPileToDeck = () => (dispatch, getState) => {
  dispatch(addCardsToDeck(getDiscardPile(getState())))
  dispatch(emptyDiscardPile())
  dispatch(shuffleDeck())
}
