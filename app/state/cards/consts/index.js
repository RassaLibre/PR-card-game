
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
  HOUSE: "house"
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

export const DECK_DEFAULT_STATE = [
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: CARD_TYPES.SHIP, defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },

  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.BLUE },

  { name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: CARD_TYPES.SHIP, defence: 5, coins: 4, color: BOAT_COLORS.GREEN },

  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 1, coins: 2, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 2, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.RED },

  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 2, coins: 2, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 2, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 0, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: CARD_TYPES.SHIP, defence: 0, coins: 4, color: BOAT_COLORS.BLACK },

  {name: "Expedition1", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.CROSS, SIGNS.CROSS]},
  {name: "Expedition2", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR]},
  {name: "Expedition3", type: CARD_TYPES.EXPEDITION, reward: 2, influence: 4, signs: [SIGNS.HOUSE, SIGNS.HOUSE]},
  {name: "Expedition4", type: CARD_TYPES.EXPEDITION, reward: 3, influence: 6, signs: [SIGNS.CROSS, SIGNS.CROSS, SIGNS.HOUSE]},
  {name: "Expedition5", type: CARD_TYPES.EXPEDITION, reward: 3, influence: 6, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR, SIGNS.HOUSE]},

  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.RED},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.RED},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN},
  {name: PERSON_TYPES.TRADER, type: CARD_TYPES.PERSON, influence: 1, price: 3, color: BOAT_COLORS.GREEN},

  {name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.SETTLER, "type": CARD_TYPES.PERSON, influence: 1, price: 4},

  {name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.CAPTAIN, "type": CARD_TYPES.PERSON, influence: 1, price: 4},

  {name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4},
  {name: PERSON_TYPES.MONK, "type": CARD_TYPES.PERSON, influence: 1, price: 4},

  {name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6},
  {name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6},
  {name: PERSON_TYPES.HANDYMAN, "type": CARD_TYPES.PERSON, influence: 1, price: 6},

  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 3},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 2, price: 7},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 9},
  {name: PERSON_TYPES.SAILOR, "type": CARD_TYPES.PERSON, defence: 1, influence: 1, price: 9},

  {name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 1, price: 5},
  {name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 2, price: 7},
  {name: PERSON_TYPES.PIRATE, "type": CARD_TYPES.PERSON, defence: 2, influence: 3, price: 9},

  {name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  {name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  {name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9},
  {name: PERSON_TYPES.MADAM, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  {name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  {name: PERSON_TYPES.JOKER, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 1, price: 5},
  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 2, price: 7},
  {name: PERSON_TYPES.ADMIRAL, "type": CARD_TYPES.PERSON, influence: 3, price: 9},

  {name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  {name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  {name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},
  {name: PERSON_TYPES.GOVERNOR, "type": CARD_TYPES.PERSON, influence: 0, price: 8},

  {name: "maxdefence", "type": CARD_TYPES.TAX},
  {name: "maxdefence", "type": CARD_TYPES.TAX},
  {name: "mininfluence", "type": CARD_TYPES.TAX},
  {name: "mininfluence", "type": CARD_TYPES.TAX}
]
