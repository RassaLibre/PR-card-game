import { createSelector } from 'reselect'
import {
  getActivePlayerIndex,
  getDiscoverPhaseActivePlayerIndex,
  getTradePhaseActivePlayerIndex,
} from '../phases/selectors'
import { PERSON_TYPES, CARD_TYPES, BOAT_COLORS } from '../cards/consts/index.js'
import { getNumberOfOfferedColors, getOfferedCards } from '../cards/selectors'

const enhancePlayer = (player, numberOfOfferedColors) => {
  let enhancingProps = {
    influence: 0,
    defence: 0,
    turnsInTradePhase: 1,
    perFlush: 0,
    hiringDiscount: 0,
    fiveAndMoreOfferedBonus: 0,
    twoOrTreeOfferedBonus: 0
  }

  //  Calculate the bonus related to traders
  let boatColorBonus = Object.values(BOAT_COLORS).reduce((prev, bc) => {
    prev[bc] = 0
    return prev
  }, {})

  player.cards.forEach(card => {
    enhancingProps.influence += card.influence
    if(card.type !== CARD_TYPES.PERSON)
      return null
    switch(card.name){
      case PERSON_TYPES.TRADER:
        boatColorBonus[card.color] += 1
        break
      case PERSON_TYPES.MADAM:
        enhancingProps.hiringDiscount += 1
        break
      case PERSON_TYPES.JOKER:
        enhancingProps.perFlush += 1
        break
      case PERSON_TYPES.CAPTAIN:
        enhancingProps.twoOrTreeOfferedBonus += 1
        break
      case PERSON_TYPES.ADMIRAL:
        enhancingProps.fiveAndMoreOfferedBonus += 2
        break
      case PERSON_TYPES.GOVERNOR:
        enhancingProps.turnsInTradePhase += 1
        break
      case PERSON_TYPES.SAILOR:
      case PERSON_TYPES.PIRATE:
        enhancingProps.defence += card.defence
        break
      default:
        break
    }
    if(numberOfOfferedColors === 4)
      enhancingProps.turnsInTradePhase += 1
    if(numberOfOfferedColors === 5)
      enhancingProps.turnsInTradePhase += 2
  })
  return { ...player, ...enhancingProps, boatColorBonus }
}

export const getPlayers = state => state.players

export const getEnhancedPlayers =
  createSelector(getPlayers, getNumberOfOfferedColors,
    (players, numberOfOfferedColors) =>
      players.map(p => enhancePlayer(p, numberOfOfferedColors))
  )

export const getPlayersWithTwelveOrMoreCoins =
  createSelector(getEnhancedPlayers,
    players => players.filter(p => p.coins >= 12)
  )

export const getPlayersWithMaxDefence = createSelector(getEnhancedPlayers, players => {
  const sortedPlayers = players.sort((a, b) => b.defence - a.defence)
  const playersWithMaxDefence = []
  for(let player of sortedPlayers){
    if(!playersWithMaxDefence.length)
      playersWithMaxDefence.push(player)
    else if(player.defence === playersWithMaxDefence[0].defence)
      playersWithMaxDefence.push(player)
    else break
  }
  return playersWithMaxDefence
})

export const getPlayersWithMinInfluence = createSelector(getEnhancedPlayers, players => {
  const sortedPlayers = players.sort((a, b) => a.influence - b.influence)
  const playersWithMinInfluence = []
  for(let player of sortedPlayers){
    if(!playersWithMinInfluence.length)
      playersWithMinInfluence.push(player)
    else if(player.influence === playersWithMinInfluence[0].influence)
      playersWithMinInfluence.push(player)
    else break
  }
  return playersWithMinInfluence
})

export const getNextPlayerIndex =
  createSelector(getPlayers, (_state, currentIndex) => currentIndex,
    (players, currentIndex) => {
      if(players[currentIndex + 1]) return currentIndex + 1
      else return 0
    }
  )

export const getActiveEnhancedPlayerOfActivePhase =
  createSelector(getActivePlayerIndex, getEnhancedPlayers,
    (index, enhancePlayers) => enhancePlayers[index]
  )

export const getActiveEnhancedPlayerOfDiscoverPhase =
  createSelector(getDiscoverPhaseActivePlayerIndex, getEnhancedPlayers,
    (activeDiscoverPlayerIndex, enhancedPlayers) => enhancedPlayers[activeDiscoverPlayerIndex]
  )

export const getActiveEnhancedPlayerOfTradePhase =
  createSelector(getTradePhaseActivePlayerIndex, getEnhancedPlayers,
    (activeTradePlayerIndex, enhancedPlayers) => enhancedPlayers[activeTradePlayerIndex]
  )

//  I had to move this one here to prevent circular dependency
//  A possible solution would be to have an enhanced selector
//  that would include both players and cards.
export const getEnhancedOfferedCards =
  createSelector(getOfferedCards, getActiveEnhancedPlayerOfActivePhase,
    (offeredCards, activePlayer) => offeredCards.map(
      offeredCard => {
        const props = { bonus: 0, discount: 0, canInteract: false }

        if(![CARD_TYPES.SHIP, CARD_TYPES.PERSON].includes(offeredCard.type))
          return offeredCard

        if(offeredCard.type === CARD_TYPES.SHIP)
          props.bonus += activePlayer.boatColorBonus[offeredCard.color]

        if(offeredCard.type === CARD_TYPES.PERSON)
          props.discount += activePlayer.hiringDiscount

        return { ...offeredCard, ...props }
      })
    )
