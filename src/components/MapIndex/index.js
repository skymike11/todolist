import L from "leaflet";
import React, { useEffect, useState } from "react";
import "./index.css";

export default function MapIndex(props) {
  const [markerArr, setMarkerArr] = useState([]);
  const [portData, setPortData] = useState(props.portData);

  useEffect(() => {
    console.log("componentDidMount()");
    if (document.querySelector("#map").children.length > 0) return;
    var mymap = L.map("map").setView([28.912, 119.811], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 13,
    }).addTo(mymap);
    addMarkPoint(portData, mymap);
  });

  function addMarkPoint(portData, map) {
    let markers = markerArr;
    const { onSelect } = props;
    for (let l of portData) {
      let maker = L.marker([l.lat, l.lng]).addTo(map);
      let cargos = l.cargos;
      let displayInfo = l.portCode + "<br>";
      cargos.forEach((value, index) => {
        displayInfo += value.type + "/" + value.surplus + "<br>";
      });

      maker
        .bindPopup(displayInfo, {
          autoClose: false,
          closeOnClick: false,
        })
        .openPopup();
      maker.on("click", function (e) {
        onSelect(l.portCode);
        this.openPopup();
      });
      markers.push(maker);
      setMarkerArr(markers);
    }
  }

  return <div id="map"></div>;
}
