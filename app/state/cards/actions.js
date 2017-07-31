import {
  OFFER_CARD,
  REMOVE_TOP_CARD_FROM_DECK
} from './consts'

import {
  getTopCardOnDeck
} from './selectors'

export const offerCard = card => (dispatch, getState) => {
  dispatch({ type: OFFER_CARD, card: getTopCardOnDeck(getState()) })
  dispatch({ type: REMOVE_TOP_CARD_FROM_DECK })
}
