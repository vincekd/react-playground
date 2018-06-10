/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import ArtistList from './ArtistList';
import AlbumList from './AlbumList';
import SongList from './SongList';

const mapStateToProps = state => {
    return {view: state.location.view};
};

const ViewArea = ({view}) => {
    if (view === "music") {
        return (
            <div id="music-view">
              <div id="artist-albums">
                <ArtistList />
                <AlbumList />
              </div>
              <SongList />
            </div>
        );
    } else if (view === "queue") {
        return <div>Queue</div>;
    } else if (view === "podcasts") {
        return <div>Podcasts</div>;
    } else if (view === "radio") {
        return <div>Radio</div>;
    }
};

const ConnectedViewArea = connect(mapStateToProps)(ViewArea);

export default ConnectedViewArea;
