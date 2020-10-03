// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#

// 1. Click Login btn
// 2. Redirect to Spotify login page
// 3. Redirect to home page once authorized

// Spotify Api's authorization
const authEndpoint =
	'https://accounts.spotify.com/authorize';

// Redirects back to the homepage of the app
const redirectURi = 'http://localhost:3000/';

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

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectURi}&scope=${scopes.join(
	'%20'
)}&response_type=token&show_dialog=true`;
