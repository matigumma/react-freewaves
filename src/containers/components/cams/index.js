import React, { Component } from 'react';
import axios from 'axios';
import CamCard from './CamCard';
//import { Link } from 'react-router-dom';
import './cams.scss';
import HoldingCams from './holdingCams';


class Cams extends Component {
    state = {
        projects: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://freewaves.live/wp-json/wp/v2/projects?per_page=9')
            .then(res => this.setState({
                projects: res.data,
                isLoaded: true
            }))
            .catch(err => { console.log(err) });
    }

    render() {
        const { projects, isLoaded } = this.state;
        if (isLoaded) {
            console.log(projects);
        return ( 
            <div className="camcontainer">
                {projects.map(pro => (<CamCard key={pro.id} project={pro} />))}
            </div>
         );
        }
        return (
            <HoldingCams />// component to show loading cam list..
        );
    }
}

export default Cams;