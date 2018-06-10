/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';
import { capitalize } from '../utility/index';
import { selectView } from '../actions/index';

const mapStateToProps = state => {
    return {
        current: state.location.view,
        playlists: state.music.playlists.slice()
    };
};
const mapDispatchToProps = dispatch => {
    return {
        selectMenu: view => dispatch(selectView(view))
    };
};

class LibrarySidebar extends React.Component {
    render() {
        const playlists = this.props.playlists.map(playlist => {
            return <li key={playlist.name}><a>{playlist.name}</a></li>;
        });
        const menuOpts = ["queue", "music", "podcasts", "radio"].map(view => {
            return (
                <li key={view} className={this.props.current === view ? "active" : ""}>
                  <a onClick={() => this.props.selectMenu(view)}>{capitalize(view)}</a>
                </li>
            );
        });
        return (
            <div id="sidebar">
              <div>
                <h2>Library</h2>
                <ul>{menuOpts}</ul>
              </div>
              <div>
                <h2>Playlists</h2>
                <ul>{playlists}</ul>
              </div>
            </div>
        );
    }
}

const ConnectedLibrarySidebar = connect(mapStateToProps, mapDispatchToProps)(LibrarySidebar);

export default ConnectedLibrarySidebar;
