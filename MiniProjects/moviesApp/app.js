// VARIABLE LIBRARY
let imgThumbnailEl = document.querySelector('#imgThumbnail')
let searchEl = document.querySelector('#search')
let movieCardBoxEl = document.querySelector('#movieCardBox')
let movieCardEl = document.querySelector('#movieCard')
let movieTitleEl = document.querySelector('#movieTitle')

// SEARCH FLICK
searchEl.addEventListener('click', () => {
  let inputEl = document.querySelector('#input')

  // API
  const url = `https://moviesdatabase.p.rapidapi.com/titles/search/keyword/${inputEl.value}?info=base_info`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '4165450571mshe599f8c8e4e26f2p132bb2jsn0e744e67b61b',
      'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
    }
  };
  // FETCH
  fetch(url, options)
    .then(res => res.json())
    .then(data => {
      
      // Redefined: changed/filtered data to only hold specific movies that have workable data
      let movieData = data.results.filter(obj => {
        return obj.releaseYear !== null && obj.plot !== null
      });
      console.log('movieData: ', movieData);

      // Render: movie thumbnail similar to netflix at top of page
      let thumbnail = movieData.filter((thumbnail) => {
        return thumbnail.primaryImage !== null
      })
      imgThumbnailEl.innerHTML = `<img class="img-thumbnail" src="${thumbnail[0].primaryImage.url}" alt="" srcset="">`

      // Render: mapping over movies array to render movie titles as cards
      movieCardBoxEl.innerHTML = movieData.map((movie) => {
        console.log(movie)

        return `
          <div class="movie-cards">
            <h2>${movie.titleText.text}</h2>
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
    .catch(err => console.error('error:' + err));
})