import { SELECT_ARTIST, SELECT_ALBUM, SELECT_SONG, PLAY_SONG, MUSIC_LOADED, SELECT_VIEW } from '../constants/action-types';


export const selectArtist = artist => ({type: SELECT_ARTIST, data: artist});
export const selectAlbum = album => ({type: SELECT_ALBUM, data: album});
export const selectSong = song => ({type: SELECT_SONG, data: song});
export const playSong = song => ({type: PLAY_SONG, data: song});
export const musicLoaded = data => ({type: MUSIC_LOADED, data});
export const selectView = view => ({type: SELECT_VIEW, data: view});
