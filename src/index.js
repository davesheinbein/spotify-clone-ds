import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
// Context API - similar to redux
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
	<React.StrictMode>
		{/* Passes state down to make accessible in entire app */}
		<StateProvider
			initialState={initialState}
			reducer={reducer}>
			<App />
		</StateProvider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
