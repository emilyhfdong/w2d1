var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var object = {
    a : '4',
    e : '3',
    l : '1',
    o : '0',
    s : '5',
    t : '7',
    'ck' : 'x',
    'er' : '0r',
    'you' : 'j00'
  }

  for (letter in object) {
    var regex = RegExp(letter, 'g');
    html = html.replace(regex, object[letter]);
  }

  console.log(html);
}

getHTML(requestOptions, print1337);