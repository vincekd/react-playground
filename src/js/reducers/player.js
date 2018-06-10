import { PLAY_SONG } from '../constants/action-types';

const initialState = {
    current: null,
    previous: [],
    queue: [],
    settings: {
        repeat: false,
        shuffle: false
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case PLAY_SONG:
            return {...state, current: action.data};
        default:
            return state;
    }
};
