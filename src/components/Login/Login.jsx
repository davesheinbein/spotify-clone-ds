import React from 'react';
// API Login Functionality
import { loginUrl } from '../../spotify';
import './style/Login.css';

function Login() {
	return (
		<div className='login'>
			<img
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt='Spotify Logo'
			/>
			<a href={loginUrl}>LOGIN WITH SPOTIFY</a>
		</div>
	);
}

export default Login;
