import React, {useContext} from "react";
import BotonNuevaCaracteristica from "./BotonNuevaCaracteristica";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import {Form, Label, Boton, BotonDel} from './StylesCss';

const FormularioEditarCaracteristicas = () => {
    const {DatosGaleria, activeEdit, funcionActiveEdit } = useContext(ContextoBaseDatos);

    return (
        <>
        <div className="row">
            <div className="col">
                <select>
                    {
                        DatosGaleria.map((item)=>{
                            return(
                                <option onClick={()=>funcionActiveEdit(item.id)} value={item.titulo}>{item.titulo}</option>
                            );
                        })
                    }
                </select>
            </div>
        </div>
        
        <div className="row">
                {
                    DatosGaleria[activeEdit - 1].id == activeEdit ?
                        DatosGaleria[activeEdit - 1].items.map((item)=>{
                            return(
                                <>
                                    <Form className="col-4 mx-2">
                                        <Label className="form-label">Titulo Sesión</Label>
                                        <input className="form-control" placeholder={'Titulo actual: ' + item.titulo}/>
                                        <ul>
                                            {item.servicios.map( item=><li><input className="form-control" placeholder={item}/></li>)}
                                        </ul>
                                        <input  className="form-control" placeholder={item.precio}/>
                                        <Boton className="btn">Actualizar</Boton>
                                        <BotonDel className="btn mx-2">Eliminar</BotonDel>
                                    </Form>
                                </>
                            )
                        })
                    :
                    <>Hola</>
                }
                <BotonNuevaCaracteristica />
        </div>
        </>
    );
}
 
export default FormularioEditarCaracteristicas;