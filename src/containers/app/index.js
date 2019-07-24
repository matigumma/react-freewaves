import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'
import Navbar from "../components/Navbar";
import Cams from "../components/Cams";
import HomeSlider from "../components/Slider";//agregar antes de cams - buscar slider component hecho

const App = () => (
  <React.Fragment>
    <Navbar />
      <HomeSlider/>
    <div id="main-wrap">
      <Cams />
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </div>
  </React.Fragment>
)

export default App
