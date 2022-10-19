import React, { useState } from "react";
import { HomePage } from "../assets/media_fichero";
import { Label, Form, Span, Boton } from "./StylesCss";

const FormularioDatosHeader = () => {

    const [nombreH1, cambiarNombreH1 ] = useState(HomePage.Nombre);
    const [textoPrincipal, cambiarTextoPrinciapl ] = useState(HomePage.Text);

    const onSubmit = (e) => {
        e.preventDefault();

        HomePage.Nombre = nombreH1;
        console.log(HomePage.Nombre = nombreH1)
    }

    const onChange = (e) => {
        cambiarNombreH1(e.target.value);
    }

    return ( 
        <>
            <Form onSubmit={onSubmit}>
                <h2>Datos Header</h2>
                <div className="row">
                    <div className="col-4">
                            <Label className="form-label" htmlFor="fondo">Fondo de header</Label>
                            <Span className="input-group-text bi bi-pencil-square">
                                <input id="fondo" className="form-control" accept="image/png,image/jpeg" type="file"/>
                            </Span>
                    </div>
                    <div className="col-4">
                            <Label className="form-label">Logo</Label>
                            <Span logo className="input-group-text bi bi-pencil-square">
                                <input className="form-control" type="file" />
                            </Span> 
                    </div>
                    <div className="col-4">
                            <Label className="form-label">Nombre y texto principal</Label>
                            <input value={nombreH1} className="form-control mb-2" placeholder="Nombre de empresa"/>
                            <input value={textoPrincipal} className="form-control" placeholder="Texto principal"/>
                    </div>
                </div>
                <Boton type="submit" className="btn">Actualizar</Boton>
            </Form>
        </>
    );
}

export default FormularioDatosHeader;