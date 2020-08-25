import L from 'leaflet'
import React  , { Component} from 'react'
import './index.css'
class MapIndex extends Component{
    componentDidMount()
    {
        let mymap = L.map('map').setView([51.505,-0.09],13);
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 15
        }).addTo(mymap);
    }
    render()
    {
        return(
            <div id="map"> </div>
        )
    }
}
export default MapIndex