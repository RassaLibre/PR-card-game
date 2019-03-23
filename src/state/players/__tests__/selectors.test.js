import {
  getEnhancedOfferedCards,
  getPlayersWithTwelveOrMoreCoins,
  getPlayersWithMinInfluence,
  getPlayersWithMaxDefence
} from '../selectors'
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
  players: [
    { id: 1, name: "Tomas", coins: 28, color: "#10DBE8", cards: [
      { name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9 },
      { name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN },
    ]},
    { id: 2, name: "Lisa", coins: 7, color: "#10DBE8", cards: [
      {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 0, price: 3},
    ]},
    { id: 3, name: "Paul", coins: 2, color: "#10DBE8", cards: []},
  ],
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

  it('should attach canInteract to expedition cards', () => {
    const expeditionCard = enhancedOfferedCards.find(c => c.type === CARD_TYPES.EXPEDITION)
    expect(expeditionCard.canInteract).toBeDefined()
  })

})

describe('getPlayersWithTwelveOrMoreCoins', () => {

  const playersWithMoreThan12Coins = getPlayersWithTwelveOrMoreCoins(STATE)

  it('should return players that have 12 or more coins', () => {
    expect(playersWithMoreThan12Coins.length).toBe(1)
    expect(playersWithMoreThan12Coins[0].id).toBe(1)
  })

})

describe('getPlayersWithMinInfluence', () => {

  const playersWithMinInfluence = getPlayersWithMinInfluence(STATE)

  it('should return an array of players', () => {
    expect(Array.isArray(playersWithMinInfluence)).toBe(true)
  })

  it('should return players with minimum influence', () => {
    const ID_OF_PLAYERS_WITH_MIN_INFLUENCE = [2, 3]
    const ids = playersWithMinInfluence.map(p => p.id)
    expect(ids.length).toBe(2)
    ID_OF_PLAYERS_WITH_MIN_INFLUENCE.map(id =>
      expect(ids).toContain(id)
    )
  })

})

describe('getPlayersWithMaxDefence', () => {

  const playersWithMaxDefence = getPlayersWithMaxDefence(STATE)

  it('should return an array of players', () => {
    expect(Array.isArray(playersWithMaxDefence)).toBe(true)
  })

  it('should return players with minimum influence', () => {
    const ID_OF_PLAYER_WITH_MAX_DEFENCE = 2
    expect(playersWithMaxDefence[0].id).toBe(ID_OF_PLAYER_WITH_MAX_DEFENCE)
  })

})
