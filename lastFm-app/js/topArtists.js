/* jshint esversion: 6 */

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
  
  this.makeGet(queryObject, function(response) {
    var topArtists = JSON.parse(response).artists.artist;

    var divSearch = document.getElementsByClassName('search')[0];
    if (divSearch.firstChild === null) {
      var input = document.createElement('input');
      input.setAttribute('type', 'text');
      input.setAttribute('id', 'search-field');
      input.setAttribute('placeholder', 'Search for music...');
      divSearch.appendChild(input);
      
      var button = document.createElement('button');
      button.setAttribute('type', 'submit');
      button.setAttribute('onclick', "search('search-field')");
      button.textContent = "Search";
      divSearch.appendChild(button);
    }
    
    var divContent = document.getElementsByClassName('content')[0];
    
    if (divContent.firstChild !== null) {
      while (divContent.firstChild) {
        divContent.removeChild(divContent.firstChild);
      }
    }
    
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'artists');
    var fragment = document.createDocumentFragment();
    
    topArtists.forEach(function(artist) {
      var li = document.createElement('li');
      var img = document.createElement('img');
      var divArtistName = document.createElement('div');
      divArtistName.setAttribute('class', 'artistName');
      
      var span = document.createElement('span');
      img.setAttribute('src', artist.image[2]['#text']);
      img.setAttribute('data-artist-name', artist.name);
      img.addEventListener("click", () => showArtistInfo(img.dataset.artistName));
      span.textContent = artist.name;
      span.setAttribute('data-artist-name', artist.name);
      span.addEventListener("click", () => showArtistInfo(span.dataset.artistName));
      li.appendChild(img);
      divArtistName.appendChild(span);
      li.appendChild(divArtistName);
      fragment.appendChild(li);
    });
    
    ul.appendChild(fragment);
    divContent.appendChild(ul);
    
    var divPagination = document.createElement('div');
    var linksFragment = document.createDocumentFragment();
    divPagination.setAttribute('id', 'pagination');
    
    for (var i = 1; i < 11; i++) {
      let a = document.createElement('a');
      a.textContent = i;
      a.setAttribute('data-page-number', i);
      a.addEventListener("click", () => showTopArtists(a.dataset.pageNumber));
      linksFragment.appendChild(a);
    }
    divPagination.appendChild(linksFragment);
    
    divContent.appendChild(divPagination);
  });
  
};
