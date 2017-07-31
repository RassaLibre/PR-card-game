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
	getPlayersComputedValues
} from "../selectors";

import {
	bindActionCreators
} from 'redux'

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
		console.log(this.props)
		return(
			<div className="game">
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
							<Player key={player.id} player={player}/>
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
		phases: state.phases
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		offerCard
	}, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
