import React, { useEffect, useState } from 'react'
import "./nav.css"


function Navbar() {

  const [show, setShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 120) {
        setShow(true)
      }else {
        setShow(false)
      }
    })
    return () => {
      window.removeEventListener("scroll")
    }
  }, [])

  return (
    <div className={`nav ${show && "nav_scroll"}`}>
      <img 
      className='img_nav'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png?20190206123158'
      alt='netflix'
      />
       <img 
      className='user_nav'
      src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
      alt='user'
      />
    </div>
  )
}

export default Navbar
