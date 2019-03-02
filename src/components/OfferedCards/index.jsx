import React from "react"
import "./styles.scss"
import Card from "../cards"

export default class OfferedCards extends React.PureComponent{

	state = {}

	render(){
		const { onCardClick, cards } = this.props
		return(
			<div className="offeredCards">
				{cards.map((card, index)=>
					<Card card={card} key={index} onClick={onCardClick} />
				)}
			</div>
		)
	}

}

OfferedCards.propTypes = {}

OfferedCards.defaultProps = {
	cards: []
}
