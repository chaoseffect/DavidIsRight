var clientId = '255338091286-pmc1pqb46nj2bujq37mkna8225f09ogd.apps.googleusercontent.com';
var apiKey = 'AIzaSyAIC0qV3vUnpJRgdqvq8c1wG0NGW2eBZA8';
var scopes = 'https://www.googleapis.com/auth/plus.me';


unction handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth,1);
}

function checkAuth() {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: true}, handleAuthResult);
}

function handleAuthResult(authResult) {
  var authorizeButton = document.getElementById('authorize-button');
  if (authResult && !authResult.error) {
    authorizeButton.style.visibility = 'hidden';
    makeApiCall();
  } else {
    authorizeButton.style.visibility = '';
    authorizeButton.onclick = handleAuthClick;
  }
}

function handleAuthClick(event) {
  gapi.auth.authorize({client_id: clientId, scope: scopes, immediate: false}, handleAuthResult);
  return false;
}