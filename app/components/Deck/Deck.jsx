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
		this.state = { showDialog: false };
		this.handleClick = this.handleClick.bind(this);
		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
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
	handleMouseOver(){
		this.setState({ showDialog: true })
	}

	/**
	*
	*/
	handleMouseOut(){
		this.setState({ showDialog: false })
	}

	/**
	*
	*/
	render(){
		return(
			<div className="deck" onClick={this.handleClick} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<span>Deck</span>
				<span>{this.props.amountOfCards + " cards"}</span>
				{(this.state.showDialog) ?
					<span>(click to draw a card)</span>
				: undefined}
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
