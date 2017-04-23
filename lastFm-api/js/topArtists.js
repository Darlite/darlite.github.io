function TopArtists() {
  this.method = "chart.gettopartists"; 
  Request.apply(this, arguments);
}

TopArtists.prototype = Object.create(Request.prototype);
TopArtists.prototype.constructor = TopArtists;
