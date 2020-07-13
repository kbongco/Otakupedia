topURL = "https://api.jikan.moe/v3/top/anime/1/airing"


//create try and catch script for API
const topAnime = async () => {
  const topAnime = topURL
  try {
    const response = await axios.get(topAnime)
    console.log(response)
  } catch (error) {
    console.error(`This is my ${error}`)
  }
} 
topAnime()


//Append things to do the should be in the top/trending section
//The things we would be appending to the DOM are title and image_url 
//And rank for the top 10 things. 

//Appending things to the other DOM in the divs of search and userlist 


//create another script to search and find randomly (POST MVP)

