import React from 'react'

const About = () => {
  return (
    <div className='about'>
      <div className='about-content'>
        <div className='left'>
            <div>
            <h1>About</h1>
            <p>This App was built due to my passion and enthusiastic self development to pursue proficiency in the field of Software Engineering </p>
            <p>It is a Fullstack E-commerce  App built with modern software development tools </p>
            </div>
        </div>
        <div className='right'>
            <div className='top'>
                <div className='backend'>
                <h3>Backend</h3>
                <p>Below is the list of tools used for the Backend Developent</p>
                <ul>
                    <li>Nodejs and Expressjs for API building </li>
                    <li>Multer for file upload</li>
                </ul>
                </div>
            </div>

            <div className='database'>
            <h3>Database</h3>
                <p>Below is a list of tools used for the Backend Developent</p>
                <ul>
                    <li>MongoDB </li>
                    <li>Mongoose for Database Connection</li>
                </ul>
            </div>
                  <div className='bottom'>
                      <h3>Frontend</h3>
                      <p>Reactjs was used to build the client side</p>
                      <p>My key lessons from the project are listed below</p>
                      <ul>
                          <li>Redux for state management </li>
                          <li>Redux persist to retain the cart items upon browser refresh</li>
                          <li>React Slideshow image </li>
                      </ul>  
                    </div>                
        </div>
      </div>
    </div>
  )
}

export default About
