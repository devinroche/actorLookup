const express = require('express');
const unirest = require('unirest');
const bodyParser = require('body-parser');
const _ = require('lodash');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const app = express();

//CONFIGURATION

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json())
app.use(bodyParser.json({
  type: 'application.vnd.api+json'
}))
app.use(methodOverride())
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index', {
    showTitle: null,
    rating: null,
    avg: null,
    error: null
  });
})

app.post('/', function(req, res) {
  let searchActor = req.body.actor;
  let url = `https://community-netflix-roulette.p.mashape.com/api.php?actor=${searchActor}`
  let responseTxt = "";
  unirest.get(url)
    .header("X-Mashape-Key", "Ole1Gv2CajmshmIErnYAtZtaK9iHp1Rkjv1jsnu3RYLMqETD5X")
    .header("Accept", "application/json")
    .end(function(result) {
      let resTitles = _.map(result.body, 'show_title');
      let resRating = _.map(result.body, 'rating');
      let resRatingAvg = _.mean(resRating);
      res.render('index', {
        showTitle: resTitles,
        rating: resRating,
        avg: resRatingAvg
      })
    });
})
app.listen(3000, function() {
  console.log('Listening on Port 3000')
})
