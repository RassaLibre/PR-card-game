import React from 'react';
import { connect } from 'react-redux';
import Player from "./Player/Player";
import DiscoverPhase from '../containers/DiscoverPhase/DiscoverPhase'
import TradePhase from '../containers/TradePhase/TradePhase'
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
		const { activePhase, nextStep, phases, players, numOfOfferedCards } = this.props
		return(
			<div className="game">
				<span>current phase: </span>
				<span>{activePhase.name}</span>
				<span>Current player: </span>
				<span>{activePhase.activePlayer.name}</span>
				<button onClick={nextStep} disabled={!numOfOfferedCards}>Next step</button>
				{(phases.activePhase) ? <TradePhase/> : <DiscoverPhase/> }
				<div className="players">
	        {players.map((player)=>{
	          return (
	            <Player
	              isActive={player.id === activePhase.activePlayer.id}
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
		phases: state.phases,
		numOfOfferedCards: state.cards.offeredCards.length,
		activePhase: {
			...getActivePhase(state),
			activePlayer: getActivePlayerOfActivePhase(state)
		},
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		nextStep
	}, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(App);
