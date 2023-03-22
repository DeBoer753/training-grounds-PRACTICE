/* 
To Do: 
- install tailwind
- create watch list that is accessed by modal
- create modals for movie card that displays info inside 
- create click to swipe rows for movies
- change thumbnail to randomize any value from either 3 rows using random index number
*/

// ----------------------------------------------------------------------->

// VARIABLE LIBRARY (INDEX)
let imgThumbnailEl = document.querySelector('#imgThumbnail')
let searchEl = document.querySelector('#search')
let movieSearchCardBox = document.querySelector('#movieSearchCardBox')
let movieCardBoxEl1 = document.querySelector('#movieCardBox1')
let movieCardBoxEl2 = document.querySelector('#movieCardBox2')
let movieCardBoxEl3 = document.querySelector('#movieCardBox3')
let movieCardEl = document.querySelector('#movieCard')
let movieTitleEl = document.querySelector('#movieTitle')

// ROW URLS
const row1Url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/batman?page=3&info=base_info`;
const row2Url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/crime?info=base_info`;
const row3Url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/shy?info=base_info`;
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4165450571mshe599f8c8e4e26f2p132bb2jsn0e744e67b61b',
    'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
  }
};

// ----------------------------------------------------------------------->

// FETCH (row1 and thumbnail)
fetch(row1Url, options)
  .then(res => res.json())
  .then(data => {
    console.log("data test (row1): ", data.results);
    // Redefined: changed/filtered data to only hold specific movies that have workable data
    let row1Data = data.results.filter(obj => {
      return obj.releaseYear !== null && obj.releaseYear.year !== null && obj.plot !== null && obj.primaryImage !== null
    });
    console.log('row1Data: ', row1Data);

    // Render: movie thumbnail similar to netflix at top of page
    let thumbnail = row1Data.filter((thumbnail) => {
      return thumbnail.primaryImage !== null
    })
    let randomIndex = Math.floor(Math.random() * 7) + 1;
    imgThumbnailEl.innerHTML = `<img class="img-thumbnail" src="${thumbnail[randomIndex].primaryImage.url}" alt="" srcset="">`

    // Render Category: Batman
    movieCardBoxEl1.innerHTML = row1Data.map((movie) => {
      console.log(movie)
      // movieTitle: creates "..." if movie title is too long
      let movieTitle = () => {
        if (movie.titleText.text.length >= 12) {
          return movie.titleText.text.substring(0,12) + "..."
        } else {
          return movie.titleText.text
        }
      }

      return `
        <div class="movie-cards">
          <h2>${movieTitle()}</h2>
          <p>${movie?.releaseYear?.year || ""}</p>
          <img class="movie-img" src="${movie?.primaryImage?.url || ""}" alt="" srcset="">
            <div class="info-add-box"> 
              <button>info</button>
              <button>+</button>
            </div>
          <p class="descriptions">${movie.plot.plotText.plainText}</p> 
        </div>  
      `
    }).join('')

    // FETCH (row2)
    fetch(row2Url, options)
      .then(res => res.json())
      .then(data => {
        console.log("data test (row2): ", data.results);

        let row2Data = data.results.filter(obj => {
          return obj.releaseYear !== null && obj.releaseYear.year !== null && obj.plot !== null && obj.primaryImage !== null
        });
        console.log('row2Data: ', row2Data);
    
          // Render Category: Crime
          movieCardBoxEl2.innerHTML = row2Data.map((movie) => {
            console.log(movie)
            // movieTitle: creates "..." if movie title is too long
            let movieTitle = () => {
              if (movie.titleText.text.length >= 12) {
                return movie.titleText.text.substring(0,12) + "..."
              } else {
                return movie.titleText.text
              }
            }
      
            return `
              <div class="movie-cards">
                <h2>${movieTitle()}</h2>
                <p>${movie?.releaseYear?.year || ""}</p>
                <img class="movie-img" src="${movie?.primaryImage?.url || ""}" alt="" srcset="">
                  <div class="info-add-box"> 
                    <button>info</button>
                    <button>+</button>
                  </div>
                <p class="descriptions">${movie.plot.plotText.plainText}</p> 
              </div>  
            `
          }).join('')
        })

    // FETCH (row3)
    fetch(row3Url, options)
      .then(res => res.json())
      .then(data => {
        console.log("data test (row3): ", data.results);

        let row3Data = data.results.filter(obj => {
          return obj.releaseYear !== null && obj.releaseYear.year !== null && obj.plot !== null && obj.primaryImage !== null
        });
        console.log('row3Data: ', row3Data);
    
          // Render Category: ???
          movieCardBoxEl3.innerHTML = row3Data.map((movie) => {
            console.log(movie)
            // movieTitle: creates "..." if movie title is too long
            let movieTitle = () => {
              if (movie.titleText.text.length >= 12) {
                return movie.titleText.text.substring(0,12) + "..."
              } else {
                return movie.titleText.text
              }
            }
      
            return `
              <div class="movie-cards">
                <h2>${movieTitle()}</h2>
                <p>${movie?.releaseYear?.year || ""}</p>
                <img class="movie-img" src="${movie?.primaryImage?.url || ""}" alt="" srcset="">
                  <div class="info-add-box"> 
                    <button>info</button>
                    <button>+</button>
                  </div>
                <p class="descriptions">${movie.plot.plotText.plainText}</p> 
              </div>  
            `
          }).join('')
        })
    })
    .catch(err => console.error('error:' + err));

// ----------------------------------------------------------------------->

// SEARCH MOVIE
searchEl.addEventListener('click', (e) => {
  e.preventDefault()
  let inputEl = document.querySelector('#input')

  // SEARCH URL
  const searchUrl = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${inputEl.value}?info=base_info`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4165450571mshe599f8c8e4e26f2p132bb2jsn0e744e67b61b',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };

  // FETCH (????)
  fetch(searchUrl, options)
    .then(res => res.json())
    .then(data => {
      console.log("data test (search) ", data.results);

      // Redefined: changed/filtered data to only hold specific movies that have workable data
      let searchData = data.results.filter(obj => {
        return obj.primaryImage !== null
      });
      console.log('searchData: ', searchData);

      // Render: mapping over movies array to render movie titles as cards
      movieSearchCardBox.innerHTML = searchData.map((movie) => {
        console.log(movie)
        // movieTitle: creates "..." if movie title is too long
        let movieTitle = () => {
          if (movie.titleText.text.length >= 12) {
            return movie.titleText.text.substring(0,12) + "..."
          } else {
            return movie.titleText.text
          }
        }

        //movieYear: creates a year in replace for object primaryYear value that is null
        let movieYear = () => {
          min = Math.ceil(1940);
          max = Math.floor(2018);
          return Math.floor(Math.random() * (max - min) + min);
        }

        return `
          <div class="movie-cards">
            <h2>${movieTitle()}</h2>
            <p>${movie?.releaseYear?.year || movieYear()}</p>
            <img class="movie-img" src="${movie?.primaryImage?.url || ""}" alt="" srcset="">
              <div class="info-add-box"> 
                <button>info</button>
                <button>+</button>
              </div>

          </div>  
        `
      }).join('')
    })
    .catch(err => console.error('error:' + err));
})