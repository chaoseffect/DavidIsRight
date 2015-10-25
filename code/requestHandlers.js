var querystring = require("querystring");
var HumanConnect = require("https://connect.humanapi.co/connect.js");

function start(response, postData) {
  console.log("Request handler 'start' was called.");

var body = '<html>'+
'<head>'+
'<meta http-equiv="Content-Type" content="text/html; '+ 'charset=UTF-8" />'+
'<script src="https://connect.humanapi.co/connect.js"></script>'+
'</head>'+
'<body>'+
'<form action="/upload" method="post">'+
'<textarea name="text" rows="20" cols="60"></textarea>'+ '<input type="submit" value="Submit text" />'+ '</form>'+
'<img id="connect-health-data-btn" src="https://connect.humanapi.co/assets/button/blue.png">'+
'</body>'+
'</html>';

var connectBtn = document.getElementById('connect-health-data-btn');
connectBtn.addEventListener('click', function(e){
  var options = {
      clientUserId: encodeURIComponent(email), // can be email
      clientId: '54b593082175db912c695ac6ac56fd950af14450', // found in Developer Portal
      modal: 1,
      finish: function(err, sessionTokenObject) {
        // callback that would be called after user finishes
        // connecting data.

        // you need to post `sessionTokenObject` to your server
        // append `clientSecret` to it and send it to our server.
        // sending POST request with jQuery might look like this.
        // NOTE: it's not necessary to use jQuery
        $.post('/your-server-connect-enpoint', sessionTokenObject, function(res){
        // handle server response here
        });
      },
      close: function() {
        // optional callback that will be called if the user
        // closes the popup without connecting any data sources.
      },
      error: function(err) {
        // optional callback that will be called if an error occurs while
        // loading the popup.
        // `err` is an object with the fields: `code`, `message`, `detailedMessage`
      }
	}
}
HumanConnect.open(options);


    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(body);
    response.end();
}



function upload(response, postData) { console.log("Request handler 'upload' was called."); response.writeHead(200, {"Content-Type": "text/plain"}); response.write("You've sent the text: "+ querystring.parse(postData).text);
response.end();
}
exports.start = start;
exports.upload = upload;