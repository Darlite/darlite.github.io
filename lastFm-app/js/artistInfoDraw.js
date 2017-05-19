/* jshint esversion: 6 */

function drawArtistInfo(response) {
  var divSearch = document.getElementsByClassName('search')[0];
  divSearch.innerHTML = '';

  var divContent = document.getElementsByClassName('content')[0];
  divContent.innerHTML = '';

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
  var randomInput = getRandomInt(1,6); // to color rating hearts from 1 to 5
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
  // 3 - for extralarge size image
  img.setAttribute('src', artistInfo.image[3]['#text']);
  var p = document.createElement('p');
  p.textContent = artistInfo.bio.summary;

  divArtistInfo.appendChild(img);
  divArtistInfo.appendChild(p);

  divContent.appendChild(divArtistInfo);

  // for albums on the artist info page
  var topAlbums = new TopAlbums();
  topAlbums.getInfo(artistInfo.name);
}

// for randomizing colored hearts in rating bar
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
