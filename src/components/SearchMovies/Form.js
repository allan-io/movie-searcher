import React from "react"

const Form = (props) => {
  return (
    <form className="form" onSubmit={props.searchMovies}>
      <label className="label" htmlFor="query">Movie Name</label>
      <input
        type="text"
        name="query"
        placeholder="search movies"
        value={props.query}
        onChange={props.handleChange}
      />
      <button className="button" type="submit">search</button>
    </form>
  )
}

export default Form