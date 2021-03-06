import React from "react"
import "./styles.scss"

export default class Player extends React.PureComponent{

	state = {}

	render(){
		const {
			coins,
			defence,
			influence,
			color,
			name,
			turnsInTradePhase,
			perFlush,
			hiringDiscount,
			fiveAndMoreOfferedBonus,
			twoOrTreeOfferedBonus,
			isActive
		} = this.props.player
		return(
			<div className="player" style={{backgroundColor: color}}>
				<h1 className="player__name">{name}</h1>
				<ul>
					<li>{`${coins} coins`}</li>
					<li>{`${defence} defence`}</li>
					<li>{`${influence} influence`}</li>
					<li>{`${turnsInTradePhase} turns in trade phase`}</li>
					<li>{`${perFlush} coins per flush`}</li>
					<li>{`${hiringDiscount} coins hiring discount`}</li>
					<li>{`${twoOrTreeOfferedBonus} bonus when offering 2-3`}</li>
					<li>{`${fiveAndMoreOfferedBonus}  bonus when offering 5+`}</li>
				</ul>
				{isActive ? <p>Active!</p> : undefined}
			</div>
		)
	}

}

Player.defaultProps = {
	isActive: false
}

Player.propTypes = {

}
