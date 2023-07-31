import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../IpMap/IpMap.css';


function IpMap({info}) {
  return (
    <div className='MapContainerClass'>
    <MapContainer center={[info.latitude, info.longitude]} zoom={13} style={{ height: "100vh", width: "100%" }}>
    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[info.latitude, info.longitude]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
</MapContainer> 
  </div>

  )
}

export default IpMap; 
