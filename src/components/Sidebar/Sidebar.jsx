import React from 'react';
// re-usable component
import SidebarOption from '../SidebarOption/SidebarOption';
// ICON from material UI
import {
	Home,
	Search,
	LibraryMusic,
} from '@material-ui/icons';
// State from context API
import { useStateValue } from '../../StateProvider';
import './style/Sidebar.css';

function Sidebar() {
	const [{ playlists }, dispatch] = useStateValue();

	return (
		<div className='sidebar'>
			<img
				className='sidebar__logo'
				src='https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg'
				alt='Spotify Logo'
			/>
			<SidebarOption title='Home' Icon={Home} />
			<SidebarOption title='Search' Icon={Search} />
			<SidebarOption
				title='Your Library'
				Icon={LibraryMusic}
			/>
			<br />
			<strong className='sidebar__title'>PLAYLISTS</strong>
			<hr />

			{playlists?.items?.map((playlist) => (
				<SidebarOption title={playlist.name} />
			))}
		</div>
	);
}

export default Sidebar;
