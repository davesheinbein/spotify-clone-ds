import {
	Favorite,
	MoreHoriz,
	PlayCircleFilled,
} from '@material-ui/icons';
import React from 'react';
// Context API
import { useStateValue } from '../../StateProvider';
// Components
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import './style/Body.css';

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useStateValue();
	return (
		<div className='body'>
			<Header spotify={spotify} />
			<div className='body__info'>
				<img
					src={discover_weekly?.images[0].url}
					alt={discover_weekly?.title}
				/>
				<div className='body__infoText'>
					<strong>PLAYLIST</strong>
					<h2>Discover Weekly</h2>
					<p>{discover_weekly?.description}</p>
				</div>
			</div>
			<div className='body__songs'>
				<div className='body__icons'>
					<PlayCircleFilled className='body__shuffle' />
					<Favorite fontSize='large' />
					<MoreHoriz />
				</div>

				{/* Lists all songs */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow key={item.id} track={item.track} />
				))}
			</div>
		</div>
	);
}

export default Body;
