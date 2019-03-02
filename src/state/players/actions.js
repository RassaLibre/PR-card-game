import {
  ADD_COINS_TO_PLAYER,
  REMOVE_COINS_FROM_PLAYER
} from './consts'

import {
  getEnhancedPlayers
} from './selectors'

export const addCoinsToPlayer = (playerId, numOfCoins) =>
  ({ type: ADD_COINS_TO_PLAYER, playerId, numOfCoins })

export const removeCoinsFromPlayer = (playerId, numOfCoins) =>
  ({ type: REMOVE_COINS_FROM_PLAYER, playerId, numOfCoins })

export const rewardPlayersForFlush = () => (dispatch, getState) => {
  const players = getEnhancedPlayers(getState())
  players.map(player => {
    if(player.perFlush)
      dispatch(addCoinsToPlayer(player.id, player.perFlush))
  })

}
