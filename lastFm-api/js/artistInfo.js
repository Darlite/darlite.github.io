function ArtistInfo() {
  this.method = "artist.getinfo";
  Request.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Request.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.sendRequest("GET", queryObject);
};
