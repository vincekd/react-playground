import {
    PLAY_SONG,
    ADD_TO_QUEUE,
    TOGGLE_REPEAT,
    TOGGLE_SHUFFLE,
    TOGGLE_PLAYING
} from '../constants/action-types';

const initialState = {
    current: null,
    previous: [],
    queue: [],
    isPlaying: false,
    isRepeat: false,
    isShuffle: false
};

export default (state = initialState, action) => {
    switch (action.type) {
    case PLAY_SONG:
        return {...state, current: action.data};
    case ADD_TO_QUEUE:
        return {...state, queue: state.queue.concat(action.data)};
    case TOGGLE_REPEAT:
        return {...state, isRepeat: !!action.data};
    case TOGGLE_SHUFFLE:
        return {...state, isShuffle: !!action.data};
    case TOGGLE_PLAYING:
        return {...state, isPlaying: !!action.data};
    default:
        return state;
    }
};
