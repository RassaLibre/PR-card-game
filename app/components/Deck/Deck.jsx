import React from "react";
import "./_Deck.scss";

/**
*
*/
class Deck extends React.PureComponent{

	/**
	*
	*/
	constructor(args){
		super(args);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}

	/**
	*
	*/
	handleClick(){
		if(this.props.onClick)
			this.props.onClick();
	}

	/**
	*
	*/
	render(){
		return(
			<div className="deck" onClick={this.handleClick}>
				<span>Deck</span>
				<span>{this.props.amountOfCards + " cards"}</span>
			</div>
		);
	}

}

/**
*
*/
Deck.defaultProps = {
	onClick: undefined
};

/**
*
*/
Deck.propTypes = {
	onClick: React.PropTypes.func
};

/**
*
*/
export default Deck;
