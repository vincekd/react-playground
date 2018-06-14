/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { toggleRepeat, toggleShuffle, togglePlaying } from '../actions/index';
import { MdPlayArrow, MdRepeat, MdShuffle, MdSkipNext, MdSkipPrevious, MdPause } from 'react-icons/lib/md';

const ICON_SIZE = 35;
const mapStateToProps = state => {
    return {...state.player};
};
const mapDispatchToProps = dispatch => {
    return {
        toggleRepeat: (repeat) => dispatch(toggleRepeat(repeat)),
        toggleShuffle: (shuffle) => dispatch(toggleShuffle(shuffle)),
        togglePlaying: (playing) => dispatch(togglePlaying(playing))
    };
};

const TopBar = ({ repeat, shuffle, toggleRepeat, toggleShuffle, togglePlaying, isPlaying }) => {
    const playPause = isPlaying ?
          //<MdStop size={ICON_SIZE} /> :
          <MdPause size={ICON_SIZE} /> :
          <MdPlayArrow size={ICON_SIZE} />;

    return (
        <div id="top-bar">
          <div id="controls">
            <button type="button" className="left">
              <MdSkipPrevious size={ICON_SIZE} />
            </button>
            <button type="button" className="middle" onClick={() => togglePlaying(!isPlaying) }>
              {playPause}
            </button>
            <button type="button" className="right">
              <MdSkipNext size={ICON_SIZE} />
            </button>
          </div>

          <div id="settings">
            <button type="button" className={"left " + (repeat ? 'active' : '')}
                    onClick={() => toggleRepeat(!repeat)}>
              <MdRepeat size={ICON_SIZE} />
            </button>
            <button type="button" className={"right " + (shuffle ? 'active' : '')}
                    onClick={() => toggleShuffle(!shuffle)}>
              <MdShuffle size={ICON_SIZE} />
            </button>
          </div>

          <div id="current-playing">
            Playing
          </div>

          <div id="sound">
            Sound
          </div>
        </div>
    );
};

const ConnectedTopBar = connect(mapStateToProps, mapDispatchToProps)(TopBar);

export default ConnectedTopBar;
