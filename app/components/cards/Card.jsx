import React from "react";
import "./_Card.scss";
/**
*
*/
class Card extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<div className="card">
				{this.props.children}
			</div>
		);
	}

}

/**
*
*/
export class ShipCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name" style={{backgroundColor: this.props.color, color: (this.props.color === "black") ? "white" : undefined}}>
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{this.props.coins + " coins"}</li>
						<li>{this.props.defence + " defence"}</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class ExpeditionCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{this.props.reward + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>{this.props.signs.map((s, index)=>{
							return (<span key={index}>{s}</span>);
						})}</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class TraderCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>{"+1 coin for " + this.props.color + " ships"}</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class SettlerCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>House</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class CaptainCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>Anchor</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class MonkCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>Cross</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class HandymanCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>Anchor/House/Cross</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class SailorCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>{"defence: " + this.props.defence}</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class PirateCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>{"defence: " + this.props.defence}</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class MadamCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>-1 coin on every person</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class JokerCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>+1 coin when somebody fucks up</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class AdmiralCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>+2 coins when > 5 cards</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class GovernorCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<ul>
						<li>{"price: " + this.props.price + " coins"}</li>
						<li>{this.props.influence + " influence"}</li>
						<li>+1 card each time</li>
					</ul>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class MaxDefenceTaxCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<p>+1 coin for the player with maximum defence</p>
				</div>
			</Card>
		);
	}
}

/**
*
*/
export class MinInfluenceTaxCard extends React.PureComponent{

	constructor(args){
		super(args);
		this.state = {};
	}

	render(){
		return(
			<Card>
				<div>
					<div className="card__name">
						<span>{this.props.name}</span>
					</div>
					<p>+1 coin for the player with minimum influence</p>
				</div>
			</Card>
		);
	}
}


