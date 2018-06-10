import { MUSIC_LOADED } from '../constants/action-types';

const initialState = {
    artists: [],
    albums: [],
    songs: [],
    playlists: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MUSIC_LOADED:
            return {...state, ...action.data};
        default:
            return state;
    }
};
