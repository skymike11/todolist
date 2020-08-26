import L from 'leaflet'
import React, {Component} from 'react'
import './index.css'
import {Select} from 'antd';

class MapIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markerArr: [],
            points: [],
            data: [{
                lat: 29.9645,
                lng: 121.7416
            }, {
                lat: 31.222,
                lng: 121.498
            }]
        }
    }

    componentDidMount() {
        var mymap = L.map('map').setView([28.912, 119.811], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 13
        }).addTo(mymap);
        this.addMarkPoint(this.state.data, mymap)
    }

    addMarkPoint = (data, map) => {
        let markerArr = this.state.markerArr;
        const {onSelect} = this.props;
        for (let l of data) {
            let maker = L.marker([l.lat, l.lng]).addTo(map);
            maker.bindPopup("YAT01<br>20GP/120<br>40GP/30<br>45HQ/10", {
                autoClose: false,
                closeOnClick: false
            }).openPopup();
            maker.on('click', function (e) {
                onSelect();
                this.openPopup();
            });
            markerArr.push(maker);
        }
        this.setState({
            markerArr: markerArr
        });
        return markerArr;
    };

    render() {
        return (
            <div id="map"></div>
        )
    }
}

export default MapIndex