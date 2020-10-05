export const initialState = {
	token: null,
	user: null,
	spotify: null,
	playlists: [],
	playing: false,
	item: null,
	top_artists: null,
	discover_weekly: null,
};

//similar to redux
const reducer = (state, action) => {
	console.log(action, '<<< action');
	// console.log(state, '<<< state');

	// Action -> type, [payload]
	switch (action.type) {
		// sets user to users user action defined in app
		case 'SET_USER':
			return {
				...state,
				user: action.user,
			};

		// sets token to users token action defined in app
		case 'SET_TOKEN':
			return {
				...state,
				token: action.token,
			};

		// sets spotify to users spotify action defined in app
		case 'SET_SPOTIFY':
			return {
				...state,
				spotify: action.spotify,
			};

		// sets playlist to users playlist action defined in app
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};

		// sets currently playing to users currently playing action defined in app
		case 'SET_PLAYING':
			return {
				...state,
				playing: action.playing,
			};

		// sets currently playing item to users currently playing item action defined in app
		case 'SET_ITEM':
			return {
				...state,
				item: action.item,
			};

		// sets discover_weekly to users discover_weekly action defined in app
		case 'SET_DISCOVER_WEEKLY':
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		// sets top Artists to users top Artists action defined in app
		case 'SET_TOP_ARTISTS':
			return {
				...state,
				top_artists: action.top_artists,
			};
		// always return a default
		default:
			return state;
	}
};

export default reducer;
