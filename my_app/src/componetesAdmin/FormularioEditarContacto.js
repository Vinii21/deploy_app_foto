import React, { useEffect, useState, useContext } from "react";
import { viaContacto } from "../assets/media_fichero";
import MapView from "./MapView";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import { Link, useLocation } from "react-router-dom";


const FormularioEditarContacto = () => {

    const {stateCoor, setStateCoor} = useContext(ContextoBaseDatos);

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            setStateCoor({
                longitud: position.coords.longitude,
                latitud: position.coords.latitude
            });
            console.log(stateCoor.longitud)
        }, (error)=>{
            console.log(error)
        },
        {
            enableHighAccuracy: true
        })
    }, [])

    const onSubmit = (e) => {
        e.preventDefault();
        setStateCoor({
            latitud: stateCoor.latitud,
            longitud: stateCoor.longitud
        })
        console.log(stateCoor.latitud, stateCoor.longitud)
    }

    return (
        <>
        <form>
            <div className="row">
            <h3>Datos de Contacto</h3>
                <div className="col-6">
                    <label className="form-label">Instagram:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú instagram" value={viaContacto.instagram}/>
                    <label className="form-label">Facebook:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú facebook" value={viaContacto.facebook}/>
                    <label className="form-label">YouTube:</label>
                    <input className="form-control" type="text" placeholder="Pega la URL de tú canal de YouTube" value={viaContacto.youtube}/>
                    <span>Si desea agregar una nueva red social, comuniquese con el desarrollador.</span>
                </div>
                <div className="col-6">
                    <label className="form-label">Teléfono</label>
                    <input type="tel" className="form-control" placeholder={viaContacto.telefono}/>
                    <label className="form-label">WhatsApp</label>
                    <input type="tel" className="form-control" placeholder={viaContacto.whatsapp}/>
                    <label className="form-label">Correo</label>
                    <input type="email" className="form-control" placeholder={viaContacto.correo}/>
                    <label className="form-label">Dirección</label>
                    <input type="text" className="form-control" placeholder={viaContacto.direccion}/>
                </div>
            </div>
            <button style={{width: "250px"}} className="btn btn-primary">Actualizar datos de contacto</button>
        </form>
        <hr/>
            <div className="row">
                <div className="col-6">
                    <h4>Modificar coordenadas de Mapa</h4>
                    <p>
                        <small>
                           Al permitir el acceso a tú ubicación, obtienes las coordenadas que despúes podras establecer en tú mapa de contacto 
                        </small>
                    </p>
                    <form onSubmit={onSubmit}>
                        <label className="form-label" htmlFor="lat">Latitud:</label>
                        <input id="lat" value={stateCoor.latitud} className="form-control mb-3" type="text" placeholder="Latitud" />
                        <label className="form-label" htmlFor="lon">Longitud:</label>
                        <input id="lon" value={stateCoor.longitud} className="form-control mb-3" type="text" placeholder="Longitud" />
                        <Link
                            to={{
                                pathname: "/",
                                stateCoor
                            }}
                        ><button style={{width: "200px"}} type="submit" className="btn btn-primary">Establecer posición</button></Link>
                    </form>
                </div>
                <div id="mapa" style={{border: "2px solid #ccc", position: "relative", left: "-10px"}} className="col-6">
                    <MapView />
                </div>
            </div>
        </>

    );
}
 
export default FormularioEditarContacto;