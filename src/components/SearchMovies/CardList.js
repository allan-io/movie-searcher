import React from "react"

import Card from "./Card"

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.movies.filter(movie => movie.poster_path).map(movie => (
        <Card key={movie.id} movie={movie}/>
      ))}
    </div>
  )
}

export default CardList