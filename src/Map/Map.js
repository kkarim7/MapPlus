import React, { Component } from "react";
import "./Map.css";

import "../../node_modules/leaflet/dist/leaflet.css";
import L from "leaflet";
import { baseMaps } from "./baseMaps/baseMaps";
import { rainView } from "./rainMap/rainviewer";

class Map extends Component {
  state = {
    map: null,
  };

  componentDidMount() {
    console.log("Component Mounted");
    this.setState({ map: this.mapHandler() });
  }

  mapHandler = () => {
    let myMap = L.map("mapid")
      .setMaxBounds([
        [-90, -180],
        [90, 180],
      ])
      .setMinZoom(2);

    // LA .setView([34.052235, -118.243683], 10)

    myMap.locate({ setView: true, maxZoom: 10 });

    baseMaps.Grayscale.addTo(myMap);

    L.control.layers(baseMaps).addTo(myMap);

    console.log(rainView(myMap));

    L.control.rainviewer().addTo(myMap);
  };

  render() {
    return (
      <div id="mapid">
        <div className="mapContainer"></div>
      </div>
    );
  }
}

export default Map;
