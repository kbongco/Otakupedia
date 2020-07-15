topURL = "https://api.jikan.moe/v3/top/anime/1/airing"
// searchAnime = `https://api.jikan.moe/v3/search/anime?q=${animeTitles}`

const topFiftyAnime = (animes) => {
  animes.forEach((anime) => {
    let newTopdiv = document.createElement('div')
    let animeTitle = document.createElement('h3')
    animeTitle.innerText = anime.title
    let newTopClass = newTopdiv.classList.add('todaystop')
    newTopdiv.appendChild(animeTitle)
    let poster = document.createElement('img')
    poster.src = anime.image_url
    let topImgClass = poster.classList.add('topimg')
    newTopdiv.appendChild(poster)
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
    let newClass = newDiv.classList.add("results")
    newDiv.appendChild(oneTitle)
    let onePoster = document.querySelector('img')
    onePoster.src = anime.image_url
    let imgClass = onePoster.classList.add('imgposter')
    newDiv.appendChild(onePoster)
    let button= document.createElement('button')
    let buttonText = document.createTextNode('Add to your list!')
    let buttonClass = button.classList.add('addlist')
    button.addEventListener('click',topAnime)
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

//Create an event listener to show anime info
// const addingList = document.querySelector('.addList');


//Creating a function to add to an event listener
const userAnime = () => {
  let usersAnime = document.querySelectorAll('.generatedresults')
  for (let i = 0; i < usersAnime.length; i++) {
    usersAnime[i].addEventListener('click', () => {
      const userSelected = usersAnime[i].classList.add('userselected')
      let userFave = document.querySelectorAll('#userselected')
      userFave.append(userSelected)
    })
  }
}





//Create Event listener
const search = document.querySelector('#search')
search.addEventListener('click', ichiAnime)



//create another script to search and find randomly (POST MVP)

