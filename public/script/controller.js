const _ = require('lodash');

// module.exports = function (params){
//   this.findAvg = function (szdfads) {
//
//   }
// }


module.exports = {
  findAvg: function(rateArr){
    let rateAvg = []
    _.forEach(rateArr, function(index){
      rateAvg.push(parseFloat(index));
    });

    let ratingAvg = _.round(_.mean(rateAvg), 2);
    return ratingAvg
  },
  bar: function(){
    console.log("bar");
  }
}
