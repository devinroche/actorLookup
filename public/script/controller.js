const _ = require('lodash');

module.exports = {
  findAvg: function(rateArr) {
    let rateAvg = []
    _.forEach(rateArr, function(index) {
      rateAvg.push(parseFloat(index));
    });
    return _.round(_.mean(rateAvg), 2);
  },
  findTitles: function(searchResults) {
    let resTitles = _.map(searchResults, 'show_title');
    let resRating = _.map(searchResults, 'rating');

    let titleRate = []

    for (var i = 0; i < searchResults.length; i++) {
      titleRate.push(resTitles[i] + " " + resRating[i]);
    }

    return titleRate;
  }
}
