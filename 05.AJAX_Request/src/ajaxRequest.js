function ajaxReq(url, options) {
  'use strict';

  var request = new XMLHttpRequest();

  request.onreadystatechange = function() {
    if (request.readyState === 4) console.log(request.status);
  }
  request.open(options.method, url);
  request.send();

}