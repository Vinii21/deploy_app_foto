import React, {useContext} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import Markers from "./Markers";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const MapView = () => {

    const {stateCoor, setStateCoor} = useContext(ContextoBaseDatos);

    const position = [51.505, -0.09]
    const sarchi = [10.0907857,-84.3452533]
    const prueba = [stateCoor.latitud, stateCoor.longitud]

    return (
        <>
        <MapContainer center={prueba} zoom={15} id='map'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers />
        </MapContainer>
        </>
    );
}
 
export default MapView;