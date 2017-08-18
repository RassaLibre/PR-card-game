import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import DiscardPile from "../../components/DiscardPile/DiscardPile";
import OfferedCards from "../../components/OfferedCards/OfferedCards";
import Deck from "../../components/Deck/Deck";
import {
  getActivePlayerOfActivePhase
} from "../../state/players/selectors";
import {
  getActivePhase
} from "../../state/phases/selectors";

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
    return(
      <div className="board">
        <DiscardPile/>
        <Deck
          amountOfCards={this.props.cards.deck.length}
          onClick={undefined}/>
        <OfferedCards cards={this.props.cards.offeredCards}/>
      </div>
    )
  }

}

/**
*
*/
TradePhase.defaultProps = {};

/**
*
*/
TradePhase.propTypes = {};

/**
*
*/
const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    phases: state.phases,
    activePhase: {
      ...getActivePhase(state),
      activePlayer: getActivePlayerOfActivePhase(state)
    },
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch)
};

/**
*
*/
export default connect(mapStateToProps, mapDispatchToProps)(TradePhase);

