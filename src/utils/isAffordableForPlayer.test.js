import isAffordableForPlayer from './isAffordableForPlayer'
import { CARD_TYPES, SIGNS } from '../state/cards/consts/index.js'

describe('isAffordableForPlayer', () => {

  const PLAYER = { coins: 7, cards: [
    { type: CARD_TYPES.PERSON, sign: SIGNS.HOUSE },
    { type: CARD_TYPES.PERSON, sign: SIGNS.ANCHOR }
  ] }

  const PERSON_CARD = { type: CARD_TYPES.PERSON, price: 9, discount: 3, tax: 1 }
  const SHIP_CARD = { type: CARD_TYPES.SHIP, price: 9, discount: 3, tax: 1 }
  const EXP_CARD = { type: CARD_TYPES.EXPEDITION, signs: [ SIGNS.HOUSE, SIGNS.ANCHOR ] }

  it('should be affordable for person', () => {
    expect(isAffordableForPlayer(PLAYER, PERSON_CARD)).toBeTruthy()
  })

  it('should be affordable for ship', () => {
    expect(isAffordableForPlayer(PLAYER, SHIP_CARD)).toBeTruthy()
  })

  it('should be affordable for expedition', () => {
    expect(isAffordableForPlayer(PLAYER, EXP_CARD)).toBeTruthy()
  })

})
