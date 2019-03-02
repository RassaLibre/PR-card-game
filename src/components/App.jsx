import React from 'react';
import { connect } from 'react-redux';
import Player from "./Player/Player";
import DiscoverPhase from '../containers/DiscoverPhase/DiscoverPhase'
import TradePhase from '../containers/TradePhase/TradePhase'
import "./_App.scss";

import {
	getEnhancedPlayers,
	getActiveEnhancedPlayerOfActivePhase
} from "../state/players/selectors";

import {
	getActivePhase
} from "../state/phases/selectors";

import {
	next
} from "../state/phases/actions"

import {
	bindActionCreators
} from 'redux'

/**
*
*/
class Application extends React.Component{

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
				<span>{this.props.ac}</span>
				<span>Current player: </span>
				<span>{activePhase.activePlayer.name}</span>
				<button onClick={nextStep}>Next step</button>
				{this.props.ac === "DISCOVER" ? <DiscoverPhase/> : <TradePhase/> }
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
Application.defaultProps = {};

/**
*
*/
Application.propTypes = {};

/**
*
*/
const mapStateToProps = (state) => {
	return {
		players: getEnhancedPlayers(state),
		phases: state.phases,
		numOfOfferedCards: state.cards.offeredCards.length,
		ac: state.phases.activePhase,
		activePhase: {
			...getActivePhase(state),
			activePlayer: getActiveEnhancedPlayerOfActivePhase(state)
		},
	}
};

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators({
		nextStep: next
	}, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(Application);
