import React, {useState} from "react";
import { viaContacto } from "../assets/media_fichero";
import styled from "styled-components";
import FormularioEditarContacto from "./FormularioEditarContacto";
import MapView from "./MapView";

const EditarContacto = () => {
    const [editar, mostrarEditar] = useState(false)

    return (
        <>
        <ContenedorEditarContacto>
            {
                editar === false ?
                <>
                <div className="row">
                    <h3>Datos de Contacto</h3>
                    <div className="infoActual col-6">
                        <p> <hr/>
                            <strong>Instagram:</strong> {viaContacto.instagram} <br/> <hr/>
                            <strong>Facebook:</strong> {viaContacto.facebook} <br/> <hr/>
                            <strong>Youtube:</strong> {viaContacto.youtube} <br/> <hr/>
                            <span>Si desea agregar una nueva red social, comuniquese con el desarrollador.</span>
                        </p>
                    </div>
                    <div className="col-6">
                        <p> <hr/>
                            <strong>Teléfono:</strong> {viaContacto.telefono} <br/> <hr/>
                            <strong>WhatsApp:</strong> {viaContacto.whatsapp} <br/> <hr/>
                            <strong>Correo:</strong> {viaContacto.correo} <br/> <hr/>
                            <strong>Dirección:</strong> {viaContacto.direccion} <br/> <hr/>
                        </p>
                    </div>
                    <div className="mt-3" style={{width: "400px", height: "200px"}}>
                        <MapView/>
                    </div>
                </div>
                <div className="row">
                    <div className="col d-flex justify-content-center mt-5">
                        <button className="btn btn-primary" onClick={()=>mostrarEditar(true)}>Editar</button>
                    </div>
                </div>
                </>
                :
                <FormularioEditarContacto />
            }
        </ContenedorEditarContacto>
        </>
    );
}

const ContenedorEditarContacto = styled.div`
    border-top: 1px solid #ccc;
    padding-top: 10px;
    margin-top: 50px;
    margin-bottom: 100px;
    width: 100%;
    height: auto;

    .infoActual{
        width: 50%;
        height: 100%;
        border-right: 1px solid #ccc;
    }

    button{
        width: 150px;
        margin: 0 auto;
        padding: 5px;
        font-weight: bold;
    }
`
 
export default EditarContacto;