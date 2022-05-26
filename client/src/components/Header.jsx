import React from 'react'
import Carousel from './Carousel'
import mainImage from 'C:/Users/Ritesh/Desktop/blog app/client/images.jpg'

function Header() {
  return (
    <>
        <div className="header" style={{"height": "10%"}} >
          <Carousel />
        </div>
    </>
  )
}

export default Header