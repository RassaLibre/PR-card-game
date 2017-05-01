//actions
const SHUFFLE_DECK = "Game/SHUFFLE_DECK";
const MOVE_DISCARDED_CARDS_TO_DECK = "Game/MOVE_DISCARDED_CARDS_TO_DECK";
const DISCARD_OFFERED_CARDS = "Game/DISCARD_OFFERED_CARDS";
const OFFER_CARD = "Game/OFFER_CARD";
const GIVE_COINS_TO_PLAYER = "Game/GIVE_COINS_TO_PLAYER";
const TAKE_COINS_FROM_PLAYER = "Game/TAKE_COINS_FROM_PLAYER";
const NEXT_PHASE = "Game/NEXT_PHASE";
const NEXT_PLAYER = "Game/NEXT_PLAYER";
const DISCARD_OFFERED_CARD = "Game/DISCARD_OFFERED_CARD";

/**
*	To keep track of in which phase the game is
*/
export const PHASES = {
	DISCOVER: "DISCOVER",
	ACTIVE_PLAYER_TRADE_AND_HIRE: "ACTIVE_PLAYER_TRADE_AND_HIRE",
	OTHER_PLAYERS_TRADE_AND_HIRE: {
		name: "OTHER_PLAYERS_TRADE_AND_HIRE",
		activePlayerID: null
	}
};

/**
*	Phases of the game in order in which they go in the game
*/
const PHASE_QUEUE = [
	PHASES.DISCOVER,
	PHASES.ACTIVE_PLAYER_TRADE_AND_HIRE,
	PHASES.OTHER_PLAYERS_TRADE_AND_HIRE
];

//helper functions
const getRandomIntBetween = (min, max) => {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
};

/**
*	@param {Array<Card>}
*	@return {Array<Card>}
*/
const shuffleCards = (deck) => {
	for(var i = 0; i < 5000; i++){
	  let pos1 = getRandomIntBetween(0, deck.length);
	  let pos2 = getRandomIntBetween(0, deck.length);
	  let temp = deck[pos1];
	  deck[pos1] = deck[pos2];
	  deck[pos2] = temp;
	}
	return [ ...deck ];
};

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
};

//default state
const DEFAULT_STATE = {
	activePhase: PHASES.DISCOVER,
	players: [
		{id: 1, name: "Tomas", coins: 3, color: "#10DBE8", cards:[]},
		{id: 2, name: "Lisa", coins: 3, color: "#09FFC0", cards:[]},
		{id: 3, name: "Denisa", coins: 3, color: "#69BF7B", cards:[]},
		{id: 4, name: "Jan", coins: 3, color: "#F5E27C", cards:[]}
	],
	activePlayerID: 1,
	deck: [
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

	],
	discardedDeck: [],
	offeredCards: []
};

//reducer
export default function reducer(state, action){
	if(!state) state = { ...DEFAULT_STATE, deck: shuffleCards(DEFAULT_STATE.deck)};
	switch(action.type){
		case OFFER_CARD:
			return {
				...state,
				offeredCards: [...state.offeredCards, state.deck[0]],
				deck: [...state.deck.slice(1)]
			};
		case NEXT_PLAYER:
			var activePlayer = state.players.find(p => p.id === state.activePlayerID);
			var indexOfActivePlayer = state.players.indexOf(activePlayer);
			if(state.players[indexOfActivePlayer + 1]){
				return { ...state, activePlayerID: state.players[indexOfActivePlayer + 1].id };
			}
			else return { ...state, activePlayerID: state.players[0].id };
		case NEXT_PHASE:
			var phaseIndex = PHASE_QUEUE.indexOf(state.activePhase);
			if(PHASE_QUEUE[phaseIndex + 1])
				return { ...state, activePhase: PHASE_QUEUE[phaseIndex + 1] };
			else
				return { ...state, activePhase: PHASE_QUEUE[0] };
		case GIVE_COINS_TO_PLAYER:
			var playerToAlter = state.players.filter(p => p.id === action.playerId);
			var index = state.players.indexOf(playerToAlter);
			if(index < 0) return state;
			return {
				...state,
				players: [
					...state.players.slice(0, index),
					{ ...state.players[index], coins: state.players[index].coins + action.coins },
					...state.players.slice(index + 1)
				]
			};
		case TAKE_COINS_FROM_PLAYER:
			var playerToAlter = state.players.filter(p => p.id === action.playerId);
			var index = state.players.indexOf(playerToAlter);
			if(index < 0) return state;
			return {
				...state,
				players: [
					...state.players.slice(0, index),
					{ ...state.players[index], coins: state.players[index].coins - action.coins },
					...state.players.slice(index + 1)
				]
			};
		case DISCARD_OFFERED_CARD:
			var indexOfCard = state.offeredCards.indexOf(action.card);
			if(indexOfCard < 0) return state;
			return {
				...state,
				offeredCards: [
					...state.offeredCards.slice(0, index),
					...state.offeredCards.slice(index + 1)
				]
			};
		case SHUFFLE_DECK:
			return {...state, deck: shuffleCards(state.deck)};
		case MOVE_DISCARDED_CARDS_TO_DECK:
			return {...state, deck: shuffleCards(state.discardedDeck), discardedDeck: []};
		case DISCARD_OFFERED_CARDS:
			return {
				...state,
				discardedDeck: [...state.discardedDeck, ...state.offeredCards.filter(c => c.type !== "expedition")],
				offeredCards: [...state.offeredCards.filter(c => c.type === "expedition")]	//because expeditions stay
			};
		default:
			return state;
	}
};

//action creators

/**
*
*/
export function shuffleDeck(){
	return { type: SHUFFLE_DECK };
}

/**
*
*/
export function moveDiscardedCardsToDeck(){
	return { type: MOVE_DISCARDED_CARDS_TO_DECK };
}

/**
*
*/
export function discardOfferedCards(){
	return { type: DISCARD_OFFERED_CARDS };
}

/**
*
*/
export function offerCard(){
	return { type: OFFER_CARD };
}

/**
*
*/
export function discardOfferedCard(card){
	return { type: DISCARD_OFFERED_CARD, card };
}

/**
*	@param {Number}
*	@param {Number}
*/
export function giveCoinsToPlayer(playerId, coins){
	return { type: GIVE_COINS_TO_PLAYER, playerId, coins };
}

/**
*	@param {Number}
*	@param {Number}
*/
export function takeCoinsFromPlayer(playerId, coins){
	return { type: TAKE_COINS_FROM_PLAYER, playerId, coins };
}

/**
*
*/
export function nextPhase(){
	return { type: NEXT_PHASE };
}

/**
*
*/
export function nextPlayer(){
	return { type: NEXT_PLAYER };
}
