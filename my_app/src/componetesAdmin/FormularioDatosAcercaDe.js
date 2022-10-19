import React, {useContext} from "react";
import { Label, Form, Span, Boton, H2 } from "./StylesCss";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const FormularioDatosAcercaDE = () => {
    const {DatosGaleria} = useContext(ContextoBaseDatos);

    const onSubmit = (e)=> {
        e.preventDefault();
    };

    return (
        <>
             <Form className="p-3 my-2" onSubmit={onSubmit}>
                <h2>Datos de "Acerca De"</h2>
                <div className="row">
                    <div className="col-4">
                        <Label className="form-label">Foto Acerca De</Label>
                        <Span acercaDe className="input-group-text bi bi-pencil-square">
                            <input className="form-control" type="file"/>
                        </Span>
                    </div>
                    <div className="col-4">
                        <Label className="form-label">Título saludo</Label>
                        <input className="form-control" type="text" placeholder="Breve título saludo" />
                    </div>
                    <div className="col-4">
                        <Label className="form-label">Primer Párrafo</Label>
                        <textarea className="form-control" type="text" placeholder="Habla sobre quién eres..." />
                        <Label className="form-label">Segundo Párrafo</Label>
                        <textarea className="form-control" type="text" placeholder="Habla sobre qué ofreces..." />
                    </div>
                </div>
                <Boton className="btn" type="submit">Actualizar</Boton>
             </Form>
        </>
    );
}
 
export default FormularioDatosAcercaDE;