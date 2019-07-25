import React, { Component, Fragment } from 'react';
import axios from 'axios';

class CamCard extends Component {
    state = { 
        featuredImage: '',
        isLoaded: false
     }

    componentDidMount() {
        const { _thumbnail_id } = this.props.project;
        axios.get(`http://freewaves.live/wp-json/wp/v2/media/${_thumbnail_id}`)
            .then(res => this.setState({
                featuredImage: res.data,
                isLoaded: true
            }))
            .catch(err => { console.log(err) });
    }

    render() { 
        const { title } = this.props.project;
        const { categories } = this.props.project;
        const { featuredImage, isLoaded } = this.state;
        //console.log('featuredImage obj: ', featuredImage);
        if (isLoaded) {
                return ( 
                    <div className={categories[0] == 17 ? 'contcam publi' : 'contcam'}>
                        <div className="imgcam"><img src={featuredImage.source_url} /></div>
                        <div className="infocam">
                            <h3 dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>
                            <h4 dangerouslySetInnerHTML={{ __html: title.rendered }}></h4>
                        </div>
                    </div>
                );
        }
        return (
            <div className="contcam">
                <div className="imgcam"></div>
                <div className="infocam">
                    <h3>Cargando...</h3>
                    <h4>....</h4>
                </div>
            </div>
        );
    }
}

export default CamCard;