/* -*- mode: rjsx -*- */

import React from 'react';

class LibraryList extends React.Component {
    render() {
        const list = this.props.items.map(item => {
            const len = ((this.props.name === "Artists" ? item.albums : item.songs) || []).length;
            return (
                <li key={item.name} className={item === this.props.current ? 'active' : ''}>
                  <a onClick={() => this.props.handleClick(item)}>
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

export default LibraryList;
