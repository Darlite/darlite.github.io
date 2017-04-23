function ArtistSearch() {
  this.method = "artist.search";
  Request.apply(this, arguments);
}

ArtistSearch.prototype = Object.create(Request.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;

ArtistSearch.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  this.makeGet(queryObject);
};
