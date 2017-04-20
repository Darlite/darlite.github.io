function ArtistInfo(artistName) {
  this.resource = "http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=" + artistName + "&api_key=6c42a6265b88915f11e9bd1aad2d389d&format=json";
  Request.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Request.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;