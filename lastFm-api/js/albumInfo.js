function AlbumInfo() {
  this.method = "album.getinfo";
  Request.apply(this, arguments);
}

AlbumInfo.prototype = Object.create(Request.prototype);
AlbumInfo.prototype.constructor = AlbumInfo;
