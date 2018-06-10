/* -*- mode: js-jsx -*- */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store/index";
import Root from "./components/Root";
import style from './sass/main.scss';

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);
