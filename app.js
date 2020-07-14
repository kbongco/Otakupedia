topURL = "https://api.jikan.moe/v3/top/anime/1/airing"
searchAnime = " https://api.jikan.moe/v3/search/anime/{id}(/request)"



//To access the data in the top API it should be response.data.top[index]

const renderTopAnime = (anime) => {
  anime.foreach((animes) => {
    let poster = document.createElement('img')
    poster.src = animes.image_url
  })



//create try and catch script for API
const topAnime = async () => {
  const topAnime = topURL
  try {
    const response = await axios.get(topURL)
    console.log(response.data.top[0])
  } catch (error) {
    console.error(`This is my ${error}`)
  }
} 
topAnime()



//Testing things to append to DOM in topandtrending 
// const topAnimu = () => {
//   let current = document.querySelector('.topandtrending')
//   let newElement = document.createElement('p')
//   newElement.appendChild(document.createTextNode('Plus Ultra!'))
//   current.appendChild(newElement)

// }
// topAnimu();
//Append things to do the should be in the top/trending section
//The things we would be appending to the DOM are title and image_url 
//And rank for the top 10 things. 

//Appending things to the other DOM in the divs of search and userlist 


//create another script to search and find randomly (POST MVP)

