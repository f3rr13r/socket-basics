var moment = require('moment');
var now = moment();

console.log(now.format());

console.log(now.format('X'));

console.log(now.valueOf());


var timeStamp = 1473684532146;

var timeStampMoment = moment.utc(timeStamp);

console.log(timeStampMoment.local().format('h:mma'));

//console.log(now.format('MMM Do YYYY, h:mma'));