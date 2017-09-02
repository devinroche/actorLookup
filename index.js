const express = require('express');
const unirest = require('unirest');
const bodyParser = require('body-parser');
const _ = require('lodash');
const request = require('request')
const app = express();

//CONFIGURATION

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(express.static('public'));

const pathCtrl = require(__dirname + '/public/script/controller.js');

app.get('/', function(req, res) {
  res.render('index', {
    showTitle: null,
    rating: null,
    avg: null,
    error: null
  });
})

app.post('/', function(req, res) {
  var searchActor = req.body.actor;
  var url = `https://community-netflix-roulette.p.mashape.com/api.php?actor=${searchActor}`
  var reqObj = {
    headers: {
      "X-Mashape-Key": "Ole1Gv2CajmshmIErnYAtZtaK9iHp1Rkjv1jsnu3RYLMqETD5X"
    },
    url: url,
    method: 'GET'
  }

  request(reqObj, function(error, response, body){
    var response = JSON.parse(body);
    res.render('index', {
        searchFor: searchActor,
        showTitle: pathCtrl.getTitles(response),
        ratingData: pathCtrl.getScore(response),
        rating: pathCtrl.getRatings(response),
        avg: pathCtrl.getAverage(pathCtrl.getRatings(response)),
        barColors: pathCtrl.getColors()
      })
  })
})

app.listen(process.env.PORT || 3000, function () {
  console.log('listening on 3000' );
});
