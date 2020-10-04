import React from 'react';
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
} from '@material-ui/icons';
// styles
import './style/Footer.css';

function Footer() {
	return (
		<div className='footer'>
			<div className='footer__left'>
				<img
					src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQA
                    AAQABAAD/2wCEAAkGBxMSEhUTExMVFhUVFxUYFxUVFRcVGBU
                    VFRUWFhYVFhUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNyg
                    tLisBCgoKDg0OGhAQGi0lHx0tLS0tLS0tLS0tLS0tLS0tLS0t
                    Ky0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIA
                    KgBKwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAA
                    IDBAYBBwj/xAA9EAABAwIDBQUGBAUEAwEAAAABAAIDBBEFITE
                    GEkFRYRMicYGRMlKhscHRQmLh8AcUI3LxFTOCkkNTsqL/xAAY
                    AQADAQEAAAAAAAAAAAAAAAABAgMABP/EACERAAMAAgIDAQEBA
                    QAAAAAAAAABAhEhEjEDE0FRYTIi/9oADAMBAAIRAxEAPwD2Vw
                    CpVTWkG4HomunJGSpTylB2gqGDX4JF2vaNaGu5jK60ENdazQM
                    +pQWSZwVaSqcNCk9kj+umbBtRlmEx1SFixjUjMwb9DorNJtZE
                    94je2zjpxB81vag+pmjdOFWmnCgfURD8VvNQSzM94IO2BQh0k
                    jOIupIMY3BbghctveVGpP5wk91If1SzUP2kjHPxySGLxyDuvH
                    hfNee1bb6yen+UDnia17XB59ocbceiX3Ux/TJv8TaXEoFUQFV
                    sWdNGT2bnZgEDX5oXFtDWB7WPha4E2v7JS8mw8UkWKykuhhox
                    ezh4Gy0NVUgZOY5p8Lj1QirmbYkXPIWKOWbCIXUZObbseOI0c
                    OrdCpoa8MB7QWsCS4DLL5K5hjzLGJLWc3J7Tq0/ayHbQR7kMj
                    +BafjkgnnQWsbPPtrcbdUy8mMuGD5uPUoAiErbkqo6ErpnCWD
                    mpN7Il0LpYUt1MKcXUklgnQuri6gES6mpyxji6Ck1pOg10W82
                    R/hjUVVpJrwQ8yP6jh+VvDxKODZMNDE57g1jS5x0AFyfJaWi2
                    ErXi5hc0cyLeS9ywHZmkom2giG9xee88+Lj9EVklPQeJC2EDL
                    Pm3EtnZYP9xpFhfT5IO4L6D21gjkpZC4C7Wkg9V8+SnNKMjgC
                    cCuNTkAnYnG+S0dPUHdCz1Pa6NRMyCnY0n0XhOyj4o2tfUSOI
                    Azv0Us+Cv/DKfMXRmpxAN01QXEMYLfZt4lVrguxFzYOqMGm/9
                    o9EOnwV/wCKc+QUOJ7RloJdJkPdF0f2Np2zMEz7uDvZDuXOym
                    uNPCRR8pWWzNnATo0yPvxOQRPCtjXMkbK62XDU+q3W40cFXlq
                    c7AaJ/VK7E9tfCk/B2Ed7gq8uDQe4rbpieKhqJLBN/wAibKE+
                    HRW9n4odJhMPX1KdiOJtaM3NHmgE+0TBcA7x5NzUauV8KzFfpc
                    kwWA3JHxKbTbGxSd4izb+qFYbiUkz9A1oP4jn6LcwVzA0AuGX
                    JaaT7Q1JrpnKuBrWgAAWFrnXJZPFIRYubkQcj1R7HMXjDN4va
                    AOF8z5LG1eOsdk0E+OQQugRDIX4s5x3ZW/8AIfVSTsY0Xc4Dz
                    CqSVJePYAPPUFU5cAY9we+5PU3A8uCnnJRovYfUBhdK3Pe1HN
                    o0y5qntliDHUxa0EF7m2B5HN1vCw9U3FKR0cTnNcBZpIWHdUO
                    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
                    m32PLhF3ZcNltM43JtYXyHgtgaloGoWE2UwhlN/TdvkcHOJH
                    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'
					alt='album'
					className='footer__albumLogo'
				/>
				<div className='footer__songInfo'>
					<h4>Yeah!</h4>
					<p>...</p>
				</div>
			</div>
			<div className='footer__center'>
				<Shuffle className='footer__green' />
				<SkipPrevious className='footer__icon' />
				<PlayCircleOutline
					fontSize='large'
					className='footer__icon'
				/>
				<SkipNext className='footer__icon' />
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
						<Slider />
					</Grid>
				</Grid>
			</div>
		</div>
	);
}

export default Footer;
