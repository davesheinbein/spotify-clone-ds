import React from 'react';
// Material UI Icons
import {
	Favorite,
	MoreHoriz,
	PlayCircleFilled,
} from '@material-ui/icons';
// Context API
import { useStateValue } from '../../StateProvider';
// Components
import Header from '../Header/Header';
import SongRow from '../SongRow/SongRow';
import './style/Body.css';

function Body({ spotify }) {
	const [{ discover_weekly }, dispatch] = useStateValue();

	const playPlaylist = (id) => {
		spotify
			.play({
				uri: `spotify:playlist:37i9dQZEVXcJ2LzYvHxUGv`, // 37i9dQZEVXcJ2LzYvHxUGv
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((r) => {
					// console.log(r, 'getMyCurrentPlayingTrack');
					dispatch({
						type: 'SET_ITEM',
						item: r.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};

	const playSong = (id) => {
		spotify
			.play({
				uris: [`spotify:track:${id}`],
			})
			.then((res) => {
				spotify.getMyCurrentPlayingTrack().then((res) => {
					// console.log(
					// 	res,
					// 	'<< Play song getMyCurrentPlayingTrack'
					// );
					dispatch({
						type: 'SET_ITEM',
						item: res.item,
					});
					dispatch({
						type: 'SET_PLAYING',
						playing: true,
					});
				});
			});
	};

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
					<PlayCircleFilled
						className='body__shuffle'
						onClick={playPlaylist}
					/>
					<Favorite fontSize='large' />
					<MoreHoriz />
				</div>

				{/* Lists all songs */}
				{discover_weekly?.tracks.items.map((item) => (
					<SongRow
						key={item.id}
						playSong={playSong}
						track={item.track}
					/>
				))}
			</div>
		</div>
	);
}

export default Body;
