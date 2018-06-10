/* -*- mode: js-jsx -*- */

import React from 'react';
import TopBar from './TopBar';
import LibrarySidebar from './LibrarySidebar';
import LibraryList from './LibraryList';
import SongList from './SongList';
import BottomBar from './BottomBar';

class Root extends React.Component {
//     componentDidMount() {
//         fetch("/api/music").then(resp => {
//             resp.json().then(artists => {
//                 console.info("fetched music", artists);
//                 const albums = [],
//                       songs = [],
//                       playlists = Array(5).fill(null).map((_, i) => ({name: "Playlist " + (i + 1)}));
//                 artists.forEach(artist => {
//                     artist.albums.forEach(album => {
//                         album.artist = artist.name;
//                         album.songs.forEach((song, track) => {
//                             song.album = album.name;
//                             song.artist = artist.name;
//                             song.track = track + 1;

//                             // takes too long
//                             // songs.push(song);
//                         });
//                         albums.push(album);
//                     });
//                 });
//                 this.setState({music: {artists, albums, songs, playlists}});
//             });
//         }).catch(err => {
//             console.error("error getting music", err);
//         });
//     }

    render() {
        return (
            <div id="wrapper">
              <div id="top-bar"><TopBar /></div>
              <div id="middle-area">
                <LibrarySidebar />
                <div id="music-view">
                  <div id="artist-albums">
                    <LibraryList name="artists" />
                    <LibraryList name="albums" />
                  </div>
                  <SongList />
                </div>
              </div>
              <BottomBar />
            </div>
        );
    }
}

export default Root;
