/* jshint esversion: 6 */

function TopAlbums() {
  this.method = "artist.getTopAlbums";
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
  
  this.makeGet(queryObject, function(response) {
    var albums = JSON.parse(response).topalbums.album;
    
    var divContent = document.getElementsByClassName('content')[0];
    
    var divAlbums = document.createElement('div');
    divAlbums.setAttribute('class', 'albums');
    
    var h2 = document.createElement('h2');
    h2.textContent = "Albums";
    
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'albums');
    var fragment = document.createDocumentFragment();
    
    albums.forEach(function(album) {
      var li = document.createElement('li');
      var img = document.createElement('img');
      
      var divAlbumName = document.createElement('div');
      divAlbumName.setAttribute('class', 'albumName');
      
      var span = document.createElement('span');
      img.setAttribute('src', album.image[2]['#text']);
      img.setAttribute('data-artist-name', album.artist.name);
      img.setAttribute('data-album-name', album.name);
      img.addEventListener("click", () => showAlbumInfo(img.dataset.artistName, img.dataset.albumName));
      span.textContent = album.name;
      span.setAttribute('data-artist-name', album.artist.name);
      span.setAttribute('data-album-name', album.name);
      span.addEventListener("click", () => showAlbumInfo(span.dataset.artistName, span.dataset.albumName));
      li.appendChild(img);
      divAlbumName.appendChild(span);
      li.appendChild(divAlbumName);
      fragment.appendChild(li);
    });
    
    ul.appendChild(fragment);
    
    divAlbums.appendChild(h2);
    divAlbums.appendChild(ul);
    
    divContent.appendChild(divAlbums);
  });
  
};
