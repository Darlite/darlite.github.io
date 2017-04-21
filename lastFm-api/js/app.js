var artistInfo = new ArtistInfo("Caspian");
artistInfo.sendRequest("GET");

var artistSearch = new ArtistSearch("toe");
artistSearch.sendRequest("GET");

var albumInfo = new AlbumInfo("Explosions in the sky", "The Earth Is Not a Cold Dead Place");
albumInfo.sendRequest("GET");

var topArtists = new TopArtists();
topArtists.sendRequest("GET");
