import L from 'leaflet';
import icono from '../assets/icon/venue_location_icon.svg'

export const iconLocation = L.icon({
    iconUrl: icono,
    iconRetinaUrl: icono,
    iconAnchor:null,
    shadowUrl:null,
    shadowSize:null,
    shadowAnchor:null,
    iconSize: [65, 55],
    className: "leadflet-venue-icon"
});