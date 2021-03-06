/**
* UI EVENT RESPONDERS
* -------------------
* All actions in this file are directly responding to UI events
* such as clicks on the deck, click on the "End round" button
* etc.
*/

import { offerTopFromDeck } from '../cards/actions'
import { next } from '../phases/actions'
import { playCard } from '../gameHooks/actions'

export const offerCard = () => (dispatch, getState) => {
  dispatch(offerTopFromDeck())
}

export const interactWithCardInTradePhase = card => dispatch => {
  console.log('you just clicked', card)
  dispatch(playCard(card))
}

export const interactWithCardInDiscoverPhase = card => dispatch => {
  if(window.confirm('You are about to end the discover phase. Would you like to proceed?')){
    dispatch(next())
    dispatch(interactWithCardInTradePhase(card))
  }
}
