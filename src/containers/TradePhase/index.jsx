import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile"
import OfferedCards from "../../components/OfferedCards"
import Deck from "../../components/Deck"
import {
  getActiveEnhancedPlayerOfActivePhase
} from "../../state/players/selectors"
import {
  getActivePhase
} from "../../state/phases/selectors"
import {
  interactWithCardInTradePhase
} from '../../state/UIResponders/actions'

class TradePhase extends React.Component{

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

export default connect(mapStateToProps, mapDispatchToProps)(TradePhase)

