function ArtistSearch(artistName) {
  this.resource = "http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=" + artistName + "&api_key=6c42a6265b88915f11e9bd1aad2d389d&format=json";
  Request.apply(this, arguments);
}

ArtistSearch.prototype = Object.create(Request.prototype);
ArtistSearch.prototype.constructor = ArtistSearch;
