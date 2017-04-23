function ArtistInfo() {
  this.method = "artist.getinfo";
  Request.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Request.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;
