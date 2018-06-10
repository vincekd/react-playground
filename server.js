

// Node Server
const http = require("http"),
      os = require("os"),
      port = 3000,
      data = getRandomData(),
      handler = (req, res) => {
          console.log("api request", req.url);
          const playlists = Array(5).fill(null).map((_, i) => ({name: "Playlist " + (i + 1)}));
          if (req.url === "/music") {
              res.end(JSON.stringify({artists: data, playlists}));
          } else {
              res.statusCode = 404;
              res.statusMessage = "Not Found";
              res.end();
          }
      },
      server = http.createServer(handler);

server.listen(port, (err) => {
    if (err) {
        console.error("error starting server", err);
        os.exit(1);
    }
    console.info("serving on", port);
});


function getRandomData() {
    const data = [];
    for (let i = 0; i < 50; i++) {
        const albums = [];
        for (let j = 0; j < 8; j++) {
            const songs = [];
            for (let k = 0; k < 12; k++) {
                songs.push({name: getName()});
            }
            albums.push({name: getName(), songs});
        }
        data.push({name: getName(), albums});
    }
    return data;
}
function getName() {
    return Math.random() * 100000000;
}
