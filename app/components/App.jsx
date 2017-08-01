import React from 'react';
import { connect } from 'react-redux';
import Player from "./Player/Player";
import DiscardPile from "./DiscardPile/DiscardPile";
import OfferedCards from "./OfferedCards/OfferedCards";
import Deck from "./Deck/Deck";
import {
	offerCard
} from '../state/cards/actions'
import "./_App.scss";

import {
	getPlayersComputedValues,
	getActivePlayerOfActivePhase
} from "../state/players/selectors";

import {
	getActivePhase
} from "../state/phases/selectors";

import {
	nextStep
} from "../state/phases/actions"

import {
	bindActionCreators
} from 'redux'

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
		console.log(this.props)
		return(
			<div className="game">
				<span>current phase: </span>
				<span>{this.props.activePhase.name}</span>
				<span>Current player: </span>
				<span>{this.props.activePhase.activePlayer.name}</span>
				<button onClick={this.props.nextStep}>Next step</button>
				<div className="board">
					<DiscardPile/>
					<Deck
						amountOfCards={this.props.cards.deck.length}
						onClick={this.props.offerCard}/>
					<OfferedCards cards={this.props.cards.offeredCards}/>
				</div>
				<div className="players">
					{this.props.players.map((player)=>{
						return (
							<Player
								isActive={player.id === this.props.activePhase.activePlayer.id}
								key={player.id}
								player={player}/>
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
		players: getPlayersComputedValues(state),
		cards: state.cards,
		phases: state.phases,
		activePhase: {
			...getActivePhase(state),
			activePlayer: getActivePlayerOfActivePhase(state)
		},
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		offerCard,
		nextStep
	}, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
