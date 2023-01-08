var searchInput = $('.search');
var cardWrapper = $('main');

function noMatch() {
    cardWrapper.html('<p class="no-search">No results found.</p>');
  }
  
  function displayMatches(matches) {
    cardWrapper.html('');

    if (!matches) {
        noMatch();
      } else {
        for (var matchObj of matches) {
          cardWrapper.append(`
          <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObj.Poster});">
            <h3>${matchObj.Title}</h3>
            <p>Release Year: ${matchObj.Year}</p>
            <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Info Here</a>
          </div>
          `);
        }
      }
    }
    
    