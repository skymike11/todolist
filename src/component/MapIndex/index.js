import L from 'leaflet'
import React, {Component} from 'react'
import './index.css'

class MapIndex extends Component {

    constructor(props) {
        super(props);
        this.state = {
            markerArr: [],
            points: [],
            portData: this.props.portData        }
    }

    componentDidMount() {
        var mymap = L.map('map').setView([28.912, 119.811], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 13
        }).addTo(mymap);
        this.addMarkPoint(this.state.portData, mymap)
    }

    addMarkPoint = (portData, map) => {
        let markerArr = this.state.markerArr;
        const {onSelect} = this.props;
        for (let l of portData) {
            let maker = L.marker([l.lat, l.lng]).addTo(map);
            let cargos = l.cargos;
            let displayInfo = l.portCode + "<br>";
            cargos.forEach((value, index) => {
                displayInfo += value.type + "/" + value.surplus + "<br>"
            });

            maker.bindPopup(displayInfo, {
                autoClose: false,
                closeOnClick: false
            }).openPopup();
            maker.on('click', function (e) {
                onSelect(l.portCode);
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