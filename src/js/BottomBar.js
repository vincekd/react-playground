/* -*- mode: rjsx -*- */

import React from 'react';

class BottomBar extends React.Component {
    render() {
        return (
            <div id="bottom-bar">
              {this.props.artist ? <span><span className="header">Artist:</span> {this.props.artist.name }</span> : null}
              {this.props.album ? <span><span className="header">Album:</span> {this.props.album.name}</span> : null}
              {this.props.song ? <span><span className="header">Song: </span>{this.props.song.name}</span> : null}
            </div>
        );
    }
}

export default BottomBar;
