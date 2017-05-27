function TopArtists() {
  this.method = "chart.gettopartists"; 
  Request.apply(this, arguments);
}

TopArtists.prototype = Object.create(Request.prototype);
TopArtists.prototype.constructor = TopArtists;

TopArtists.prototype.getInfo = function(pageNumber) {
  var queryObject = {
    method: this.method,
    limit: 15,
    page: pageNumber
  };
  
  this.makeGet(queryObject, drawTopArtists);
};
