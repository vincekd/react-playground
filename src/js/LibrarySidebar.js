/* -*- mode: rjsx -*- */

import React from 'react';

class LibrarySidebar extends React.Component {
    render() {
        const playlists = this.props.playlists.map(playlist => {
            return <li key={playlist.name}><a>{playlist.name}</a></li>;
        });
        return (
            <div id="sidebar">
              <div>
                <h2>Library</h2>
                <ul>
                  <li><a>Play Queue</a></li>
                  <li><a>Music</a></li>
                  <li><a>Podcast</a></li>
                  <li><a>Radio</a></li>
                </ul>
              </div>
              <div>
                <h2>Playlists</h2>
                <ul>{playlists}</ul>
              </div>
            </div>
        );
    }
}

export default LibrarySidebar;
