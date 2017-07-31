import { createSelector } from "reselect";

export const getPlayers = (state) => state.players;
export const getPhases = (state) => state.getPhases;

/**
*
*/
export const getActivePhase = createSelector([ getPhases ], (phases)=>{
	if(phases.activePhases === 0) return phases.discoverPhase
	else return phases.tradePhase
})

/**
*
*/
export const getActivePlayerIndex = createSelector([ getActivePhase ], (activePhase) => activePhase.activePlayerIndex);

/**
*
*/
export const getActivePlayer = createSelector([ getActivePlayerIndex, getPlayers ], (index, players) => players[index] )

/**
*
*/
export const getPlayersComputedValues = createSelector([ getPlayers ], (players)=>{
	return players.map((player)=>{
		let influence = player.cards.reduce((prev, currentCard, index) => {
			return prev + currentCard.influence;
		}, 0);
		let defence = player.cards.reduce((prev, currentCard, index) => {
			if(currentCard.type === "person" && (currentCard.name === "pirate" || currentCard.name === "sailor")){
				prev += currentCard.defence;
			}
			return prev;
		}, 0);
		return { ...player, influence, defence };
	});
})
