import React from "react";
import styled from "styled-components";

const BotonNuevaCaracteristica = () => {
    return (
        <ContenedorNuevaCaracteristica>
            <span className="bi bi-plus-circle"></span>
        </ContenedorNuevaCaracteristica>
    );
}

const ContenedorNuevaCaracteristica = styled.div`
    width: 200px;
    height: 200px;
    border: 1px solid #ccc;
    margin-top: 5px;
    display:flex;
    justify-content: center;
    align-items: center;

    span{
        font-size: 90px;
        cursor: pointer;

        &:hover{
            opacity: .5;
        }
    }
`
 
export default BotonNuevaCaracteristica;