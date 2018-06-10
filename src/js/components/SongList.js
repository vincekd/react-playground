/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { selectSong, playSong } from '../actions/index';

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
        playSong: data => dispatch(playSong(data))
    };
};

class SongList extends React.Component {
    render() {
        const list = this.props.songs.map(item => {
            const duration = Math.floor(item.duration / 60)  + ":" + (item.duration % 60);
            return (
                <li key={item.artist.name + "-" + item.album.name + "-" + item.name}
                    className={item === this.props.current ? 'active' : ''}>
                  <a onDoubleClick={() => this.props.playSong(item)}
                    onClick={() => this.props.selectSong(item)}
                    className="song-item">
                    <span className="playing">&gt;</span>
                    <span>{item.track}</span>
                    <span>{item.name}</span>
                    <span>{item.album.name}</span>
                    <span>{item.artist.name}</span>
                    <span>{duration}</span>
                  </a>
                </li>
            );
        });
        return (
            <div className="library-list" id="songs">
              <h3>Songs</h3>
              <div id="song-labels">
                <span></span>                
                <span>Track</span>
                <span>Name</span>
                <span>Album</span>
                <span>Artist</span>
                <span>Length</span>
              </div>
              <div id="song-list">
                <ul>{list}</ul>
              </div>
            </div>
        );
    }
}

const ConnectedSongList = connect(mapStateToProps, mapDispatchToProps)(SongList);

export default ConnectedSongList;
