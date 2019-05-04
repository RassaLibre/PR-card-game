import { PERSON_TYPES, CARD_TYPES, BOAT_COLORS, SIGNS } from '../state/cards/consts/index.js'

const hasAllSymbols = (player, expeditionCard) => {
  const requiredSigns = expeditionCard.signs
  player.cards.map(playersCard => {
    if(playersCard.type === CARD_TYPES.PERSON && requiredSigns.includes(playersCard.sign)){
      const index = requiredSigns.indexOf(playersCard.sign)
      requiredSigns.splice(index, 1)
    }
  })
  if(!requiredSigns.length) return true
  const numberOfJokers = player.cards
    .filter(card => card.type === CARD_TYPES.PERSON && card.sign === SIGNS.ANY)
    .length
  if(numberOfJokers >= requiredSigns.length) return true
  else return false
}

export default hasAllSymbols
