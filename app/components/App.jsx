import React from 'react';
import { connect } from 'react-redux';
import Player from "./Player/Player";
import DiscardPile from "./DiscardPile/DiscardPile";
import OfferedCards from "./OfferedCards/OfferedCards";
import Deck from "./Deck/Deck";
import "./_App.scss";

import {
	markActivePlayer
} from "../selectors";

import {
	offerCard,
	nextPlayer,
	nextPhase
} from "../ducks/Game";

/**
*
*/
const onCardClick = (card) => {
	return function(dispatch, getState){

	}
}

/**
*
*/
class App extends React.Component{

	/**
	*
	*/
	constructor(args){
		super(args);
		this.state = {};
	}

	/**
	*
	*/
	render(){
		return(
			<div className="game">
				<div className="board">
					<DiscardPile/>
					<Deck
						amountOfCards={this.props.deck.length}
						onClick={this.props.offerCard}/>
					<OfferedCards cards={this.props.offeredCards}/>
				</div>
				<div className="players">
					{this.props.players.map((player)=>{
						return (
							<Player
								activePhase={this.props.activePhase}
								onNextPhaseClick={this.props.nextPhase}
								onNextPlayerClick={this.props.nextPlayer}
								isActive={player.isActive}
								defence={player.defence}
								influence={player.influence}
								coins={player.coins}
								key={player.name}
								name={player.name}
								color={player.color}/>
						);
					})}
				</div>
			</div>
		);
	}
}

/**
*
*/
App.defaultProps = {};

/**
*
*/
App.propTypes = {};

/**
*
*/
const mapStateToProps = (state) => {
	return {
		...state.game,
		players: markActivePlayer(state.game)
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		offerCard: () => dispatch(offerCard()),
		nextPlayer: () => dispatch(nextPlayer()),
		nextPhase: () => dispatch(nextPhase())
	};
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
