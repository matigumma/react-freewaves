import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';

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
                        <span className="bm-burger-button fas fa-bars fa-lg"></span>
                    </div>
                    <div className="logo">
                        <img src="http://freewaves.live/wp-content/uploads/logo.png" alt="Freewaves Logo" />
                    </div>
                    <div className="nav">
                        <ul>
                            <li className="actual"><Link to="/">Home</Link></li>
                            <li><Link to="/community">Community</Link></li>
                            <li><Link to="/gallery">Gallery</Link></li>
                            <li><Link to="/sponsors">Sponsors</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
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