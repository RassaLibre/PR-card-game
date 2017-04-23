import React from "react";
import "./_OfferedCards.scss";
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
	MaxDefenceTaxCard,
	MinInfluenceTaxCard
} from "../cards/Card";

/**
*
*/
class OfferedCards extends React.PureComponent{

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
			<div className="offeredCards">
				{this.props.cards.map((card, index)=>{
					if(card.type === "ship"){
						return (
							<ShipCard
								key={index}
								name={card.name}
								coins={card.coins}
								defence={card.defence}
								color={card.color}/>
						);
					}
					else if(card.type === "person"){
						if(card.name === "trader")
							return (<TraderCard key={index} name={card.name} price={card.price} influence={card.influence} color={card.color}/>);
						else if(card.name === "settler")
							return (<SettlerCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "handyman")
							return (<HandymanCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "captain")
							return (<CaptainCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "monk")
							return (<MonkCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "sailor")
							return (<SailorCard key={index} name={card.name} price={card.price} influence={card.influence} defence={card.defence}/>);
						else if(card.name === "madam")
							return (<MadamCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "pirate")
							return (<PirateCard key={index} name={card.name} price={card.price} influence={card.influence} defence={card.defence}/>);
						else if(card.name === "joker")
							return (<JokerCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "admiral")
							return (<AdmiralCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
						else if(card.name === "governor")
							return (<GovernorCard key={index} name={card.name} price={card.price} influence={card.influence}/>);
					}
					else if(card.type === "expedition"){
						return (<ExpeditionCard key={index} name={card.name} reward={card.reward} influence={card.influence} signs={card.signs}/>);
					}
					else if(card.type === "tax"){
						if(card.name === "maxdefence")
							return (<MaxDefenceTaxCard key={index} name={card.name}/>);
						else if(card.name === "mininfluence")
							return (<MinInfluenceTaxCard key={index} name={card.name}/>);
					}
				})}
			</div>
		);
	}

}

/**
*
*/
OfferedCards.propTypes = {
	cards: React.PropTypes.array
};

/**
*
*/
OfferedCards.defaultProps = {
	cards: []
};

/**
*
*/
export default OfferedCards;
