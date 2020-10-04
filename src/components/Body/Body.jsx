import React from 'react';
import Header from '../Header/Header';
import './style/Body.css';

function Body({ spotify }) {
	return (
		<div className='body'>
			<Header spotify={spotify} />
		</div>
	);
}

export default Body;
