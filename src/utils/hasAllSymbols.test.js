import hasAllSymbols from './hasAllSymbols'
import { SIGNS, CARD_TYPES } from '../state/cards/consts/index'

describe('hasAllSymbols', () => {

  const PLAYER = { cards: [
    { type: CARD_TYPES.PERSON, sign: SIGNS.ANCHOR },
    { type: CARD_TYPES.PERSON, sign: SIGNS.CROSS },
    { type: CARD_TYPES.PERSON, sign: SIGNS.ANY }
  ] }

  const EXP1 = { signs: [ SIGNS.CROSS, SIGNS.ANCHOR ] }
  const EXP2 = { signs: [ SIGNS.CROSS, SIGNS.CROSS ] }
  const EXP3 = { signs: [ SIGNS.HOUSE, SIGNS.CROSS ] }
  const EXP4 = { signs: [ SIGNS.HOUSE, SIGNS.HOUSE ] }

  it('should match signs', () => {
    expect(hasAllSymbols(PLAYER, EXP1)).toBeTruthy()
    expect(hasAllSymbols(PLAYER, EXP2)).toBeTruthy()
    expect(hasAllSymbols(PLAYER, EXP3)).toBeTruthy()
    expect(hasAllSymbols(PLAYER, EXP4)).toBeFalsy()
  })

})
