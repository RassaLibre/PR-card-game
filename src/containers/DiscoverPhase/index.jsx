import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile";
import OfferedCards from "../../components/OfferedCards";
import Deck from "../../components/Deck";
import {
  offerCard,
  interactWithCardInDiscoverPhase
} from '../../state/UIResponders/actions'
import {
  getActiveEnhancedPlayerOfActivePhase,
  getEnhancedOfferedCards,
} from "../../state/players/selectors"
import {
  getActivePhase
} from "../../state/phases/selectors"

class DiscoverPhase extends React.Component {

  render(){
    const { onOfferedCardClick, offerCard, offeredCards, discardPile, deck } = this.props
    return(
      <div className="board">
        <DiscardPile cards={discardPile}/>
        <Deck
          amountOfCards={deck.length}
          onClick={offerCard}/>
        <OfferedCards
          cards={offeredCards}
          onCardClick={onOfferedCardClick}/>
      </div>
    )
  }
}

DiscoverPhase.defaultProps = {}

DiscoverPhase.propTypes = {}

const mapStateToProps = (state) => {
  return {
    offeredCards: getEnhancedOfferedCards(state),
    discardPile: state.cards.discardPile,
    deck: state.cards.deck,
    phases: state.phases,
    activePhase: {
      ...getActivePhase(state),
      activePlayer: getActiveEnhancedPlayerOfActivePhase(state)
    },
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    offerCard,
    onOfferedCardClick: interactWithCardInDiscoverPhase,
  }, dispatch)
}

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPhase)

