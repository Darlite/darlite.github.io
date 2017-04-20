function AlbumInfo(artistName, albumName) {
  this.resource = "http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=6c42a6265b88915f11e9bd1aad2d389d&artist=" + artistName + "&album=" + albumName + "&format=json";
  Request.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Request.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;
