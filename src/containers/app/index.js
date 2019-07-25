import React from 'react'
import { Route } from 'react-router-dom'
import Navbar from "../components/navbar";
import HomeSlider from "../components/slider";
import Cams from "../components/cams";
import Home from '../home'
import About from '../about'

const App = () => (
  <React.Fragment>
    <Navbar />
    {/* <HomeSlider/> */}
    <div id="main-wrap">
      <Cams />
{/*       <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} /> */}
    </div>
  </React.Fragment>
)

export default App
