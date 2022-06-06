import React, { useEffect, useState } from 'react'
import axios from './axios'
import "./row.css"


function Row({ title, fetchUrl, largeRow }) {

  const urlImg = "https://image.tmdb.org/t/p/original/"

  

  const [movies, setMovies] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl)
      setMovies(res.data.results)
    }fetchData()
  },[fetchUrl])
  
  return (
    <div className='row'>
      <h2 className={`titles ${largeRow && "title_netflix"}`} >{title}</h2>
      <div className="row_poster">
        {movies.map(movie => {
          return <img 
          className={`row_img ${largeRow && "row_largeImg"}`}
          src={`${urlImg}${largeRow ? movie.poster_path : movie.backdrop_path}`}
          key={movie.id}
          alt={movie.name}
          
          />
        })}
        <div>
         
        </div>
      </div>
    </div>
  )
}

export default Row
