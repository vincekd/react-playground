/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { selectAlbum } from '../actions/index';

const mapStateToProps = state => {
    return {
        albums: (state.location.music.artist ?
                state.location.music.artist.albums : state.music.albums),
        current: state.location.music.album
    };
};
const mapDispatchToProps = dispatch => {
    return {
        selectAlbum: album => dispatch(selectAlbum(album))
    };
};

class LibraryList extends React.Component {
    render() {
        const list = this.props.albums.map(item => {
            return (
                <li key={item.name} className={item === this.props.current ? 'active' : ''}>
                  <a onClick={() => this.props.selectAlbum(item)}>
                    <span>{item.name}</span>
                    <span>({item.songs.length})</span>
                  </a>
                </li>
            );
        });
        return (
            <div className="library-list">
              <h3>Albums</h3>
              <div><ul>{list}</ul></div>
            </div>
        );
    }
}

const ConnectedLibraryList = connect(mapStateToProps, mapDispatchToProps)(LibraryList);

export default ConnectedLibraryList;
