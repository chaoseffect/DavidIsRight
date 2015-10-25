var request = require('request');
var express = require('express');
var app = express();

app.post('/connect/finish', function(req, res) {
  //var sessionTokenObject = req.body;
  //sessionTokenObject.clientSecret = '5d20238ceb4b2f5cffddd71c64b1b476d16bb';
  var sessionTokenObject = localStorage.getItem("token") + '5d20238ceb4b2f5cffddd71c64b1b476d16bb';
  //var sessionTokenObject = '4842314b89f7c5fe693523876ccfca1d.5d20238ceb4b2f5cffddd71c64b1b476d16bb';
  // send request to Human API
  // Note: this example uses the node.js 'request' library
  request({
    method: 'POST',
    uri: 'https://user.humanapi.co/v1/connect/tokens',
    json: sessionTokenObject
  }, function(err, resp, body) {
      if(err) return res.send(422);
      console.log(resp);
       var jsonresponse = JSON.stringify(resp);
       alert(jsonresponse);
    
      //returned payload from Human API
      //store these values with your local user record
      //you will need them to query data and to re-open Human Connect
    
      res.send(201, body);
    });
  
});