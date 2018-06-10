import { combineReducers } from 'redux';
import location from './location';
import music from './music';
import player from './player';

export default combineReducers({ location, music, player });
