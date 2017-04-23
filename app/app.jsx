import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import RootStore from './RootReducer';
import 'whatwg-fetch';	//because Safari

import "normalize.css";
import "./_layout.scss";

/**
*
*/
ReactDOM.render(
	<Provider store={RootStore}>
		<App/>
	</Provider>,
	document.getElementById("app")
);
