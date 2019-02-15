import React from "react";
import "./_Player.scss";

class Player extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		const {
			coins,
			defence,
			influence,
			color,
			name,
			turnsInDiscoverPhase,
			perFlush,
			hiringDiscount,
			fiveAndMoreOfferedBonus,
			twoOrTreeOfferedBonus,
		} = this.props.player
		return(
			<div className="player" style={{backgroundColor: color}}>
				<h1 className="player__name">{name}</h1>
				<ul>
					<li>{coins + " coins"}</li>
					<li>{defence + " defence"}</li>
					<li>{influence + " influence"}</li>
					<li>{turnsInDiscoverPhase + " turns in discover phase"}</li>
					<li>{perFlush + " per flush"}</li>
					<li>{hiringDiscount + " hiring discount"}</li>
					<li>{twoOrTreeOfferedBonus + " bonus when offering 2-3"}</li>
					<li>{fiveAndMoreOfferedBonus + " bonus when offering 5+"}</li>
				</ul>
				{(this.props.isActive) ? <p>Active!</p> : undefined}
			</div>
		);
	}

}

/**
*
*/
Player.defaultProps = {
	isActive: false
};

/**
*
*/
Player.propTypes = {

};

/**
*
*/
export default Player;
