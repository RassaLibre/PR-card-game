import { createSelector } from 'reselect'
import { getActivePlayerIndex } from '../phases/selectors'
import { PERSON_TYPES, CARD_TYPES } from '../cards/consts/index.js'
import { getNumberOfOfferedColors } from '../cards/selectors'
/**
*
*/
const enhancePlayer = (player, numberOfOfferedColors) => {
  let influence = 0 //TODO
  let enhancingProps = {
    influence: 0,
    defence: 0,
    turnsInDiscoverPhase: 1,
    perFlush: 0,
    hiringDiscount: 0,
    fiveAndMoreOfferedBonus: 0,
    twoOrTreeOfferedBonus: 0
  }
  player.cards.map(card => {
    enhancingProps.influence += card.influence
    if(card.type !== CARD_TYPES.PERSON)
      return null
    switch(card.name){
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
        enhancingProps.turnsInDiscoverPhase += 1
        break
      case PERSON_TYPES.SAILOR:
      case PERSON_TYPES.PIRATE:
        enhancingProps.defence += card.defence
        break
      default:
        break
    }
    if(numberOfOfferedColors === 4)
      enhancingProps.turnsInDiscoverPhase += 1
    if(numberOfOfferedColors === 5)
      enhancingProps.turnsInDiscoverPhase += 2
  })
  return { ...player, ...enhancingProps }
}

/**
*
*/
export const getPlayers = (state) => state.players

/**
*
*/
export const getEnhancedPlayers =
  createSelector(getPlayers, getNumberOfOfferedColors,
    (players, numberOfOfferedColors) =>
      players.map(p => enhancePlayer(p, numberOfOfferedColors))
  )


export const getNextPlayerIndex =
  createSelector(getPlayers, (_state, currentIndex) => currentIndex,
    (players, currentIndex) => {
      if(players[currentIndex + 1]) return currentIndex + 1
      else return 0
    }
  )

export const getActiveEnhancedPlayerOfActivePhase =
  createSelector(getActivePlayerIndex, getEnhancedPlayers, (index, enhancePlayers) => enhancePlayers[index] )
