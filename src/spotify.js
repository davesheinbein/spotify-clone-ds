// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// 1. Click Login btn
// 2. Redirect to Spotify login page
// 3. Redirect to home page once authorized

// Spotify Api's authorization
const authEndpoint =
	'https://accounts.spotify.com/authorize';

// Redirects back to the homepage of the app
const redirectUri = 'https://spotify-clone-ds.web.app/';
// http://localhost:3000/ // - for dev purposes
// https://spotify-clone-ds.web.app/ // - for deployment purposes

// clientId unique to Spotify api
const clientId = '8bc827328ecf4342993338df260424cd';

// Defines different scopes and the user
// can now modify the playback via the api
// the api defines what can be modified
const scopes = [
	'user-read-currently-playing',
	'user-read-recently-played',
	'user-read-playback-state',
	'user-top-read',
	'user-modify-playback-state',
];

// goes to the URL response the we returned
// window.location.hash goes to the hashtag
// at the end of authEndpoint and is the #access_token
// substring cut up and selects the first segment of the hash
// then split('&') stops the splitting at the & because I only
// need the parameters before the &
// then reduce and split then decode and return
export const getTokenFromUrl = () => {
	return window.location.hash
		.substring(1)
		.split('&')
		.reduce((initial, item) => {
			// http://localhost:3000/#access_token=<-    something    ->&<something=something>
			//                                      ^^^^^ selects ^^^^^
			let parts = item.split('=');
			// go into the initial array
			// for the access token decode the URI
			initial[parts[0]] = decodeURIComponent(parts[1]);

			return initial;
		}, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
