window.onload = showTopArtists();

function showTopArtists(pageNumber) {
  var topArtists = new TopArtists();
  topArtists.getInfo(pageNumber);
}

function search(id) {
  var searchInput = document.getElementById(id).value;
  document.getElementById(id).value = '';
  
  var artistSearch = new ArtistSearch();
  artistSearch.getInfo(searchInput);
}

function showArtistInfo(artistName) {
  var artistInfo = new ArtistInfo();
  artistInfo.getInfo(artistName);
}

function showAlbumInfo(artistName, albumName) {
  var albumInfo = new AlbumInfo();
  albumInfo.getInfo(artistName, albumName);
}
