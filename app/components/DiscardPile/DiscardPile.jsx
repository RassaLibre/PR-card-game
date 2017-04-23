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
		return(
			<div className="discardPile">
				<span className="discardPile__title">Discard pile</span>
			</div>
		);
	}

}

/**
*
*/
DiscardPile.defaultProps = {

};

/**
*
*/
DiscardPile.propTypes = {

};

/**
*
*/
export default DiscardPile;
