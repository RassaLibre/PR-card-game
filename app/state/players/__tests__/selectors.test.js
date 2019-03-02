import { getEnhancedOfferedCards } from '../selectors'
import { PHASES } from '../../phases/consts'
import { PERSON_TYPES, CARD_TYPES, BOAT_COLORS, TAX_TYPES, SIGNS } from '../../cards/consts/index.js'

const STATE = {
  cards: {
    offeredCards: [
      { name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
      { name: TAX_TYPES.MAX_DEFENCE, "type": CARD_TYPES.TAX },
      { name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4 },
      { name: "Expedition3", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.HOUSE, SIGNS.HOUSE] },
    ]
  },
  players: [{ id: 1, name: "Tomas", coins: 3, color: "#10DBE8", cards: [
    { name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9 },
    { name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN },
  ]}],
  phases: {
    activePhase: PHASES.DISCOVER,
    discoverPhase: {
      activePlayerIndex: 0
    }
  }
}

describe('getEnhancedOfferedCards', () => {

  const enhancedOfferedCards = getEnhancedOfferedCards(STATE)

  it('should be defined', () => {
    expect(getEnhancedOfferedCards).toBeDefined()
  })

  it('should set discount on person when the active player has madam', () => {
    const card = enhancedOfferedCards.find(c => c.type === CARD_TYPES.PERSON)
    expect(card.discount).toBe(1)
  })

  it('should set bonus on ships when the active player has trader of same color', () => {
    const card = enhancedOfferedCards.find(c => c.type === CARD_TYPES.SHIP)
    expect(card.bonus).toBe(1)
  })

  it('should not attach props to tax cards', () => {
    const taxCard = enhancedOfferedCards.find(c => c.type === CARD_TYPES.TAX)
    expect(taxCard.discount).toBeUndefined()
    expect(taxCard.bonus).toBeUndefined()
  })

  it('should not attach props to expedition cards', () => {
    const expeditionCard = enhancedOfferedCards.find(c => c.type === CARD_TYPES.EXPEDITION)
    expect(expeditionCard.discount).toBeUndefined()
    expect(expeditionCard.bonus).toBeUndefined()
  })

})
