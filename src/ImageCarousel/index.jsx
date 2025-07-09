import React from 'react'
import One from './assets/1.jpg'
import Two from './assets/2.jpg'
import Three from './assets/3.jpg'
import Four from './assets/4.jpg'
import Five from './assets/5.jpg'
import Carosel from './components/Carosel'
import './index.css'
function Index() {
  return (
    <div class="app">
       <Carosel>
          <img id='slide1' src={One}/>
          <img id='slide2' src={Two}/>
          <img id='slide3' src={Three}/>
          <img id='slide4' src={Four}/>
          <img id='slide5' src={Five}/>
        </Carosel> 
    </div>
  )
}

export default Index