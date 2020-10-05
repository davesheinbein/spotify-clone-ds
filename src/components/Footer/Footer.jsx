import React, { useEffect } from 'react';
// Material Ui
import { Grid, Slider } from '@material-ui/core';
// Icons
import {
	PlaylistPlay,
	VolumeDown,
	Shuffle,
	SkipPrevious,
	PlayCircleOutline,
	SkipNext,
	Repeat,
	PauseCircleOutline,
} from '@material-ui/icons';
// Context API
import { useStateValue } from '../../StateProvider';
// styles
import './style/Footer.css';

function Footer({ spotify }) {
	const [{ item, playing }, dispatch] = useStateValue();

	useEffect(() => {
		spotify.getMyCurrentPlaybackState().then((r) => {
			console.log(
				r,
				'<< response getMyCurrentPlaybackState'
			);

			dispatch({
				type: 'SET_PLAYING',
				playing: r.is_playing,
			});

			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
		});
	}, [spotify]);

	const handlePlayPause = () => {
		if (playing) {
			spotify.pause();
			dispatch({
				type: 'SET_PLAYING',
				playing: false,
			});
		} else {
			spotify.play();
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		}
	};

	const skipNext = () => {
		spotify.skipToNext();
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		});
	};

	const skipPrevious = () => {
		spotify.skipToPrevious();
		spotify.getMyCurrentPlayingTrack().then((r) => {
			dispatch({
				type: 'SET_ITEM',
				item: r.item,
			});
			dispatch({
				type: 'SET_PLAYING',
				playing: true,
			});
		});
	};

	return (
		<div className='footer'>
			<div className='footer__left'>
				{item ? (
					<img
						className='footer__albumLogo'
						src={item?.album.images[0].url}
						alt='album'
					/>
				) : (
					<img
						className='footer__albumLogo'
						src='https://img.discogs.com/A5eAFMTnKUWjQ4wkJDL4LuZn6oQ=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-611411-1379296184-1125.jpeg.jpg'
						alt='No song is playing'
					/>
				)}
				{item ? (
					<div className='footer__songInfo'>
						<h4>{item.name}</h4>
						<p>
							{item.artists
								.map((artist) => artist.name)
								.join(', ')}
						</p>
					</div>
				) : (
					<div className='footer__songInfo'>
						<h4>No song is playing</h4>
						<p>...</p>
					</div>
				)}
			</div>
			<div className='footer__center'>
				<Shuffle className='footer__green' />
				<SkipPrevious
					className='footer__icon'
					onClick={skipPrevious}
				/>
				{playing ? (
					<PauseCircleOutline
						onClick={handlePlayPause}
						fontSize='large'
						className='footer__icon'
					/>
				) : (
					<PlayCircleOutline
						onClick={handlePlayPause}
						fontSize='large'
						className='footer__icon'
					/>
				)}
				<SkipNext
					className='footer__icon'
					onClick={skipNext}
				/>
				<Repeat className='footer__green' />
			</div>
			<div className='footer__right'>
				<Grid container spacing={2}>
					<Grid item>
						<PlaylistPlay />
					</Grid>
					<Grid item>
						<VolumeDown />
					</Grid>
					<Grid item xs>
						<Slider aria-labelledby='continuous-slider' />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
