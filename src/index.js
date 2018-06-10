/* -*- mode: js-jsx -*- */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import Root from "./js/components/Root";
import style from './sass/main.scss';
import { musicLoaded } from './js/actions/index';

fetch("/api/music").then(resp => {
    resp.json().then(data => {
        console.info("fetched music", data);
        const {artists, playlists} = data,
              albums = [],
              songs = [];
        artists.forEach(artist => {
            artist.albums.forEach(album => {
                album.artist = artist;
                album.songs.forEach((song, track) => {
                    song.album = album;
                    song.artist = artist;
                    song.track = track + 1;
                    song.duration = 260; //seconds
                });
                albums.push(album);
            });
        });
        store.dispatch(musicLoaded({artists, albums, songs, playlists}));
    });
}).catch(err => {
    console.error("error getting music", err);
});

ReactDOM.render(
    <Provider store={store}>
        <Root />
    </Provider>,
    document.getElementById("root")
);
