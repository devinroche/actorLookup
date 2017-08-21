const express = require('express');
const unirest = require('unirest');
const bodyParser = require('body-parser');
const http = require('http');
const _ = require('lodash');
const app = express();

//CONFIGURATION

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application.vnd.api+json'}))
app.use(express.static('public'));

const pathCtrl = require(__dirname + '/public/script/controller.js');

app.get('/', function(req, res) {
  res.render('index', {
    showTitle: null,
    rating: null,
    //showPoster: null,
    avg: null,
    error: null
  });
})

app.post('/', function(req, res) {
  let searchActor = req.body.actor;
  let url = `https://community-netflix-roulette.p.mashape.com/api.php?actor=${searchActor}`
  let responseTxt = "";
  http.get(url, function () {
    console.log('fart')
  })
  unirest.get(url)
    .header("X-Mashape-Key", "Ole1Gv2CajmshmIErnYAtZtaK9iHp1Rkjv1jsnu3RYLMqETD5X")
    .header("Accept", "application/json")
    .end(function(result) {

      res.render('index', {
        searchFor: searchActor,
        showTitle: pathCtrl.getTitles(result.body),
        ratingData: pathCtrl.getScore(result.body),
        rating: pathCtrl.getRatings(result.body),
        avg: pathCtrl.getAverage(pathCtrl.getRatings(result.body)),
        barColors: pathCtrl.getColors()
      })
    });
})

app.listen(3000, function() {
  console.log('Listening on Port 3000')
})
