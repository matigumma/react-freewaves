import React from 'react'
import { Route, Link } from 'react-router-dom'
import Navbar from "../components/navbar";
import HomeSlider from "../components/slider";
import Cams from "../components/cams";
//import Home from '../home'
import About from '../about'
import { scaleRotate as Menu } from 'react-burger-menu'

const App = () => (
  <React.Fragment>
    <Navbar />
    <Menu customBurgerIcon={false} pageWrapId={"main-wrap"} outerContainerId={"outerW"}>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </Menu>
    {/* <HomeSlider/> */}
    <div id="main-wrap">
      <Cams />
      {/*<Route exact path="/" component={Home} />*/}
      <Route exact path="/about-us" component={About} />
    </div>
  </React.Fragment>
)

export default App
