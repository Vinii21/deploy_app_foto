import React from "react";
import Tarjetas from "./Tarjetas";
import styled from "styled-components";

const Galeria = ({setActiveTab, DBgaleria, cambiar}) => {

    return (
        <ContenedorGaleria>
            <ContenedorTitulo>
                <h2 id="galeria">Galeria</h2>
            </ContenedorTitulo>
            <Galerias>
                <Tarjetas setActiveTab={setActiveTab} DBgaleria={DBgaleria} cambiar={cambiar}/>
            </Galerias>
        </ContenedorGaleria>
    );
}

const ContenedorGaleria = styled.div`
    padding-top: 570px;

    @media screen and (max-width: 830px){
        padding-top: 400px;
    }

    @media screen and (max-width: 500px){
        padding-top: 450px;
    }
`;

const ContenedorTitulo = styled.div`
    position: relative;
    top: 70px;
    text-align: center;
    margin-bottom: 80px;
    display: flex;
    justify-content: center;
    width: 100vw;

    h2{
        font-size: 80px;
        font-family: 'Tangerine', sans-serif;

        @media screen and (max-width: 830px){
            font-weight: bold;
        }
        
    }
`;

const Galerias = styled.div`
    width: 1000px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;

    @media screen and (max-width: 830px){
        width: 100%;
    }
    
    @media screen and (max-width: 500px){
        justify-content: flex-start;
    }
`;
 
export default Galeria;
