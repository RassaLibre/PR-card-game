import React from "react"
import "./styles.scss"

class Deck extends React.PureComponent{

	state = { showDialog: false }

	handleClick = () =>
		this.props.onClick()

	handleMouseOver = () =>
		this.setState({ showDialog: true })

	handleMouseOut = () =>
		this.setState({ showDialog: false })

	render(){
		const { onClick, amountOfCards } = this.props
		const { showDialog } = this.state
		return(
			<div
				className="deck"
				onClick={this.handleClick}
				onMouseOver={(onClick) ? this.handleMouseOver : undefined}
				onMouseOut={(onClick) ? this.handleMouseOut : undefined}>
					<span>Deck</span>
					<span>{amountOfCards + " cards"}</span>
					{(showDialog) ?
						<span>(click to draw a card)</span>
					: undefined}
			</div>
		)
	}

}

Deck.defaultProps = {
	onClick: undefined
}

Deck.propTypes = {}

export default Deck
