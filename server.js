const express = require('express')
const next = require('next')
require('dotenv').config()
const isOnline = require('is-online');
const SpotifyWebApi = require('spotify-web-api-node');



(async () => {
  appOnline = await isOnline();
})();

const dev = process.env.NODE_ENV !== 'production'
const app = next({
  dev
})
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {

    const server = express()
    
    if (appOnline) {
      var spotifyApi = new SpotifyWebApi({
        clientId: process.env.ID,
        clientSecret: process.env.SECRET
      });

      spotifyApi.clientCredentialsGrant().then(
        function (data) {
          console.log('The access token is ' + data.body['access_token']);
          spotifyApi.setAccessToken(data.body['access_token']);
        },
        function (err) {
          console.log('Something went wrong!', err);
        }
      );

    } else {
      console.log("Houston we have a problem", appOnline);
    }


    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = {
        id: req.params.id
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.get('/spotify/:url', (req, res) => {
      const actualPage = '/spotify'
      const queryParams = {
        url: req.params.url
      }
      app.render(req, res, actualPage, queryParams)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })