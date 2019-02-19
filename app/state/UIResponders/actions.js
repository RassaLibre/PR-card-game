/**
* UI EVENT RESPONDERS
* -------------------
* All actions in this file are directly responding to UI events
* such as clicks on the deck, click on the "End round" button
* etc.
*/

import { offerTopFromDeck } from '../cards/actions'

export const offerCard = () => (dispatch, getState) => {
  dispatch(offerTopFromDeck())
}
