/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    const album = state.location.music.album,
          artist = state.location.artist,
          songs = (album ? album.songs :
                  (artist ? artist.albums.reduce((arr, item) => arr.concat(item.songs), []) :
                          this.state.music.songs));
    return {
        songs: songs,
        current: state.location.music.song
    };
};

class SongList extends React.Component {

    handleClick(song) {
        console.log("clicked song", song);
    }
    
    handleDblClick(song) {
        console.log("double clicked song", song);
    }
    
    render() {
        const list = this.props.songs.map(item => {
            return (
                <li key={item.artist + "-" + item.album + "-" + item.name}
                    className={item === this.props.current ? 'active' : ''}>
                  <a onDoubleClick={() => this.handleDblClick(item)}
                    onClick={() => this.handleClick(item)}
                    className="song-item">
                    <span className="playing">&gt;</span>
                    <span>{item.track}</span>
                    <span>{item.name}</span>
                    <span>{item.album}</span>
                    <span>{item.artist}</span>
                    <span>4:20</span>
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

const ConnectedSongList = connect(mapStateToProps)(SongList);

export default ConnectedSongList;
