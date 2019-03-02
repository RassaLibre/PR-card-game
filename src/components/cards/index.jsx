import React from "react"
import { TAX_TYPES } from '../../state/cards/consts/index'
import {
	CARD_TYPES,
	PERSON_TYPES
} from '../../state/cards/consts/index.js'
import "./styles.scss"

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

export default class Card extends React.PureComponent{

	state = {}

	handleClick = () =>
		this.props.onClick(this.props.card)

	render(){
		const { card } = this.props
		const CardComponent = getCardComponent(card)
		return(
			<div className="card" onClick={this.handleClick}>
				<CardComponent {...card} />
			</div>
		);
	}

}

const ShipCard = ({ name, coins, defence, color }) => (
	<div>
		<div className="card__name" style={{backgroundColor: color, color: (color === "black") ? "white" : undefined}}>
			<span>{name}</span>
		</div>
		<ul>
			<li>{coins + " coins"}</li>
			<li>{defence + " defence"}</li>
		</ul>
	</div>
)

const ExpeditionCard = ({ name, reward, influence, signs }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{reward + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>{signs.map(s => <span key={s}>{s}</span>)}</li>
		</ul>
	</div>
)

const TraderCard = ({ name, price, influence, color }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>{"+1 coin for " + color + " ships"}</li>
		</ul>
	</div>
)

const SettlerCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>House</li>
		</ul>
	</div>
)

const CaptainCard = ({name, influence, price}) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>Anchor</li>
		</ul>
	</div>
)

const MonkCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>Cross</li>
		</ul>
	</div>
)

const HandymanCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>Anchor/House/Cross</li>
		</ul>
	</div>
)

const SailorCard = ({ name, influence, defence, price }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>{"defence: " + defence}</li>
		</ul>
	</div>
)

const PirateCard = ({ name, price, influence, defence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>{"defence: " + defence}</li>
		</ul>
	</div>
)

const MadamCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>-1 coin on every person</li>
		</ul>
	</div>
)

const JokerCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>+1 coin when somebody fucks up</li>
		</ul>
	</div>
)

const AdmiralCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>+2 coins when > 5 cards</li>
		</ul>
	</div>
)

const GovernorCard = ({ name, price, influence }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		<ul>
			<li>{"price: " + price + " coins"}</li>
			<li>{influence + " influence"}</li>
			<li>+1 card each time</li>
		</ul>
	</div>
)

const TaxCard = ({ name }) => (
	<div>
		<div className="card__name">
			<span>{name}</span>
		</div>
		{name === TAX_TYPES.MAX_DEFENCE
			? <p>+1 coin for the player with maximum defence</p>
			: <p>+1 coin for the player with minimum influence</p>
		}
	</div>
)


