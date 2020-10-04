import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from '../../components/Login/Login';
import Player from '../../components/Player/Player';
// Access to Spotify config
import { getTokenFromUrl } from '../../spotify';
// pulling access to state down
import { useStateValue } from '../../StateProvider';
import './style/App.css';

// Creating an instance of Spotify that will allow me to
// to communicate back and fourth with Spotify
const spotify = new SpotifyWebApi();

function App() {
	// old state
	// const [token, setToken] = useState(null);
	// dispatch allows you to target and update the
	// state in the reducer and provided by stateProvider
	const [{ user, token }, dispatch] = useStateValue();

	useEffect(() => {
		const hash = getTokenFromUrl();
		// console.log(hash, '<< hash');
		// Don't want the access toke to sit in th url for
		// security reason it this will clear it
		window.location.hash = '';
		// console.log(hash, '<< cleared hash');

		const _token = hash.access_token;
		// console.log(_token, '<< token');

		if (_token) {
			// Old state
			// setToken(_token);
			// provides the access token to the Spotify API
			// new way to set token using context API
			dispatch({
				type: 'SET_TOKEN',
				token: _token,
			});

			spotify.setAccessToken(_token);

			// this returns a promise that select the user
			spotify.getMe().then((user) => {
				// console.log(user, '<< user');
				// console.log(_token, '<< _token');

				// calling dispatch to update state with user information
				dispatch({
					type: 'SET_USER',
					user: user,
				});
			});

			// gets user playlists from spotify then set them in the
			// state within the reducer
			spotify.getUserPlaylists().then((playlists) => {
				dispatch({
					type: 'SET_PLAYLISTS',
					playlists: playlists,
				});
			});

			spotify
				.getPlaylist('37i9dQZEVXcJ2LzYvHxUGv')
				.then((response) =>
					dispatch({
						type: 'SET_DISCOVER_WEEKLY',
						discover_weekly: response,
					})
				);
		}
		// console.log(_token, '<< _token set');
	}, []);

	// console.log(token, '<< token set');
	// console.log(user, '<< user');

	return (
		<div className='app'>
			{/* spotify is being passed as a prop */}
			{token ? <Player spotify={spotify} /> : <Login />}
		</div>
	);
}

export default App;
