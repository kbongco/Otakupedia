topURL = "https://api.jikan.moe/v3/top/anime/1/airing"
searchAnime = " https://api.jikan.moe/v3/search/anime/{id}(/request)"

const topFiftyAnime = (animes) => {
  animes.forEach((anime) => {
    let animeTitle = document.createElement('h4')
    animeTitle.innerText = anime.title
    document.querySelector('.topandtrending').append(animeTitle)
    let poster = document.createElement('img')
    poster.src = anime.img_url
    document.querySelector('.topandtrending').append(poster)
  })
  console.log(animes)
  
}



//create try and catch script for top anime function
const topAnime = async () => {
  const topAnime = topURL
  try {
    const response = await axios.get(topURL)
    // console.log(response.data.top)
    topAnimu(response.data.top)
  } catch (error) {
    console.error(`This is my ${error}`)
  }
} 
topAnime()








//Appending things to the other DOM in the divs of search and userlist 


//create another script to search and find randomly (POST MVP)

