import React from "react";
import { useState } from "react";
import FormularioAccesoAdministrador from './FormularioAccesoAdministrador';
import PaginaAdmin from "../componetesAdmin/PaginaAdmin";

const PanelAdministrador = () => {
    const [session, cambiarSession] = useState(false);

    return (
        <>
            {
                session === true ?
                    <PaginaAdmin />
                :
                    <FormularioAccesoAdministrador cambiarSession={cambiarSession} />
            }
        </>
    );
}
 
export default PanelAdministrador;