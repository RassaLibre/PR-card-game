import React from "react";
import { PHASES } from "../../ducks/Game";

import "./_Player.scss";

/**
*
*/
class Player extends React.PureComponent{

	/**
	*
	*/
	constructor(args){
		super(args);
		this.state = {};
		this.handleNextPlayerClick = this.handleNextPlayerClick.bind(this);
		this.handleNextPhaseClick = this.handleNextPhaseClick.bind(this);
	}

	/**
	*
	*/
	handleNextPlayerClick(event){
		if(this.props.onNextPlayerClick)
			this.props.onNextPlayerClick();
	}

	/**
	*
	*/
	handleNextPhaseClick(event){
		if(this.props.onNextPhaseClick)
			this.props.onNextPhaseClick();
	}

	/**
	*
	*/
	render(){
		return(
			<div className="player" style={{backgroundColor: this.props.color}}>
				<h1 className="player__name">{this.props.name}</h1>
				<ul>
					<li>{this.props.coins + " coins"}</li>
					<li>{this.props.defence + " defence"}</li>
					<li>{this.props.influence + " influence"}</li>
				</ul>
				<h2>Actions</h2>
				{(this.props.isActive) ?
					<div>
						<button onClick={this.handleNextPlayerClick}>End turn</button>
						{(this.props.activePhase === PHASES.DISCOVER) ?
							<button onClick={this.handleNextPhaseClick}>End discover phase</button>
						: undefined}
						{(this.props.activePhase === PHASES.ACTIVE_PLAYER_TRADE_AND_HIRE) ?
							<button onClick={this.handleNextPhaseClick}>Offer cards to others</button>
						: undefined}
					</div>
				: undefined}
			</div>
		);
	}

}

/**
*
*/
Player.defaultProps = {
	coins: 0,
	defence: 0,
	influence: 0,
	isActive: false
};

/**
*
*/
Player.propTypes = {
	isActive: React.PropTypes.bool,
	coins: React.PropTypes.number,
	defence: React.PropTypes.number,
	influence: React.PropTypes.number,
	activePhase: React.PropTypes.string,
	onNextPhaseClick: React.PropTypes.func
};

/**
*
*/
export default Player;
