import React, {useContext} from "react";
import { Marker } from "react-leaflet";
import { iconLocation } from "./iconLocation";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";


const Markers = () => {
    const {stateCoor, setStateCoor} = useContext(ContextoBaseDatos);

    const sarchi = [10.0907857,-84.3452533]
    const grecia = [10.0755368,-84.3222142]
    const prueba = [stateCoor.latitud, stateCoor.longitud]
    return (
        <Marker position={prueba} icon={iconLocation}/>
    );
}
 
export default Markers;