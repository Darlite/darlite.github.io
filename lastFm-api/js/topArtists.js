function TopArtists() {
  this.method = "chart.gettopartists"; 
  Request.apply(this, arguments);
}

TopArtists.prototype = Object.create(Request.prototype);
TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method
  };
  this.sendRequest("GET", queryObject);
};
