import React, { Component, Fragment } from 'react';

class CamCard extends Component {
    state = {  }
    render() { 
        const { title } = this.props.project;
        return ( 
            <Fragment>
                <div className="contcam">
                    <h3 dangerouslySetInnerHTML={{ __html: title.rendered }}></h3>
                </div>
            </Fragment>
         );
    }
}

export default CamCard;