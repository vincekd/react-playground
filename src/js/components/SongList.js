/* -*- mode: js-jsx -*- */

import React from 'react';

export default ({ songs }) => {
    return (
        <div className="library-list songs">
          <h3>Songs</h3>
          <div className="song-labels">
            <span></span>                
            <span>Track</span>
            <span>Name</span>
            <span>Album</span>
            <span>Artist</span>
            <span>Length</span>
          </div>
          <div className="song-list">
            <ul>{songs}</ul>
          </div>
        </div>
    );
};
