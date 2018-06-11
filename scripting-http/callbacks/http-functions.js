module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {
    var allData = '';


    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData += data;
    });

    response.on('end', function(end) {
      callback(allData);
    });
  })
};