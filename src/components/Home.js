import React from 'react';
import {Image} from 'semantic-ui-react'
import mainImage from '../assets/main_image.png'
import bodyBuilding from '../assets/bodybuilding.jpeg'
import natural from '../assets/natural.png'

const style = {
  position:"absolute",
}

const imgRight = {
  float:"right",
}

const imgLeft = {
  float:"left",
}

const Home = () =>( 
  <div style={style}> 
    <h1> Welcome to the best nutrition site!</h1>
    <Image src={mainImage} fluid />
    <Image src={bodyBuilding}  style={imgRight} />
    <Image src={natural} style={imgLeft}/>

  </div> 
) 

export default Home