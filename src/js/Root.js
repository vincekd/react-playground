/* -*- mode: rjsx -*- */

import React from 'react';
import TopBar from './TopBar';
import LibrarySidebar from './LibrarySidebar';
import LibraryList from './LibraryList';
import SongList from './SongList';
import BottomBar from './BottomBar';

class Root extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            music: {
                artists: [],
                albums: [],
                songs: [],
                playlists: []
            },
            location: {
                current: {
                    artist: null,
                    album: null,
                    song: null
                },
                history: [],
            },
            player: {
                current: null,
                previous: null,
                playlist: [],
                settings: {
                    repeat: false,
                    shuffle: false
                }
            }
        };
    }

    componentDidMount() {
        fetch("/api/music").then(resp => {
            resp.json().then(artists => {
                console.info("fetched music", artists);
                const albums = [],
                      songs = [],
                      playlists = Array(5).fill(null).map((_, i) => ({name: "Playlist " + i}));
                artists.forEach(artist => {
                    artist.albums.forEach(album => {
                        album.artist = artist.name;
                        album.songs.forEach((song, track) => {
                            song.album = album.name;
                            song.artist = artist.name;
                            song.track = track + 1;

                            // takes too long
                            // songs.push(song);
                        });
                        albums.push(album);
                    });
                });
                this.setState({music: {artists, albums, songs, playlists}});
            });
        }).catch(err => {
            console.error("error getting music", err);
        });
    }

    generateHistory() {
        return this.state.location.history.slice().concat(this.state.location.current);
    }

    selectArtist(artist) {
        if (artist !== this.state.location.current.artist) {
            this.setState({
                location: getLocation(artist, null, null, this.generateHistory())
            });
        }
    }

    selectAlbum(album) {
        if (album !== this.state.location.current.album) {
            const artist = this.state.music.artists.find(a => a.name === album.artist);
            console.log("artist", artist);
            this.setState({
                location: getLocation(artist, album, null, this.generateHistory())
            });
        }
    }

    selectSong(song) {
        if (song !== this.state.location.current.song) {
            const artist = this.state.music.artists.find(a => a.name === song.artist),
                  album = artist.albums.find(a => a.name === song.album);
            this.setState({
                location: getLocation(artist, album, song, this.generateHistory())
            });
        }
    }

    render() {
        const artist = this.state.location.current.artist,
              album = this.state.location.current.album,
              song = this.state.location.current.song,
              artists = this.state.music.artists,
              albums = (artist ? artist.albums : this.state.music.albums),
              songs = (album ? album.songs :
                      (artist ? artist.albums.reduce((arr, item) => arr.concat(item.songs), []) :
                              this.state.music.songs));

        return (
            <div id="wrapper">
              <div id="top-bar"><TopBar player={this.state.player} /></div>
              <div id="middle-area">
                <div id="sidebar"><LibrarySidebar location={this.state.location} playlists={this.state.music.playlists} /></div>
                <div id="music-view">
                  <div id="artist-albums">
                    <LibraryList items={artists} handleClick={(artist) => this.selectArtist(artist)} name="Artists" current={artist}/>
                    <LibraryList items={albums} handleClick={(album) => this.selectAlbum(album)} name="Albums" current={album}/>
                  </div>
                  <div id="songs">
                    <SongList songs={songs} handleClick={song => this.selectSong(song)} current={song}/>
                  </div>
                </div>
              </div>
              <div id="bottom-bar">
                <BottomBar {...this.state.location.current} />
              </div>
            </div>
        );
    }
}

function collect(items, type) {
    return ;
}

function getLocation(artist = null, album = null, song = null, history = []) {
    return {
        current: {artist, album, song},
        history
    };
}

//module.exports = Root;
export default Root;
