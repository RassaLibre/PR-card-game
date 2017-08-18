import { createSelector } from 'reselect';
import {
  getActivePlayerIndex
} from '../phases/selectors'

/**
*
*/
const _hasJoker = (player) => {
  let hasJoker = false
  player.cards.map(c => {
    if(c.type === "person" && c.name === "joker") hasJoker = true
  })
  return hasJoker
};

/**
*
*/
const _extendPlayerWithCalculatedValues = (player) => {
  let influence = player.cards.reduce((prev, currentCard) => {
    return prev + currentCard.influence;
  }, 0);
  let defence = player.cards.reduce((prev, currentCard) => {
    if(currentCard.type === "person" && (currentCard.name === "pirate" || currentCard.name === "sailor")){
      prev += currentCard.defence;
    }
    return prev;
  }, 0);
  return { ...player, influence, defence };
}

/**
*
*/
export const getPlayerWithId =
  ({ players }, playerId) => _extendPlayerWithCalculatedValues(players.find(p => p.id === playerId))

/**
*
*/
export const getPlayers = (state) => state.players

/**
* Returns an active player from an active phase
*/
export const getActivePlayerOfActivePhase =
  createSelector([ getActivePlayerIndex, getPlayers ], ( activePlayerIndex, players ) =>
    _extendPlayerWithCalculatedValues(players[activePlayerIndex]) )

/**
*
*/
export const getPlayersWithJoker = ({ players }) => players.filter(_hasJoker)

/**
*
*/
export const getNextPlayerIndex = ({ players }, currentIndex) => {
  if(players[currentIndex + 1]) return currentIndex + 1
  else return 0
}

/**
* A player has a some values which are computed
* based on the cards the player has. The selector enhances
* the player object stored in the state with these values
*/
export const getPlayersComputedValues =
  createSelector([ getPlayers ], players => players.map(_extendPlayerWithCalculatedValues))
