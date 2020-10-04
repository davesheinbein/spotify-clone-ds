import React from 'react';
// Mterial Ui
import { Search } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
// COntext API
import { useStateValue } from '../../StateProvider';
import './style/Header.css';

function Header() {
	const [{ user }, dispatch] = useStateValue();

	return (
		<div className='header'>
			<div className='header__left'>
				<Search />
				<input
					type='text'
					placeholder='Search for Artists, Songs, or Genres...'
				/>
			</div>
			<div className='header__right'>
				<Avatar
					src={user?.images[0]?.url}
					alt={user?.display_name}
				/>
				<h4>{user?.display_name}</h4>
			</div>
		</div>
	);
}

export default Header;
