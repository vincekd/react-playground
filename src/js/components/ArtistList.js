/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { selectArtist } from '../actions/index';

const mapStateToProps = state => {
    return {
        artists: state.music.artists,
        current: state.location.music.artist
    };
};
const mapDispatchToProps = dispatch => {
    return {
        selectArtist: artist => dispatch(selectArtist(artist))
    };
};

class LibraryList extends React.Component {
    render() {
        const list = this.props.artists.map(item => {
            return (
                <li key={item.name} className={item === this.props.current ? 'active' : ''}>
                  <a onClick={() => this.props.selectArtist(item)}>
                    <span>{item.name}</span>
                    <span>({item.albums.length})</span>
                  </a>
                </li>
            );
        });
        return (
            <div className="library-list">
              <h3>Artists</h3>
              <div><ul>{list}</ul></div>
            </div>
        );
    }
}

const ConnectedLibraryList = connect(mapStateToProps, mapDispatchToProps)(LibraryList);

export default ConnectedLibraryList;
