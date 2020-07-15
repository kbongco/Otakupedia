topURL = "https://api.jikan.moe/v3/top/anime/1/airing"
// searchAnime = `https://api.jikan.moe/v3/search/anime?q=${animeTitles}`

const topFiftyAnime = (animes) => {
  animes.forEach((anime) => {
    let animeTitle = document.createElement('h4')
    animeTitle.innerText = anime.title
    document.querySelector('.topandtrending').append(animeTitle)
    let poster = document.createElement('img')
    poster.src = anime.image_url
    document.querySelector('.topandtrending').append(poster)
  })

}



//create try and catch script for top anime function
const topAnime = async () => {
  const topAnime = topURL
  try {
    const response = await axios.get(topURL)
    // console.log(response.data.top)
    topFiftyAnime(response.data.top)
  } catch (error) {
    console.error(`This is my ${error}`)
  }
}
topAnime()


todaysDate = () => {
  document.getElementById("date").innerHTML = Date();
}
todaysDate()



//testing generated result

const searchAnime = (results) => {
  results.forEach((anime) => {
    let newDiv = document.createElement('div')
    let oneTitle = document.createElement('h4')
    oneTitle.innerText = anime.title
    let newClass = newDiv.classList.add("results")
    newDiv.appendChild(oneTitle)
    let onePoster = document.querySelector('img')
    onePoster.src = anime.image_url
    let imgClass = onePoster.classList.add('imgposter')
    newDiv.appendChild(onePoster)
    document.querySelector('.generatedresult').append(newDiv)
 })

}

//Create a function for searching individual anime 
const ichiAnime = async (e) => {
  e.preventDefault();
  const animeTitle = document.querySelector('#blank').value
  const url = `https://api.jikan.moe/v3/search/anime?q=${animeTitle}`
  try {
    const animeResponse = await axios.get(url)
    searchAnime(animeResponse.data.results)
  } catch (error) {
    console.error(`Omae wa mo shindeiru. The app is dead thanks to ${error}`)
  }
}






//Create Event listener
const search = document.querySelector('#search')
search.addEventListener('click', ichiAnime)

//Appending things to the other DOM in the divs of search and userlist 
const viewersAnime = () => {
  const results = document.querySelector('.results')
  results.addEventListener('click', () =>
  localStorage.setItem(searchAnime)
  )

}

//create another script to search and find randomly (POST MVP)

