import React, { useState } from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Products from './Products';

const Landing = ({query}) => {
    const images = [
        'images/ban1.png',
        'images/ban2.jpg',
        'images/ban3.gif',
        'images/ban4.jpg'
    ]

  return (
    <>
    <div>
       <Slide indicators={false} arrows={false}>
        
       {images.map((image, index) => (
                    <div className="each-slide-effect" key={index}>
                        <div style={{ backgroundImage: `url(${image})` }}>
                        </div>
                    </div>
                ))}
        </Slide>
    </div>
        <Products query = {query}/>
    </>
  )
}

export default Landing
