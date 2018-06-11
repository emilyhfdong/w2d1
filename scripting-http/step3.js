var https = require('https');

function getAndPrintHTML (options) {

  https.get(options, function (response) {
    var allData = '';


    response.setEncoding('utf8');

    response.on('data', function(data) {
      allData += data;
    });

    response.on('end', function(end) {
      console.log(allData);
    });


  })

}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);