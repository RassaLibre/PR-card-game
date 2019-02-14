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
		this.props.onClick()
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
		const { onClick, amountOfCards } = this.props
		const { showDialog } = this.state
		return(
			<div
				className="deck"
				onClick={this.handleClick}
				onMouseOver={(onClick) ? this.handleMouseOver : undefined}
				onMouseOut={(onClick) ? this.handleMouseOut : undefined}>
					<span>Deck</span>
					<span>{amountOfCards + " cards"}</span>
					{(showDialog) ?
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
