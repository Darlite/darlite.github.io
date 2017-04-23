function ArtistSearch() {
  this.method = "artist.search";
  Request.apply(this, arguments);
}

ArtistSearch.prototype = Object.create(Request.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;
