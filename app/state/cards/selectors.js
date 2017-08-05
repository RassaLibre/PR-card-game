export const getTopCardOnDeck = ({ cards: { deck } }) => deck[0]

export const getAmountOfCardsOnDeck = ({ cards: { deck } }) => deck.length

export const getOfferedCards = ({ cards: { offeredCards } }) => offeredCards

export const getDiscardPile = ({ cards: { discardPile } }) => discardPile

export const getOfferedShips = ({ cards: { offeredCards } }) => offeredCards.filter(c => c.type === "ship")

export const getOfferedShipsWithColor = ({ cards: { offeredCards } }, color) =>
  offeredCards.filter(c => c.type === "ship" && c.color === color)
