import React from 'react'
import ImageComponent from '../components/ImageComponent';
import Img from '../assets/image.png'
import '../styles/ImageStyles.css'
import Cards from '../components/Cards';


function Home() {
  return (
    <div className='home'>
      <ImageComponent image={Img}/>
      <div>
        <h2>Aktuelles</h2>
        <Cards/>
      </div>
    </div>
  )
}

export default Home;
