import './App.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import NavBarComponent from './component/navBar.js'
import SilderComponent from './component/slider.js'
import ItemComponent from './pages/item/item.js'

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBarComponent/>
        <Route exact path="/" component={SilderComponent}/>
        <Route path="/big/small" component={ItemComponent}/>
      </BrowserRouter>
    </div>
  );
  
}

export default App