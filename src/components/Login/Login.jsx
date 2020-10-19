import React from 'react';
// API Login Functionality
import { loginUrl } from '../../spotify';
import spotifyLogo from '../../images/fakeSpotifyLogo.png';
import './style/Login.css';

function Login() {
	return (
		<div className='login'>
			<img src={spotifyLogo} alt='Spotify Logo' />
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
