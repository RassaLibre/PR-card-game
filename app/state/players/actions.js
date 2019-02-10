import {
  ADD_COINS_TO_PLAYER
} from './consts'

export const addCoinsToPlayer = (playerId, numOfCoins) => dispatch =>
  dispatch({ type: ADD_COINS_TO_PLAYER, playerId, numOfCoins })
