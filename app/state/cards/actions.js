import {
  OFFER_CARD,
  REMOVE_TOP_CARD_FROM_DECK,
  EMPTY_OFFERED_CARDS
} from './consts'

import {
  getTopCardOnDeck
} from './selectors'

export const offerCard = card => (dispatch, getState) => {
  dispatch({ type: OFFER_CARD, card: getTopCardOnDeck(getState()) })
  dispatch({ type: REMOVE_TOP_CARD_FROM_DECK })
}

export const emptyOfferedCards = () => dispatch => {
  dispatch({ type: EMPTY_OFFERED_CARDS })
}
