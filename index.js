const express = require('express');
const unirest = require('unirest');
const bodyParser = require('body-parser');
const _ = require('lodash');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function(req, res) {
  res.render('index');
})

app.post('/', function(req, res) {
  let searchActor = req.body.actor;
  let url = `https://community-netflix-roulette.p.mashape.com/api.php?actor=${searchActor}`
  let responseTxt = "";
  unirest.get(url)
    .header("X-Mashape-Key", "Ole1Gv2CajmshmIErnYAtZtaK9iHp1Rkjv1jsnu3RYLMqETD5X")
    .header("Accept", "application/json")
    .end(function (result) {
      let responseTxt = _.map(result.body, 'show_title');
      _.forEach(responseTxt, function(title){
        res.write(title);
        res.write('\n')
      })
      res.end()
    });
})
app.listen(3000, function() {
  console.log('Port 3000')
})
