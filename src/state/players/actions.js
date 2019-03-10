import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER,
  ADD_CARD_TO_PLAYER,
  REMOVE_CARD_FROM_PLAYER
} from './consts'

import {
  getEnhancedPlayers
} from './selectors'

export const addCardToPlayer = (playerId, card) =>
  ({ type: ADD_CARD_TO_PLAYER, playerId, card })

export const removeCardFromPlayer = (playerId, card) =>
  ({ type: REMOVE_CARD_FROM_PLAYER, playerId, card })

export const addCoinsToPlayer = (playerId, numOfCoins) =>
  ({ type: ADD_COINS_TO_PLAYER, playerId, numOfCoins })

export const removeCoinsFromPlayer = (playerId, numOfCoins) =>
  ({ type: REMOVE_COINS_FROM_PLAYER, playerId, numOfCoins })

export const rewardPlayersForFlush = () => (dispatch, getState) => {
  const players = getEnhancedPlayers(getState())
  players.forEach(player => {
    if(player.perFlush)
      dispatch(addCoinsToPlayer(player.id, player.perFlush))
  })

}
