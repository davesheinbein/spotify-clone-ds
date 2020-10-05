import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './pages/App/App';
import * as serviceWorker from './serviceWorker';
import {
	BrowserRouter as Router,
	Route,
} from 'react-router-dom';
// Context API - similar to redux
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
	<Router>
		<React.StrictMode>
			{/* Passes state down to make accessible in entire app */}
			<StateProvider
				initialState={initialState}
				reducer={reducer}>
				<Route
					render={({ history }) => (
						<App history={history} />
					)}
				/>
			</StateProvider>
		</React.StrictMode>
	</Router>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
