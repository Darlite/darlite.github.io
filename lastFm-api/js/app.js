var artistInfo = new ArtistInfo("Caspian");
artistInfo.sendRequest();

var artistSearch = new ArtistSearch("toe");
artistSearch.sendRequest();

var albumInfo = new AlbumInfo("Explosions in the sky", "The Earth Is Not a Cold Dead Place");
albumInfo.sendRequest();

var topArtists = new TopArtists();
topArtists.sendRequest();
