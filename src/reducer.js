export const initialState = {
	// set back to null after finished developing
	token:
		// null,
		'BQByKr-TkcCeCUH4lBRHNT8qFy77Y5uDWectOJRKlO8ifg_gm_bRQKeM_2TOI2W_RP6u8YVNPRe44PgRx6At8K5T_o_beWNefo0gnrgI0qpTZzIMcDAZRlxfplgIS8uIloNn9tHGpU4ulbR9ezE9vBhHr_lgth5i',
	user: null,
	playlists: [],
	playing: false,
	item: null,
};

//similar to redux
const reducer = (state, action) => {
	console.log(action, '<<< action');
	console.log(state, '<<< state');

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
		// sets playlist to users playlist action defined in app
		case 'SET_PLAYLISTS':
			return {
				...state,
				playlists: action.playlists,
			};
		// always return a default
		default:
			return state;
	}
};

export default reducer;
