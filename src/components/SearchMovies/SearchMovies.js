import React, {useState} from "react"
import "./SearchMovies.css"

import Form from "./Form"
import CardList from "./CardList"

const Searchmovies = () => {

  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (event) => {  
    event.preventDefault()
    
    const url = `https://api.themoviedb.org/3/search/movie?api_key=e8f31b85c9ea49a52f5d7e5267f6f51e&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch(err) {
      console.error(err)
    }
  }

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