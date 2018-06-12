/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { selectSong, addToQueue } from '../actions/index';
import SongList from './SongList';
import Song from './Song';

const mapStateToProps = state => {
    const artist = state.location.music.artist,
          album = state.location.music.album,
          songs = (album ? album.songs :
                  (artist ? artist.albums.reduce((arr, item) => arr.concat(item.songs), []) :
                          state.location.music.song ? [state.location.music.song] : state.music.songs));
    return {
        songs: songs,
        current: state.location.music.song
    };
};

const mapDispatchToProps = dispatch => {
    return {
        selectSong: data => dispatch(selectSong(data)),
        addSong: data => dispatch(addToQueue(data)),
    };
};

const LibrarySongList = ({songs, selectSong, addSong, current}) => {
    const list = songs.map(song => (
        <Song key={song.artist.name + "-" + song.album.name + "-" + song.name} song={song}
              click={selectSong} dblClick={addSong} active={song === current} />
    ));
    return <SongList songs={list} />;
};

const ConnectedSongList = connect(mapStateToProps, mapDispatchToProps)(LibrarySongList);

export default ConnectedSongList;
