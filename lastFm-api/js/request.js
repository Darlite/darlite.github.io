// API Key 6c42a6265b88915f11e9bd1aad2d389d

function Request() {
  this.xhr = new XMLHttpRequest();
  
  this.url = "http://ws.audioscrobbler.com/2.0/?";
  this.apiKey = "6c42a6265b88915f11e9bd1aad2d389d";
  this.format = "json";
  
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

Request.prototype.makeGet = function (queryParams) {
  queryParams.api_key = this.apiKey;
  queryParams.format = this.format;
  var queryString = this.buildQueryString(queryParams);
  this.xhr.open('GET', queryString, true);
  this.xhr.send(null);
};

Request.prototype.buildQueryString = function (queryParams) {
  return this.url + encodeQueryData(queryParams);
};

function encodeQueryData(data) {
   var ret = [];
   for (var d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
}
