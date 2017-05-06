/* jshint esversion: 6 */

function Request() {
  this.xhr = new XMLHttpRequest();
  
  this.url = "http://ws.audioscrobbler.com/2.0/?";
  this.apiKey = "6c42a6265b88915f11e9bd1aad2d389d";
  this.format = "json";
  
  this.xhr.onprogress = function(event) {
    console.log("Fetching data from api");
  };
  
  this.xhr.onerror = function() {
    console.error(this.statusText);
  };
}

Request.prototype.makeGet = function(queryParams, callback) {
  queryParams.api_key = this.apiKey;
  queryParams.format = this.format;
  var queryString = this.url + this.buildQueryString(queryParams);
  console.log(queryString);
  
  this.xhr.onload = function() {
    if (this.readyState === 4) {
      if (this.status === 200) {
        callback(this.responseText);
        showContent();
      } else {
        console.error(this.statusText);
      }
    }
  };
  
  this.xhr.open('GET', queryString, true);
  this.xhr.send(null);
  
  function showContent() {
    var divContent = document.getElementsByClassName('content')[0];
    var divLoader = document.getElementById('loader');
    divContent.style = `display: block`;
    divLoader.style = `display: none`;
  }
};

Request.prototype.buildQueryString = function(queryParams) {
  return this.encodeQueryData(queryParams);
};

Request.prototype.encodeQueryData = function(data) {
   var ret = [];
   for (var d in data)
     ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
   return ret.join('&');
};
