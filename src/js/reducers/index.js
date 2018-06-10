// src/js/reducers/index.js

import { SELECT_ARTIST, SELECT_ALBUM, SELECT_SONG } from '../constants/action-types';

const initialState = {
    music: {
        artists: [],
        albums: [],
        songs: [],
        playlists: []
    },
    location: {
        view: 'music',
        music: {
            artist: null,
            album: null,
            song: null
        }
    },
    player: {
        current: null,
        previous: null,
        queue: [],
        settings: {
            repeat: false,
            shuffle: false
        }
    }
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_ARTIST:
            return {...state, location: {...state.location, music: {artist: action.data, album: null, song: null}}};
        case SELECT_ALBUM:
            return {...state, location: {...state.location, music: {artist: null, album: action.data, song: null}}};
        case SELECT_SONG:
            return {...state, location: {...state.location, music: {artist: null, album: null, song: action.data}}};
    }
    return state;
};

export default rootReducer;
