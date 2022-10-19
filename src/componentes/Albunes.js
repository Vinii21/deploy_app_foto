import React, {useContext} from "react";
import styled from 'styled-components';
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const Albunes = () => {

    const {DatosGaleria, activeTab} = useContext(ContextoBaseDatos);

    return (
        <>
                {
                   DatosGaleria[activeTab - 1 ].albun.map((foto)=>{
                        return(
                            <div className="row d-flex flex-row flex-wrap">
                                <div className="col-4">
                                    <ContenedorImagen style={{background: "url("+foto.img+")", 
                                    backgroundSize: "cover", 
                                    backgroundPosition: "center", 
                                    backgroundRepeat: "no-repeat"}}> 
                                    </ContenedorImagen>
                                </div>
                            </div>
                                
                        )
                    })
                }
        </>
    );
}

const ContenedorImagen = styled.div`
    height: 250px;
    width: 400px;
    margin: 0px;
    filter: sepia(90%);
    transition: 1s ease all;

    &:hover{
        filter: sepia(0%); 
    }

    @media screen and (max-width: 780px) {
        filter: sepia(0%);
        height: 230px;
        width: 230px;
    }

    @media screen and (max-width: 500px) {
        width: 320px;
    }

`;

 
export default Albunes;