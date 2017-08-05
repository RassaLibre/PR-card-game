import React from "react";
import "./_DiscardPile.scss";

/**
*
*/
class DiscardPile extends React.PureComponent{

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
		const { cards } = this.props
		return(
			<div className="discardPile">
				<span className="discardPile__title">Discard pile</span>
				<span>{cards.length + " cards"}</span>
			</div>
		);
	}

}

/**
*
*/
DiscardPile.defaultProps = {
	cards: []
};

/**
*
*/
DiscardPile.propTypes = {
	cards: React.PropTypes.array
};

/**
*
*/
export default DiscardPile;
