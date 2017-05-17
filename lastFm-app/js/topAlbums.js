function TopAlbums() {
  this.method = 'artist.getTopAlbums';
  Request.apply(this, arguments);
}

TopAlbums.prototype = Object.create(Request.prototype);
TopAlbums.prototype.constructor = TopAlbums;

TopAlbums.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName,
    limit: 10
  };
  
  this.makeGet(queryObject, drawTopAlbums);
};
