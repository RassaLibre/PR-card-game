import React from "react"
import "./styles.scss"

export default class DiscardPile extends React.PureComponent {

	state = {}

	render(){
		const { cards } = this.props
		return(
			<div className="discardPile">
				<span className="discardPile__title">Discard pile</span>
				<span>{cards.length + " cards"}</span>
			</div>
		)
	}

}

DiscardPile.defaultProps = {
	cards: []
}

DiscardPile.propTypes = {}
