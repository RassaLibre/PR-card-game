import React from "react"
import "./_OfferedCards.scss"
import Card from "../cards"

class OfferedCards extends React.PureComponent{

	state = {}

	render(){
		const { onCardClick, cards } = this.props
		return(
			<div className="offeredCards">
				{cards.map((card, index)=> <Card card={card} key={index} />)}
			</div>
		)
	}

}

OfferedCards.propTypes = {}

OfferedCards.defaultProps = {
	cards: []
}

export default OfferedCards
