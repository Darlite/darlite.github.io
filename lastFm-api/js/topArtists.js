function TopArtists() {
  this.resource = "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=6c42a6265b88915f11e9bd1aad2d389d&format=json";
  Request.apply(this, arguments);
}

TopArtists.prototype = Object.create(Request.prototype);
TopArtists.prototype.constructor = TopArtists;
