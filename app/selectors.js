import { createSelector } from "reselect";

export const getPlayers = (state) => state.players;

/**
*
*/
export const getPlayersInfluence = createSelector([ getPlayers ], (players)=>{
	return players.map((player)=>{
		let influence = player.cards.reduce((prev, currentCard, index)=> {
			return prev + currentCard.influence;
		}, 0);
		return { ...player, influence };
	});
});

export const getPlayersDefence = createSelector([ getPlayersInfluence ], (players)=>{
	return players.map((player)=>{
		let defence = player.cards.reduce((prev, currentCard, index)=>{
			if(currentCard.type === "person" && (currentCard.name === "pirate" || currentCard.name === "sailor")){
				prev += currentCard.defence;
			}
			return prev;
		}, 0);
		return { ...player, defence };
	});
});
