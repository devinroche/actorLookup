const _ = require('lodash');

module.exports = {
  getAverage: function(rateArr) {
    let rateAvg = []
    _.forEach(rateArr, function(index) {
      rateAvg.push(parseFloat(index));
    });
    return _.round(_.mean(rateAvg), 2);
  },
  getTitles: function(searchResults) {
    let preStr = _.map(searchResults, 'show_title');
    let strArr = []
    _.forEach(preStr, function(index){
      strArr.push(index)
    })
    return strArr
  },
  getScore:function(results){
    let strRate =  _.map(results, 'rating');
    let allScore = [];
    for (var i = 0; i < strRate.length; i++) {
      allScore.push(strRate[i]);
    }
    return allScore;
  },
  getRatings: function(searchResults){
    return _.map(searchResults, 'rating');
  }
}
