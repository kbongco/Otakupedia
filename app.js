topURL = "https://api.jikan.moe/v3/top/anime/1/airing"




const topFiftyAnime = (animes) => {
  animes.forEach((anime) => {
    let newTopdiv = document.createElement('div')
    let animeTitle = document.createElement('h3')
    animeTitle.innerText = anime.title
    newTopdiv.classList.add('todaystop')
    newTopdiv.appendChild(animeTitle)
    let poster = document.createElement('img')
    poster.src = anime.image_url
    poster.classList.add('topimg')
    newTopdiv.appendChild(poster)
    let button = document.createElement('button')
    let buttonText = document.createTextNode('Add to your list!')
    button.classList.add('addlist')
    button.addEventListener('click', () => userAnime(anime))
    button.appendChild(buttonText);
    newTopdiv.appendChild(button)
    document.querySelector('.topandtrending').append(newTopdiv)
  })

}



//create try and catch script for top anime function
const topAnime = async () => {
  const topAnime = topURL
  try {
    const response = await axios.get(topURL)
    console.log(response.data.top)
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
    newDiv.classList.add("results")
    newDiv.appendChild(oneTitle)
    let onePoster = document.createElement('img')
    onePoster.src = anime.image_url
    onePoster.classList.add('imgposter')
    newDiv.appendChild(onePoster)
    let button = document.createElement('button')
    let buttonText = document.createTextNode('Add to your list!')
    button.classList.add('addlist')
    button.addEventListener('click', () => userAnime(anime))
    button.appendChild(buttonText);
    newDiv.appendChild(button)
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





//Creating a function to add to an event listener
const userAnime = (anime) => {

  let searchedAnime = document.getElementById('results')
  let usersDiv = document.createElement('div')
  let faveTitle = document.createElement('h3')
  faveTitle.innerText = anime.title
  usersDiv.classList.add('userchose')
  usersDiv.appendChild(faveTitle)
  let favePoster = document.createElement('img')
  favePoster.src = anime.image_url
  usersDiv.appendChild(favePoster)
  document.querySelector('.userselected').append(usersDiv)



}




//Create Event listener
const search = document.querySelector('#search')
search.addEventListener('click', ichiAnime)



//create another script to search and find randomly (POST MVP)
//Trying to figure out randomizer --> Generates a number between 90-100 to represent mal_id to search 
const randomAnime = (anime) => {

    let randomDiv = document.createElement('div')
    let randomTitle = document.createElement('h4')
    randomTitle.innerText = anime.title
    randomDiv.classList.add('randomresults')
    randomDiv.appendChild(randomTitle)
    let randomPoster = document.createElement('img')
    randomPoster.src = anime.image_url
    randomDiv.appendChild(randomPoster)
    let button = document.createElement('button')
    let buttonText = document.createTextNode('Add to your list!')
    button.classList.add('addlist')
    button.addEventListener('click', () => userAnime(anime))
    button.appendChild(buttonText);
    randomDiv.appendChild(button)
    document.querySelector('.randomgenerated').append(randomDiv)
  
}


let animeMin = 90;
let animeMax = 100; 
let result = Math.floor(Math.random() * (animeMax - animeMin + 1) + animeMin)
let malId = result


randomUrl = `https://api.jikan.moe/v3/anime/${malId}`

const randomAnimu = async () => {
  const randomAnimu = randomUrl;
  try {
    const randomResponse = await axios.get(randomUrl)
    console.log(randomResponse)
    randomAnime(randomResponse.data)
  }catch (error) {
    console.error(`Omae wa mo shindeiru. The app is dead thanks to ${error}`)
  }
}

const randomSelect = document.querySelector('#random')
random.addEventListener('click', randomAnimu);
