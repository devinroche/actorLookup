const _ = require('lodash')

module.exports = {
  getAverage: function(rateArr) {
    var rateAvg = []
    _.forEach(rateArr, function(index) {
      rateAvg.push(parseFloat(index));
    });
    return _.round(_.mean(rateAvg), 2);
  },
  getTitles: function(searchResults) {
    var sortYr = _.sortBy(searchResults, ['release_year'])
    var preStr = _.map(sortYr, 'show_title');
    var strArr = []

    _.forEach(preStr, function(index) {
      strArr.push(index)
    })
    return strArr
  },
  getScore: function(results) {
    var strRate = _.map(results, 'rating');
    var allScore = [];

    for (var i = 0; i < strRate.length; i++) {
      allScore.push(strRate[i]);
    }
    return allScore;
  },

  getRatings: function(searchResults) {
    return _.map(searchResults, 'rating');
  },
  
  getColors: function() {
    let colorsArr = [
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)',
      'rgba(255, 99, 132, 0.2)',
      'rgba(54, 162, 235, 0.2)',
      'rgba(255, 206, 86, 0.2)',
      'rgba(75, 192, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 159, 64, 0.2)'
    ]
    return colorsArr
  }
}
