/* -*- mode: js-jsx -*- */

import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    //TODO: fix this with props?
    return {
        items: state.music.artists,
        current: null
    };
};

class LibraryList extends React.Component {
    handleClick(item) {
        console.log("clicked item", item);
    }

    render() {
        console.log("this.props", this.props);
        const list = this.props.items.map(item => {
            const len = ((this.props.name === "Artists" ? item.albums : item.songs) || []).length;
            return (
                <li key={item.name} className={item === this.props.current ? 'active' : ''}>
                  <a onClick={() => this.handleClick(item)}>
                    <span>{item.name}</span>
                    <span>({len})</span>
                  </a>
                </li>
            );
        });
        return (
            <div className="library-list">
              <h3>{this.props.name}</h3>
              <div><ul>{list}</ul></div>
            </div>
        );
    }
}

const ConnectedLibraryList = connect(mapStateToProps)(LibraryList);

export default ConnectedLibraryList;
