import { combineReducers, createStore, applyMiddleware } from 'redux';
import players from './state/players/reducer';
import cards from './state/cards/reducer';
import phases from './state/phases/reducer';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
  players,
  cards,
  phases
});

export default createStore(
	rootReducer,
	applyMiddleware(thunk)
);
