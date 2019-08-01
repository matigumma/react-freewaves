import React, { Component } from 'react';
import axios from 'axios';

class CamCard extends Component {
    state = { 
        featuredImage: '',
        isLoaded: false
     }

    componentDidMount(e) {
        //here will load images for cards
        let arrayPublis = [];
        const { _thumbnail_id } = this.props.project;
        const CamCardObj = this;
        let atempt = 0;
        function getFeatured(){
            console.log(CamCardObj);
            axios.get(`http://freewaves.live/wp-json/wp/v2/media/${_thumbnail_id}`)
            .then(res => CamCardObj.setState({
                featuredImage: res.data.source_url,
                isLoaded: true
            }))
            .catch(err => { 
                console.log(err) ;
                if(atempt<3){
                    console.log("getFeatured new atempt", atempt);
                    atempt=atempt+1;
                    getFeatured();
                }else{
                    console.log("max atempt reacherd");
                }
            });            
        };
        getFeatured();
    }

    render() { 
        const { title } = this.props.project;
        const { categories } = this.props.project;
        const { featuredImage, isLoaded } = this.state;
        if (isLoaded) {
            let className = 'contcam';
            if (categories[0] === 17) {
                className += ' active';
            }
            return ( 
                <div className={className}>
                    <div className="imgcam">
                        <img src={featuredImage} alt={this.props.project.slug} />
                    </div>
                    <div className="infocam">
                        <h3 dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>
                        <h4 dangerouslySetInnerHTML={{ __html: title.rendered }}></h4>
                    </div>
                </div>
            );
        }
        return (
            //will show a loading card while its rendering
            <div className="contcam">
                <div className="imgcam">
                    <div className="animate photo"></div>
                </div>
                <div className="infocam">
                    <div className="animate lines"></div>
                    <div className="animate lines"></div>
                </div>
            </div>
        )
    }
}

export default CamCard;