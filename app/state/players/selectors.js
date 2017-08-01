import { createSelector } from 'reselect';
import {
  getActivePlayerIndex
} from '../phases/selectors'

export const getPlayers = (state) => state.players

/**
* Returns an active player from an active phase
*/
export const getActivePlayerOfActivePhase =
  createSelector([ getActivePlayerIndex, getPlayers ], ( activePlayerIndex, players )=> players[activePlayerIndex] )

/**
*
*/
export const getNextPlayerIndex = ({ players }, currentIndex) => {
  if(players[currentIndex + 1]) return currentIndex + 1
  else return 0
}

/**
*
*/
export const getPlayersComputedValues = createSelector([ getPlayers ], (players)=>{
  return players.map((player)=>{
    let influence = player.cards.reduce((prev, currentCard, index) => {
      return prev + currentCard.influence;
    }, 0);
    let defence = player.cards.reduce((prev, currentCard, index) => {
      if(currentCard.type === "person" && (currentCard.name === "pirate" || currentCard.name === "sailor")){
        prev += currentCard.defence;
      }
      return prev;
    }, 0);
    return { ...player, influence, defence };
  });
})
