import React, {useState} from "react"
import "./SearchMovies.css"

// import components that will be returned from SearchMovies component
import Form from "./Form"
import CardList from "./CardList"

// initialize SearchMovie Component
const Searchmovies = () => {

  // query state that changes with each character the user presses. 
  const [query, setQuery] = useState("")
  // movies state saves the movies returned from the api call response
  const [movies, setMovies] = useState([])

  // asynchronous funtion which runs once button is clicked
  const searchMovies = async (event) => {  
    // once the form is submitted through the button click, this prevents page refresh
    event.preventDefault()
    // this is the api request url with dynamic query value
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e8f31b85c9ea49a52f5d7e5267f6f51e&language=en-US&query=${query}&page=1&include_adult=false`

    // try catch statement try will run if no error arises
    try {
      // use vanilla javascript api call function fetch and wait for response
      const res = await fetch(url)
      // once response is saved render parses the json data to js
      const data = await res.json()
      // use the setMovies function to store the 
      setMovies(data.results)
      // catch will run intead of try if there is an error
    } catch(err) {
      console.error(err)
    }
  }

  // this function listenes for any changes to input and saves it to query state
  const handleChange = (event) => {
    setQuery(event.target.value)
  }

  return (
    <>
      <Form searchMovies={searchMovies} query={query} handleChange={handleChange}/>
      <CardList movies={movies}/>
    </>
    
  )
}

export default Searchmovies