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
		const { coins, defence, influence, color, name } = this.props.player
		return(
			<div className="player" style={{backgroundColor: color}}>
				<h1 className="player__name">{name}</h1>
				<ul>
					<li>{coins + " coins"}</li>
					<li>{defence + " defence"}</li>
					<li>{influence + " influence"}</li>
				</ul>
			</div>
		);
	}

}

/**
*
*/
Player.defaultProps = {

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
