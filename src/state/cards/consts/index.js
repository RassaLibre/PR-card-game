
export const BOAT_COLORS = {
  YELLOW: "yellow",
  BLUE: "blue",
  GREEN: "green",
  RED: "red",
  BLACK: "black"
}

export const SIGNS = {
  ANCHOR: "anchor",
  CROSS: "cross",
  HOUSE: "house",
  ANY: "any"
}

export const CARD_TYPES = {
  SHIP: 'ship',
  EXPEDITION: 'expedition',
  PERSON: 'person',
  TAX: 'tax'
}

export const PERSON_TYPES = {
  TRADER: 'trader',
  SETTLER: 'settler',
  MONK: 'monk',
  HANDYMAN: 'handyman',
  MADAM: 'madam',
  PIRATE: 'pirate',
  SAILOR: 'sailor',
  JOKER: 'joker',
  CAPTAIN: 'captain',
  ADMIRAL: 'admiral',
  GOVERNOR: 'governor'
}

export const TAX_TYPES = {
  MAX_DEFENCE: 'MAX_DEFENCE',
  MIN_INFLUENCE: 'MIN_INFLUENCE',
}

export const DECK_DEFAULT_STATE = [
  { id: 1, name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { id: 2, name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { id: 3, name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { id: 4, name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { id: 5, name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { id: 6, name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { id: 7, name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { id: 8, name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { id: 9, name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { id: 10, name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },

  { id: 11, name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { id: 12, name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { id: 13, name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { id: 14, name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { id: 15, name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { id: 16, name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { id: 17, name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { id: 18, name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { id: 19, name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { id: 20, name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },

  { id: 21, name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { id: 22, name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { id: 23, name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { id: 24, name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { id: 25, name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { id: 26, name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { id: 27, name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { id: 28, name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { id: 29, name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { id: 30, name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },

  { id: 31, name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { id: 32, name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { id: 33, name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.RED },
  { id: 34, name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 2, color: BOAT_COLORS.RED },
  { id: 35, name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { id: 36, name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { id: 37, name: "Fregata", type: CARD_TYPES.SHIP, defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { id: 38, name: "Fregata", type: CARD_TYPES.SHIP, defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { id: 39, name: "Fregata", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.RED },
  { id: 40, name: "Fregata", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.RED },

  { id: 41, name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { id: 42, name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { id: 43, name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 2, color: BOAT_COLORS.BLACK },
  { id: 44, name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 2, color: BOAT_COLORS.BLACK },
  { id: 45, name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { id: 46, name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { id: 47, name: "Galeona", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { id: 48, name: "Galeona", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { id: 49, name: "Galeona", type: CARD_TYPES.SHIP, defence: 0, coins: 4, color: BOAT_COLORS.BLACK },
  { id: 50, name: "Galeona", type: CARD_TYPES.SHIP, defence: 0, coins: 4, color: BOAT_COLORS.BLACK },

  { id: 51, name: "Expedition1", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.CROSS, SIGNS.CROSS]},
  { id: 52, name: "Expedition2", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR]},
  { id: 53, name: "Expedition3", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.HOUSE, SIGNS.HOUSE]},
  { id: 54, name: "Expedition4", type: CARD_TYPES.EXPEDITION, reward: 3, influence: 6, signs: [SIGNS.CROSS, SIGNS.CROSS, SIGNS.HOUSE]},
  { id: 55, name: "Expedition5", type: CARD_TYPES.EXPEDITION, reward: 3, influence: 6, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR, SIGNS.HOUSE]},

  { id: 56, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  { id: 57, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  { id: 58, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.RED},
  { id: 59, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.RED},
  { id: 60, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  { id: 61, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  { id: 62, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  { id: 63, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  { id: 64, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN},
  { id: 65, name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN},

  { id: 66, name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.HOUSE},
  { id: 67, name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.HOUSE},
  { id: 68, name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.HOUSE},
  { id: 69, name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.HOUSE},
  { id: 70, name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.HOUSE},

  { id: 71, name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.ANCHOR},
  { id: 72, name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.ANCHOR},
  { id: 73, name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.ANCHOR},
  { id: 74, name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.ANCHOR},
  { id: 75, name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.ANCHOR},

  { id: 76, name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.CROSS},
  { id: 77, name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.CROSS},
  { id: 78, name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.CROSS},
  { id: 79, name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.CROSS},
  { id: 80, name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4, sign: SIGNS.CROSS},

  { id: 81, name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6, sign: SIGNS.ANY},
  { id: 82, name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6, sign: SIGNS.ANY},
  { id: 83, name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6, sign: SIGNS.ANY},

  { id: 84, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  { id: 85, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  { id: 86, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  { id: 87, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  { id: 88, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  { id: 89, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  { id: 90, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  { id: 91, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  { id: 92, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 9},
  { id: 93, name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 9},

  { id: 94, name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 1, price: 5},
  { id: 95, name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 2, price: 7},
  { id: 96, name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 3, price: 9},

  { id: 97, name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  { id: 98, name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  { id: 99, name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9},
  { id: 100, name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  { id: 101, name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 102, name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 103, name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 104, name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  { id: 105, name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  { id: 106, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 107, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 108, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  { id: 109, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  { id: 110, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  { id: 111, name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  { id: 112, name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  { id: 113, name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  { id: 114, name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  { id: 115, name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},

  { id: 116, name: TAX_TYPES.MAX_DEFENCE, "type": CARD_TYPES.TAX},
  { id: 117, name: TAX_TYPES.MAX_DEFENCE, "type": CARD_TYPES.TAX},
  { id: 118, name: TAX_TYPES.MIN_INFLUENCE, "type": CARD_TYPES.TAX},
  { id: 119, name: TAX_TYPES.MIN_INFLUENCE, "type": CARD_TYPES.TAX}
]
