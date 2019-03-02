import React from "react"
import "./_OfferedCards.scss"
import {
	ShipCard,
	ExpeditionCard,
	TraderCard,
	SettlerCard,
	CaptainCard,
	MonkCard,
	HandymanCard,
	PirateCard,
	SailorCard,
	MadamCard,
	JokerCard,
	AdmiralCard,
	GovernorCard,
	TaxCard
} from "../cards/Card"
import {
	TAX_TYPES,
	CARD_TYPES,
	PERSON_TYPES
} from '../../state/cards/consts/index.js'

const getCardComponent = card => {
	if(card.type === CARD_TYPES.SHIP) return ShipCard
	if(card.type === CARD_TYPES.EXPEDITION) return ExpeditionCard
	if(card.type === CARD_TYPES.TAX) return TaxCard
	if(card.type === CARD_TYPES.PERSON){
		switch(card.name){
			case PERSON_TYPES.TRADER:
				return TraderCard
			case PERSON_TYPES.SETTLER:
				return SettlerCard
			case PERSON_TYPES.MONK:
				return MonkCard
			case PERSON_TYPES.HANDYMAN:
				return HandymanCard
			case PERSON_TYPES.MADAM:
				return MadamCard
			case PERSON_TYPES.PIRATE:
				return PirateCard
			case PERSON_TYPES.SAILOR:
				return SailorCard
			case PERSON_TYPES.JOKER:
				return JokerCard
			case PERSON_TYPES.CAPTAIN:
				return CaptainCard
			case PERSON_TYPES.ADMIRAL:
				return AdmiralCard
			case PERSON_TYPES.GOVERNOR:
				return GovernorCard
			default:
				throw new Error(`Unknown person type ${card.name}`)
		}
	}
}

/**
*
*/
class OfferedCards extends React.PureComponent{

	/**
	*
	*/
	constructor(args){
		super(args)
		this.state = {}
	}

	/**
	*
	*/
	render(){
		const { onCardClick, cards } = this.props
		return(
			<div className="offeredCards">
				{cards.map((card, index)=> {
					const CardComponent = getCardComponent(card)
					return (<CardComponent key={index} card={card} {...card} onClick={onCardClick}/>)
				})}
			</div>
		);
	}

}

/**
*
*/
OfferedCards.propTypes = {}

/**
*
*/
OfferedCards.defaultProps = {
	cards: []
}

/**
*
*/
export default OfferedCards
