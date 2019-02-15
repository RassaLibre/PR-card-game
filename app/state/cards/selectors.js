import { createSelector } from 'reselect'
import { CARD_TYPES } from './consts'

export const getDeck = state => state.cards.deck

export const getOfferedCards = state => state.cards.offeredCards

export const getDiscardPile = state => state.cards.discardPile

export const getTopCardOnDeck = createSelector(getDeck, deck => deck[0])

export const getAmountOfCardsOnDeck = createSelector(getDeck, deck => deck.length)

export const getOfferedShips = createSelector(getOfferedCards,
  offeredCards => offeredCards.filter(card => card.type === CARD_TYPES.SHIP)
)

export const getOfferedColors = createSelector(getOfferedShips, ships =>
  ships.reduce((colors, ship) => {
    if(!colors.includes(ship.color))
      colors.push(ship.color)
    return colors
  }, [])
)

export const getNumberOfOfferedColors = createSelector(getOfferedColors, colors => colors.length)
