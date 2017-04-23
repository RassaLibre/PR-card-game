import React from "react";

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
	influence: 0
};

/**
*
*/
Player.propTypes = {
	coins: React.PropTypes.number,
	defence: React.PropTypes.number,
	influence: React.PropTypes.number
};

/**
*
*/
export default Player;
