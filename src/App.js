import React from "react"
import Header from "./components/Header/Header"
import SearchMovies from "./components/SearchMovies/SearchMovies"
import "./App.css"

const App = () => {
  return (
    <div className="container">
      <Header />
      <SearchMovies />
    </div>
  )
}

export default App