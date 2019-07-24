import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { elastic as Menu } from 'react-burger-menu'

class Navbar extends Component {
    state = { 
        isLoaded: false
    }
    
    componentDidMount(){
        this.setState({
             isLoaded: true
         });
    }

    render() { 
        const { isLoaded } = this.state;
        
        if(isLoaded) {
            return ( 
                <header className="grid-container">
                    <div className="ham">
                        <span className="fas fa-bars fa-lg"></span>
                        <Menu pageWrapId={"root"} outerContainerId={"main-wrap"}>
                            <Link to="/">Home</Link>
                            <Link to="/about-us">About</Link>
                        </Menu>
                    </div>
                    <div className="logo">
                        <img src="http://freewaves.live/wp-content/uploads/logo.png" />
                    </div>
                    <div className="nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about-us">About</Link></li>
                        </ul>
                    </div>
                    <div className="search">
                        <span className="fas fa-search fa-lg"></span>
                    </div>
                    <div className="camLink">
                        <span className="fas fa-video fa-lg"></span>
                    </div>
                </header>
             );
        }
        
        return <h3>Loading...</h3>
    }
}
 
export default Navbar;