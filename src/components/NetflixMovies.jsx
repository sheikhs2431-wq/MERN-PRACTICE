import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixMovies = () => {

  var movies = [
  {movieid:1, movieName: "Kill"},
  {movieid:2, movieName: "Kantara"},
  {movieid:3, movieName: "Race"},
]

  return (
    <div style={{textAlign: "center"}}>
        <h1>NetflixMovies</h1>
        {
          movies.map((movie)=> {
            // return <li>{movie.movieName}</li>
            return <li>
              {/* <Link to={"/watch/{movie.movieName}"}>{movie.movieName}</Link> */}
              <Link to={`/watch/${movie.movieName}`}>{movie.movieName}</Link>
            </li>
          })
        }
        </div>
  )
}
