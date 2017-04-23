// API Key 6c42a6265b88915f11e9bd1aad2d389d
// artist.getinfo
// "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=YOUR_API_KEY&format=json"
//
// artist.search
// "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=cher&api_key=YOUR_API_KEY&format=json"
// 
// chart.getTopArtists
// "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=YOUR_API_KEY&format=json"
// 
// album.getinfo
// "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=YOUR_API_KEY&artist=Cher&album=Believe&format=json"

function Request() {
  this.xhr = new XMLHttpRequest();
  
  this.url = "http://ws.audioscrobbler.com/2.0/";
  this.apiKey = "api_key=6c42a6265b88915f11e9bd1aad2d389d";
  this.format = "format=json";
  
  this.xhr.onload = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        console.log(this.responseText);
      } else {
        console.error(this.statusText);
      }
    }
  };
  this.xhr.onerror = function () {
    console.error(this.statusText);
  };
}

Request.prototype.sendRequest = function (requestMethod, queryParams) {
  var queryString = this.buildQueryString(queryParams);
  this.xhr.open(requestMethod, queryString, true);
  this.xhr.send(null);
};

Request.prototype.getInfo = function (artist, album) {
  var queryObject = {
    method: this.method,
    artist: artist,
    album: album
  };
  this.sendRequest("GET", queryObject);
};

Request.prototype.buildQueryString = function (queryParams) {
  switch (queryParams.method) {
    case ("artist.getinfo"):
      return this.url + "?method=" + queryParams.method + "&artist=" + queryParams.artist + "&" + this.apiKey + "&" + this.format;
    case ("artist.search"):
      return this.url + "?method=" + queryParams.method + "&artist=" + queryParams.artist + "&" + this.apiKey + "&" + this.format;
    case ("chart.gettopartists"):
      return this.url + "?method=" + queryParams.method + "&" + this.apiKey + "&" + this.format;
    case ("album.getinfo"):
      return this.url + "?method=" + queryParams.method + "&" + this.apiKey + "&artist=" + queryParams.artist + "&album=" +
        queryParams.album + "&" + this.format;
  }
};
