/* -*- mode: js-jsx -*- */

import React from 'react';
import { MdPlayArrow } from 'react-icons/lib/md';

export default ({ song, click, dblClick, active }) => {
    const duration = Math.floor(song.duration / 60)  + ":" + (song.duration % 60);
    return (
        <li className={active ? 'active' : ''}>
          <a onDoubleClick={() => dblClick && dblClick(song)}
            onClick={() => click && click(song)}
            className="song-item">
            <span className="playing"><MdPlayArrow /></span>
            <span>{song.track}</span>
            <span>{song.name}</span>
            <span>{song.album.name}</span>
            <span>{song.artist.name}</span>
            <span>{duration}</span>
          </a>
        </li>
    );
};
