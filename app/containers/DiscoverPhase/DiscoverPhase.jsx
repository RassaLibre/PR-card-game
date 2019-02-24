import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile/DiscardPile";
import OfferedCards from "../../components/OfferedCards/OfferedCards";
import Deck from "../../components/Deck/Deck";
import {
  offerCard,
  interactWithCardInDiscoverPhase
} from '../../state/UIResponders/actions'
import {
  getActiveEnhancedPlayerOfActivePhase
} from "../../state/players/selectors"
import {
  getActivePhase
} from "../../state/phases/selectors"

/**
*
*/
class DiscoverPhase extends React.Component{

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
    const { onOfferedCardClick, cards, offerCard } = this.props
    return(
      <div className="board">
        <DiscardPile cards={cards.discardPile}/>
        <Deck
          amountOfCards={cards.deck.length}
          onClick={offerCard}/>
        <OfferedCards
          cards={cards.offeredCards}
          onCardClick={onOfferedCardClick}/>
      </div>
    )
  }

}

/**
*
*/
DiscoverPhase.defaultProps = {}

/**
*
*/
DiscoverPhase.propTypes = {}

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

