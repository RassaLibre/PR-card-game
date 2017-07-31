import { combineReducers } from "redux"
import {
  OFFER_CARD,
  REMOVE_TOP_CARD_FROM_DECK
} from './consts'

import {
  getRandomIntBetween
} from '../../utils'

//constats
const BOAT_COLORS = {
  YELLOW: "yellow",
  BLUE: "blue",
  GREEN: "green",
  RED: "red",
  BLACK: "black"
}

const SIGNS = {
  ANCHOR: "anchor",
  CROSS: "cross",
  HOUSE: "house"
}

const DECK_DEFAULT_STATE = [
  { name: "Salupa", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },
  { name: "Salupa", type: "ship", defence: 3, coins: 4, color: BOAT_COLORS.YELLOW },

  { name: "Flauta", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 2, coins: 3, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.BLUE },
  { name: "Flauta", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.BLUE },

  { name: "Briga", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 3, coins: 3, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.GREEN },
  { name: "Briga", type: "ship", defence: 5, coins: 4, color: BOAT_COLORS.GREEN },

  { name: "Fregata", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 1, coins: 1, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 1, coins: 2, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 3, coins: 2, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 3, coins: 3, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 6, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 7, coins: 4, color: BOAT_COLORS.RED },
  { name: "Fregata", type: "ship", defence: 7, coins: 4, color: BOAT_COLORS.RED },

  { name: "Galeona", type: "ship", defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 2, coins: 1, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 2, coins: 2, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 4, coins: 2, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 4, coins: 3, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 7, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 9, coins: 4, color: BOAT_COLORS.BLACK },
  { name: "Galeona", type: "ship", defence: 9, coins: 4, color: BOAT_COLORS.BLACK },

  {name: "Expedition1", type: "expedition", reward: 2, influence: 4, signs: [SIGNS.CROSS, SIGNS.CROSS]},
  {name: "Expedition2", type: "expedition", reward: 2, influence: 4, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR]},
  {name: "Expedition3", type: "expedition", reward: 2, influence: 4, signs: [SIGNS.HOUSE, SIGNS.HOUSE]},
  {name: "Expedition4", type: "expedition", reward: 3, influence: 6, signs: [SIGNS.CROSS, SIGNS.CROSS, SIGNS.HOUSE]},
  {name: "Expedition5", type: "expedition", reward: 3, influence: 6, signs: [SIGNS.ANCHOR, SIGNS.ANCHOR, SIGNS.HOUSE]},

  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.YELLOW},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.RED},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.RED},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.BLUE},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.BLACK},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.GREEN},
  {name: "trader", type: "person", influence: 1, price: 3, color: BOAT_COLORS.GREEN},

  {name: "settler", "type": "person", influence: 1, price: 4},
  {name: "settler", "type": "person", influence: 1, price: 4},
  {name: "settler", "type": "person", influence: 1, price: 4},
  {name: "settler", "type": "person", influence: 1, price: 4},
  {name: "settler", "type": "person", influence: 1, price: 4},

  {name: "captain", "type": "person", influence: 1, price: 4},
  {name: "captain", "type": "person", influence: 1, price: 4},
  {name: "captain", "type": "person", influence: 1, price: 4},
  {name: "captain", "type": "person", influence: 1, price: 4},
  {name: "captain", "type": "person", influence: 1, price: 4},

  {name: "monk", "type": "person", influence: 1, price: 4},
  {name: "monk", "type": "person", influence: 1, price: 4},
  {name: "monk", "type": "person", influence: 1, price: 4},
  {name: "monk", "type": "person", influence: 1, price: 4},
  {name: "monk", "type": "person", influence: 1, price: 4},

  {name: "handyman", "type": "person", influence: 1, price: 6},
  {name: "handyman", "type": "person", influence: 1, price: 6},
  {name: "handyman", "type": "person", influence: 1, price: 6},

  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 3},
  {name: "sailor", "type": "person", defence: 1, influence: 2, price: 7},
  {name: "sailor", "type": "person", defence: 1, influence: 2, price: 7},
  {name: "sailor", "type": "person", defence: 1, influence: 2, price: 7},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 9},
  {name: "sailor", "type": "person", defence: 1, influence: 1, price: 9},

  {name: "pirate", "type": "person", defence: 2, influence: 1, price: 5},
  {name: "pirate", "type": "person", defence: 2, influence: 2, price: 7},
  {name: "pirate", "type": "person", defence: 2, influence: 3, price: 9},

  {name: "madam", "type": "person", influence: 2, price: 7},
  {name: "madam", "type": "person", influence: 2, price: 7},
  {name: "madam", "type": "person", influence: 3, price: 9},
  {name: "madam", "type": "person", influence: 3, price: 9},

  {name: "joker", "type": "person", influence: 1, price: 5},
  {name: "joker", "type": "person", influence: 1, price: 5},
  {name: "joker", "type": "person", influence: 1, price: 5},
  {name: "joker", "type": "person", influence: 2, price: 7},
  {name: "joker", "type": "person", influence: 3, price: 9},

  {name: "admiral", "type": "person", influence: 1, price: 5},
  {name: "admiral", "type": "person", influence: 1, price: 5},
  {name: "admiral", "type": "person", influence: 1, price: 5},
  {name: "admiral", "type": "person", influence: 2, price: 7},
  {name: "admiral", "type": "person", influence: 2, price: 7},
  {name: "admiral", "type": "person", influence: 3, price: 9},

  {name: "governor", "type": "person", influence: 0, price: 8},
  {name: "governor", "type": "person", influence: 0, price: 8},
  {name: "governor", "type": "person", influence: 0, price: 8},
  {name: "governor", "type": "person", influence: 0, price: 8},

  {name: "maxdefence", "type": "tax"},
  {name: "maxdefence", "type": "tax"},
  {name: "mininfluence", "type": "tax"},
  {name: "mininfluence", "type": "tax"}
]

const _shuffleCards = (deck) => {
  for(var i = 0; i < 5000; i++){
    let pos1 = getRandomIntBetween(0, deck.length);
    let pos2 = getRandomIntBetween(0, deck.length);
    let temp = deck[pos1];
    deck[pos1] = deck[pos2];
    deck[pos2] = temp;
  }
  return [ ...deck ];
};

const deck = (state = _shuffleCards(DECK_DEFAULT_STATE), action) => {
  switch(action.type){
    case REMOVE_TOP_CARD_FROM_DECK:
      return [...state.slice(1)]
    default:
      return state
  }
}

const discardPile = (state = [], action) => {
  switch(action.type){
    default:
      return state
  }
}

const offeredCards = (state = [], action) => {
  switch(action.type){
    case OFFER_CARD:
      return [ ...state, action.card ]
    default:
      return state
  }
}

export default combineReducers({ deck, discardPile, offeredCards })

