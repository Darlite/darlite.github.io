function AlbumInfo() {
  this.method = "album.getinfo";
  Request.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Request.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;

AlbumInfo.prototype.getInfo = function(artistName, albumName) {
  var queryObject = {
    method: this.method,
    artist: artistName,
    album: albumName
  };
  this.makeGet(queryObject);
};
