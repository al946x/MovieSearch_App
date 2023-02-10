//global variables declared 
var searchInput = $('.search');
var cardWrapper = $('main');

//function if there is no match for the user input and if there is a match

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
            <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View Movie Details</a>
          </div>
          `);
        }
      }
    }
    
    // retriving the data from the API

    function fetchMovies(event) {
        var keyCode = event.keyCode;
        var searchText = searchInput.val().trim();
      
        if (keyCode === 13 && searchText) {
      
          $.get(`https://www.omdbapi.com/?apikey=27127729&s=${searchText}`) 
            .then(function (data) {
              displayMatches(data.Search);
              searchInput.val('');
            });
      
        }
      }
      
      function init() {
        searchInput.keydown(fetchMovies);
      }
      
      init();
      
      
    
    /* whatever you need to load or happen straight away goes into function init*/
    
    