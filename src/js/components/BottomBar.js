/* -*- mode: js-jsx -*- */

//import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({...state.location.music});

const bottomBar = ({ artist, album, song }) => {
    return (
        <div id="bottom-bar">
          {artist ? <span><span className="header">Artist:</span> {artist.name }</span> : null}
          {album ? <span><span className="header">Album:</span> {album.name}</span> : null}
          {song ? <span><span className="header">Song: </span>{song.name}</span> : null}
        </div>
    );
};

const BottomBar = connect(mapStateToProps)(bottomBar);

export default BottomBar;
