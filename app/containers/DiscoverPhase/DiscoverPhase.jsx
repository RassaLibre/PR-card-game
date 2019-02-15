import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile/DiscardPile";
import OfferedCards from "../../components/OfferedCards/OfferedCards";
import Deck from "../../components/Deck/Deck";
import {
  offerCard
} from '../../state/UIResponders/actions'
import {
  getActiveEnhancedPlayerOfActivePhase
} from "../../state/players/selectors";
import {
  getActivePhase
} from "../../state/phases/selectors";

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
    const { cards } = this.props
    return(
      <div className="board">
        <DiscardPile cards={cards.discardPile}/>
        <Deck
          amountOfCards={cards.deck.length}
          onClick={this.props.offerCard}/>
        <OfferedCards cards={cards.offeredCards}/>
      </div>
    )
  }

}

/**
*
*/
DiscoverPhase.defaultProps = {};

/**
*
*/
DiscoverPhase.propTypes = {};

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
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    offerCard
  }, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(DiscoverPhase);

