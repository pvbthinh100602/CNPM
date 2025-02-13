import React, { useState } from 'react';
import {MapContainer, TileLayer, Map, useMap, Marker, Popup} from 'react-leaflet'
import L from 'leaflet'
import { useRef } from 'react';
import './styles.css';

const markerIcon = new L.Icon({
    iconUrl: require("./picture/Icon-meo-cute.jpg"),
    iconSize: [35,45],
    iconAnchor: [17,46],
    popupAnchor: [0,-46],
})

export default function OSmap(props) {

    let mapRef = useRef();
    //let data = props.dataFromParent;
    let data = [10.881529668657526, 106.80513787775315];
    const position = [parseFloat(data[0]), parseFloat(data[1])];

    return (
        <MapContainer ref = {mapRef} center={position} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position = {position} icon = {markerIcon} center = {true}>
                <Popup> 
                    <b>Hello I'm here</b>
                </Popup>
            </Marker>
        </MapContainer>
    )
}