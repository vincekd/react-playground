/* -*- mode: rjsx -*- */

import React from 'react';

class SongList extends React.Component {
    render() {
        const list = this.props.songs.map(item => {
            return (
                <li key={item.artist + "-" + item.album + "-" + item.name}
                    className={item === this.props.current ? 'active' : ''}>
                  <a onDoubleClick={() => this.props.handleClick(item)} className="song-item">
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

export default SongList;
