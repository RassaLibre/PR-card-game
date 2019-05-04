import { CARD_TYPES } from '../state/cards/consts/index.js'
import getCardsTotalPrice from './getCardsTotalPrice'
import hasAllSymbols from './hasAllSymbols'

const isAffordableForPlayer = (player, card) => {
  switch(card.type){
    case CARD_TYPES.PERSON:
    case CARD_TYPES.SHIP:
      return player.coins >= getCardsTotalPrice(card)
    case CARD_TYPES.EXPEDITION:
      return hasAllSymbols(player, card)
    default:
      throw new Error(`Unknown card type in affordibility calculation ${card.type}`)
  }
}

export default isAffordableForPlayer
