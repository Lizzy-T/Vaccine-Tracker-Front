import React, { Component } from 'react'
import tableau from 'tableau-api'

import '../stylesheets/components/Map.scss'

export default class Map extends Component {
    
    componentDidMount () {
        this.initTableau()
    }

    initTableau () {
        const vizUrl =
            "https://10ay.online.tableau.com/t/elizabethtongporfolio/views/DiseaseVaccineWorld/WorldwideDiseaseCases?:showAppBanner=false&:display_count=n&:showVizHome=n&:origin=viz_share_link";
 
        const options = {
            hideTabs: true,
            width: "100%",
            height: "1200px"
        };

        new window.tableau.Viz(this.container, vizUrl, options);
    }

    render () {
        return (
            <div className="map">
                <div className='map-heading'>
                </div>
                <div ref={ (div) => { this.container = div}} ></div>
            </div>
        )
    }
}
