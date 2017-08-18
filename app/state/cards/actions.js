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

import {
  activePlayerInDiscoverPhaseLosesTurn
} from '../phases/actions'

/**
*
*/
const _isShipDefeated = (ship, activePlayer) => {
  //cannot be defeated
  if(!ship.defence) return false
  else{ //see if the player can defeat it
    if(activePlayer.defence >= ship.defence) return true
    else return false
  }
}

/**
*
*/
const _getNumberOfPlayersCardsWithTypeAndName = (player, type, name) => {
  return player.cards.reduce(
    (prev, curr)=> {
      if(curr.name === name && curr.type === type) prev++
      return prev
    }
  ,0)
}

/**
* @tested
*/
export const emptyOfferedCards = () => dispatch => {
  dispatch({ type: EMPTY_OFFERED_CARDS })
}

/**
* @tested
*/
export const addCardsToDiscardPile = (cards) => dispatch => {
  dispatch({ type: ADD_CARDS_TO_DISCARD_PILE, cards })
}

/**
* @tested
*/
export const addCardsToDeck = (cards) => dispatch => {
  dispatch({ type: ADD_CARDS_TO_DECK, cards })
}

/**
*
*/
export const shuffleDeck = () => dispatch => {
  dispatch({ type: SHUFFLE_DECK })
}

/**
* @tested
*/
export const emptyDiscardPile = () => dispatch => {
  dispatch({ type: EMPTY_DISCARD_PILE })
}

/**
* @tested
*/
export const removeTopCardFromDeck = () => dispatch => {
  dispatch({ type: REMOVE_TOP_CARD_FROM_DECK })
}

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
* This actions is triggered when player wants to turn another card
*/
export const offerCard = card => (dispatch, getState) => {
  const topCard = getTopCardOnDeck(getState())
  if(topCard.type === "ship"){
    const shipsWithSameColor = getOfferedShipsWithColor(getState(), topCard.color)
    if(numOfShipsWithSameColor.length){
      const activePlayer = getActivePlayerOfActivePhase(getState())
      if(_isShipDefeated(topCard, activePlayer)){
        dispatch(moveTopCardToDiscardPile())
        return
      }
      else{
        dispatch(moveTopCardToDiscardPile())
        dispatch(activePlayerInDiscoverPhaseLosesTurn())
        getPlayersWithJoker(getState()).map(p => {
          dispatch(addCoinsToPlayer(p, _getNumberOfPlayersCardsWithTypeAndName(p, "person", "joker")))
        })
        return
      }
    }
  }
  dispatch({ type: OFFER_CARD, card: topCard })
  dispatch(removeTopCardFromDeck())
  //because the card might be the last one
  if(!getAmountOfCardsOnDeck(getState())){
    dispatch(moveDiscardPileToDeck())
    dispatch(shuffleDeck())
  }
}
