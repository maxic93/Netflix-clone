import React, { useEffect, useState } from 'react'
import axios from './axios'
import request from './request.js'
import "./banner.css"

function Banner() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        async function fetchData() {
            const res = await axios.get(request.fetchLastest)
            const number = Math.floor(Math.random() * (20 - 0))
            setMovies(res.data.results[number])
            
            return res
            
        }
        fetchData()
    },[])

  return (
    <div>
      <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(https://image.tmdb.org/t/p/original/${movies.backdrop_path})`,
            backgroundPosition: "center center"
        }}
      >
          <div className='header_content'>
              <h1 className='headerTitle'>{movies.name}</h1>
              <div className='headerButton'>
                 <button>Play</button>
                 <button>My list</button>
              </div>
              <div className='headerDescription'>
              <p >{movies.overview}</p>
              </div>
              
          </div>
      </header>
    </div>
  )
}

export default Banner
