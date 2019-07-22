import React from 'react'
import { Route, Link } from 'react-router-dom'
import Home from '../home'
import About from '../about'

const App = () => (
  <React.Fragment>
    <header className="grid-container">
      <div className="ham">
        <span className="fas fa-bars fa-lg"></span>
      </div>
      <div className="logo">
        <img src="http://freewaves.live/wp-content/uploads/logo_blanco-fw.png" />
      </div>
      <div className="nav">      
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about-us">About</Link></li>
        </ul>
      </div>
      <div className="search"><span className="fas fa-search fa-lg"></span></div>
      <div className="camLink"><span className="fas fa-video fa-lg"></span></div>
    </header>

    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/about-us" component={About} />
    </main>
  </React.Fragment>
)

export default App
