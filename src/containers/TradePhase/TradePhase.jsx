import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile/DiscardPile"
import OfferedCards from "../../components/OfferedCards/OfferedCards"
import Deck from "../../components/Deck/Deck"
import {
  getActiveEnhancedPlayerOfActivePhase
} from "../../state/players/selectors"
import {
  getActivePhase
} from "../../state/phases/selectors"
import {
  interactWithCardInTradePhase
} from '../../state/UIResponders/actions'

/**
*
*/
class TradePhase extends React.Component{

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
    const { onCardClick, cards: { deck, offeredCards } } = this.props
    return(
      <div className="board">
        <DiscardPile />
        <Deck
          amountOfCards={deck.length}
          onClick={undefined} />
        <OfferedCards
          cards={offeredCards}
          onCardClick={onCardClick} />
      </div>
    )
  }

}

/**
*
*/
TradePhase.defaultProps = {}

/**
*
*/
TradePhase.propTypes = {}

/**
*
*/
const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    phases: state.phases,
    activePhase: {
      ...getActivePhase(state),
      activePlayer: getActiveEnhancedPlayerOfActivePhase(state)
    },
  }
}

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    onCardClick: interactWithCardInTradePhase,
  }, dispatch)
})

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(TradePhase)

