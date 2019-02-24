/**
* UI EVENT RESPONDERS
* -------------------
* All actions in this file are directly responding to UI events
* such as clicks on the deck, click on the "End round" button
* etc.
*/

import { offerTopFromDeck } from '../cards/actions'
import { next } from '../phases/actions'

export const offerCard = () => (dispatch, getState) => {
  dispatch(offerTopFromDeck())
}

export const interactWithCardInTradePhase = card => (dispatch, getState) => {
  console.log('you just clicked', card)
}

export const interactWithCardInDiscoverPhase = card => dispatch => {
  if(confirm('You are about to end the discover phase. Would you like to proceed?')){
    dispatch(next())
    dispatch(interactWithCardInTradePhase(card))
  }
}
