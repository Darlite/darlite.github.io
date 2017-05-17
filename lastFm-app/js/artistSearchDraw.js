/* jshint esversion: 6 */

function drawArtistSearch(response) {
  var divContent = document.getElementsByClassName('content')[0];
  divContent.innerHTML = '';

  var fragment = document.createDocumentFragment();
  var ul = document.createElement('ul');
  ul.setAttribute('id', 'artists');
  var artistMatches = JSON.parse(response).results.artistmatches.artist;

  artistMatches.forEach(function(artist) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    var divArtistName = document.createElement('div');
    divArtistName.setAttribute('class', 'artistName');

    var span = document.createElement('span');
    // 2 - for large size image
    img.setAttribute('src', artist.image[2]['#text']);
    img.setAttribute('data-artist-name', artist.name);
    img.addEventListener('click', () => showArtistInfo(img.dataset.artistName));
    span.textContent = artist.name;
    span.setAttribute('data-artist-name', artist.name);
    span.addEventListener('click', () => showArtistInfo(span.dataset.artistName));
    li.appendChild(img);
    divArtistName.appendChild(span);
    li.appendChild(divArtistName);
    fragment.appendChild(li);
  });

  ul.appendChild(fragment);
  divContent.appendChild(ul);
}
