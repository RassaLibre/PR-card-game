import { combineReducers } from "redux"
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
  DECK_DEFAULT_STATE
} from './consts/index.js'
import shuffleCards from './utils/shuffleCards'

const deck = (state = shuffleCards(DECK_DEFAULT_STATE), action) => {
  switch(action.type){
    case SHUFFLE_DECK:
      return [...shuffleCards(state)]
    case ADD_CARDS_TO_DECK:
      return [...state, ...action.cards]
    case REMOVE_TOP_CARD_FROM_DECK:
      return [...state.slice(1)]
    default:
      return state
  }
}

const discardPile = (state = [], action) => {
  switch(action.type){
    case EMPTY_DISCARD_PILE:
      return []
    case ADD_CARDS_TO_DISCARD_PILE:
      return [...state, ...action.cards]
    default:
      return state
  }
}

const offeredCards = (state = [], action) => {
  switch(action.type){
    case REMOVE_OFFERED_CARD:
      return state.filter(card => card.id !== action.card.id)
    case DISCARD_LAST_OFFERED_CARD:
      return [...state.slice(0, -1)]
    case EMPTY_OFFERED_CARDS:
      return []
    case OFFER_CARD:
      return [ ...state, action.card ]
    case DESTROY_OFFERED_CARD:
      return state.filter(card => card.id !== action.card.id)
    default:
      return state
  }
}

export default combineReducers({ deck, discardPile, offeredCards })

