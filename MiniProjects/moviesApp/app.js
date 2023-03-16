// MOVIES APP: following along (while using alternative methods and styles) in class to make sure my students have the necessary help when working on their projects.
// TO DO:
// - Create Figma wire frame
// - Use a CSS framework (Tailwind)

// VARIABLE LIBRARY
let searchEl = document.querySelector('#search')
let movieCardBoxEl = document.querySelector('#movieCardBox')
// moviecard.setAttrbiute style and add borders and stuff
let movieCardEl = document.querySelector('#movieCard')
let movieTitleEl = document.querySelector('#movieTitle')


// SEARCH FLICK
searchEl.addEventListener('click', () => {
  let inputEl = document.querySelector('#input')

  // DATA 
  const url = `https://imdb8.p.rapidapi.com/auto-complete?q=${inputEl.value}`;
  const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '4165450571mshe599f8c8e4e26f2p132bb2jsn0e744e67b61b',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

  // FETCH -- YOU HAVE A HARD STOP OF 500 CALLS
  fetch(url, options)
    .then(res => res.json())
    .then((data) => {
      // filtered data to only allow movies in array
      let mainData = data.d.filter(obj => obj.hasOwnProperty('qid'))
      console.log('mainData:', mainData);

      // mapping over movies array to render movie titles as cards
      movieCardBoxEl.innerHTML = mainData.map((title) => {

          return `
            <div class="movie-cards">
              <h2>${title.l}</h2>
              <p>${title.y}</p>
              <img class="movie-img" src="${title.i.imageUrl}" alt="" srcset="">
            </div>  
          `

      }).join('')
    })
    .catch(err => console.error('error:' + err));
})



