import './App.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from 'react'
import NavBarComponent from './component/navBar.js'
import SilderComponent from './component/slider.js'

function App() {
  
  return (
    <div className="App"
    //navator 추가 아직안함 컴포넌트만 분리해놓음
    >
      <NavBarComponent/>
      <SilderComponent/>
    </div>
  );
  
}

export default App