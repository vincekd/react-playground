/* -*- mode: js-jsx -*- */

import React from 'react';
import TopBar from './TopBar';
import LibrarySidebar from './LibrarySidebar';
import BottomBar from './BottomBar';
import ViewArea from './ViewArea';

export default () => {
    return (
        <div id="wrapper">
          <TopBar />
          <div id="middle-area">
            <LibrarySidebar />
            <ViewArea />
          </div>
          <BottomBar />
        </div>
    );
};
