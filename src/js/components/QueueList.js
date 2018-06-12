/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { playSong } from '../actions/index';
import SongList from './SongList';
import Song from './Song';

const mapStateToProps = state => {
    return { ...state.player };
};

const mapDispatchToProps = dispatch => {
    return {
        playSong: data => dispatch(playSong(data)),
    };
};

const QueueList = ({ current, queue, playSong }) => {
    const list = queue.map(song => (
        <Song key={song.artist.name + "-" + song.album.name + "-" + song.name} song={song}
              dblClick={playSong} active={song === current} />
    ));
    return <div id="queue-list"><SongList songs={list} /></div>;
};

const ConnectedQueueList = connect(mapStateToProps, mapDispatchToProps)(QueueList);

export default ConnectedQueueList;
