/* jshint esversion: 6 */

function drawAlbumInfo(response) {
  var albumInfo = JSON.parse(response).album;

  var divContent = document.getElementsByClassName('content')[0];
  divContent.innerHTML = '';

  var divAlbumInfo = document.createElement('div');
  divAlbumInfo.setAttribute('class', 'albumInfo');

  var img = document.createElement('img');
  // 3 - for extralarge size image
  img.setAttribute('src', albumInfo.image[3]['#text']);
  var pArtist = document.createElement('p');
  pArtist.setAttribute('id', 'artistName');
  pArtist.textContent = albumInfo.artist !== undefined ? albumInfo.artist : '';

  var pYear= document.createElement('p');
  pYear.textContent = albumInfo.wiki !== undefined ? albumInfo.wiki.published : '';

  var pGenre = document.createElement('p');
  if (albumInfo.tags.tag !== undefined && albumInfo.tags.tag.length !== 0) {
    var i = 0;
    var numberOfTags = 3;
    while (i < numberOfTags && albumInfo.tags.tag[i] !== undefined) {
      pGenre.textContent += albumInfo.tags.tag[i].name + ' ';
      i++;
    }
  }

  var divAlbumTitle = document.createElement('div');
  divAlbumTitle.setAttribute('id', 'album-title');

  var h1 = document.createElement('h1');
  h1.textContent = albumInfo.name;

  divAlbumTitle.appendChild(h1);
  divContent.appendChild(divAlbumTitle);

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

  var divTracks = document.createElement('div');
  divTracks.setAttribute('class', 'tracks');

  var h2 = document.createElement('h2');
  h2.textContent = 'Tracks';

  var ul = document.createElement('ul');
  ul.setAttribute('id', 'tracks');
  var fragment = document.createDocumentFragment();

  albumInfo.tracks.track.forEach(function(track) {
    var li = document.createElement('li');
    var span = document.createElement('span');
    span.textContent = track.name;
    li.appendChild(span);
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);

  divAlbumInfo.appendChild(img);
  divAlbumInfo.appendChild(pArtist);
  divAlbumInfo.appendChild(pYear);
  divAlbumInfo.appendChild(pGenre);

  divTracks.appendChild(h2);
  divTracks.appendChild(ul);

  divContent.appendChild(divAlbumInfo);
  divContent.appendChild(divTracks);
}

// for randomizing colored hearts in rating bar
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
