import { SELECT_ARTIST, SELECT_ALBUM, SELECT_SONG, SELECT_VIEW } from '../constants/action-types';

const initialState = {
    view: 'music',
    music: {
        artist: null,
        album: null,
        song: null
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ARTIST:
            return {...state, music: {artist: action.data, album: null, song: null}};
        case SELECT_ALBUM:
            return {...state, music: {artist: action.data.artist, album: action.data, song: null}};
        case SELECT_SONG:
            return {...state, music: {artist: action.data.artist, album: action.data.album, song: action.data}};
        case SELECT_VIEW:
            return {...state, view: action.data};
        default:
            return state;
    }
};
