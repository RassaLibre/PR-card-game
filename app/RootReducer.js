import { combineReducers, createStore, applyMiddleware } from 'redux';
import GameReducer from './ducks/Game';
import thunk from 'redux-thunk';

let rootReducer = combineReducers({
	game: GameReducer
});

export default createStore(
	rootReducer,
	applyMiddleware(thunk)
);
