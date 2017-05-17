/* jshint esversion: 6 */

function drawTopArtists(response) {
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
  divContent.innerHTML = '';

  var ul = document.createElement('ul');
  ul.setAttribute('id', 'artists');
  var fragment = document.createDocumentFragment();

  topArtists.forEach(function(artist) {
    var li = document.createElement('li');
    var img = document.createElement('img');
    var divArtistName = document.createElement('div');
    divArtistName.setAttribute('class', 'artistName');

    var span = document.createElement('span');
    // 2 - for large size image
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

  var numberOfPages = 11;
  for (var i = 1; i < numberOfPages; i++) {
    let a = document.createElement('a');
    a.textContent = i;
    a.setAttribute('data-page-number', i);
    a.addEventListener("click", () => showTopArtists(a.dataset.pageNumber));
    linksFragment.appendChild(a);
  }
  divPagination.appendChild(linksFragment);

  divContent.appendChild(divPagination);
}
