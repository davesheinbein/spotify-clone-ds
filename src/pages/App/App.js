import React, { useEffect, useState } from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import Login from '../../components/Login/Login';
import Player from '../../components/Player/Player';
import { getTokenFromUrl } from '../../spotify';
import './style/App.css';

// Creating an instance of Spotify that will allow me to
// to communicate back and fourth with Spotify
const spotify = new SpotifyWebApi();

function App() {
	const [token, setToken] = useState(null);

	useEffect(() => {
		const hash = getTokenFromUrl();
		// console.log(hash, '<< hash');
		// Don't want the access toke to sit in th url for
		// security reason it this will clear it
		window.location.hash = '';
		// console.log(hash, '<< cleared hash');

		const _token = hash.access_token;
		console.log(_token, '<< token');

		if (_token) {
			setToken(_token);

			// provides the access token to the Spotify API
			spotify.setAccessToken(_token);

			// this returns a promise that select the user
			spotify.getMe().then((user) => {
				console.log(user, '<< user');
				console.log(_token, '<< _token');
			});
		}
		console.log(_token, '<< token set');
	}, []);

	return (
		<div className='app'>
			{/* Logo */}
			{token ? <Player /> : <Login />}
		</div>
	);
}

export default App;
