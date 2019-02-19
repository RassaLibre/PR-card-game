import {
  ADD_COINS_TO_PLAYER
} from './consts'

import {
  getEnhancedPlayers
} from './selectors'

export const addCoinsToPlayer = (playerId, numOfCoins) => dispatch =>
  dispatch({ type: ADD_COINS_TO_PLAYER, playerId, numOfCoins })

export const rewardPlayersForFlush = () => (dispatch, getState) => {
  const players = getEnhancedPlayers(getState())
  players.map(player => {
    if(player.perFlush)
      dispatch(addCoinsToPlayer(player.id, player.perFlush))
  })

}
