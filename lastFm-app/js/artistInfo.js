/* jshint esversion: 6 */

function ArtistInfo() {
  this.method = "artist.getinfo";
  Request.apply(this, arguments);
}

ArtistInfo.prototype = Object.create(Request.prototype);
ArtistInfo.prototype.constructor = ArtistInfo;

ArtistInfo.prototype.getInfo = function(artistName) {
  var queryObject = {
    method: this.method,
    artist: artistName
  };
  
  this.makeGet(queryObject, function(response) {
    var divSearch = document.getElementsByClassName("search")[0];
    while (divSearch.firstChild) {
      divSearch.removeChild(divSearch.firstChild);
    }
    
    var divContent = document.getElementsByClassName('content')[0];
    if (divContent.firstChild !== null) {
      while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
      }
    }
    
    var artistInfo = JSON.parse(response).artist;
    
    var divArtistInfo = document.createElement('div');
    divArtistInfo.setAttribute('class', 'artistInfo');
    
    var divArtistInfoHeader = document.createElement('div');
    divArtistInfoHeader.setAttribute('id', 'artist-title');
    
    var h1 = document.createElement('h1');
    h1.textContent = artistInfo.name;
    
    divArtistInfoHeader.appendChild(h1);
    divContent.appendChild(divArtistInfoHeader);
    
    var divRatingBar = document.createElement('div');
    divRatingBar.setAttribute('id', 'rating-bar');
    
    var fragmentRatingBar = document.createDocumentFragment();
    var randomInput = getRandomInt(1,6);
    for (var i = 1; i < 6; i++) {
      var input = document.createElement('input');
      var label = document.createElement('label');
      
      input.setAttribute('type', 'checkbox');
      input.setAttribute('id', 'st' + i);
      input.setAttribute('value', i);
      input.setAttribute('disabled', 'disabled');
      if (i == randomInput) {
        input.setAttribute('checked', 'checked');
      }
      
      label.setAttribute('for', 'st' + i);
      
      fragmentRatingBar.appendChild(input);
      fragmentRatingBar.appendChild(label);
    }
    
    divRatingBar.appendChild(fragmentRatingBar);
    divContent.appendChild(divRatingBar);
    
    var img = document.createElement('img');
    img.setAttribute('src', artistInfo.image[3]['#text']);
    img.style = `float: left;
                  margin-right: 30px;
                  margin-bottom: 10px;`;
    var p = document.createElement('p');
    p.textContent = artistInfo.bio.summary;
    
    divArtistInfo.appendChild(img);
    divArtistInfo.appendChild(p);
    
    divContent.appendChild(divArtistInfo);
    
    // for albums on the artist info page
    var topAlbums = new TopAlbums();
    topAlbums.getInfo(artistInfo.name);
  });
  
  // for randomizing colored hearts in rating bar
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
};
