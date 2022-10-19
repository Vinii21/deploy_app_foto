import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import styled from "styled-components";

const Tarjetas = () => {
    
    const {DatosGaleria, setActiveTab} = useContext(ContextoBaseDatos)

    return (       
        <>
        {
        DatosGaleria.map((cuadro)=>{
            return (
                
                <ContenedorTarjeta  key={cuadro.id} style={{background:"url("+cuadro.fondo+")", 
                 backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat"}}>
                    <FondoTarjeta>
                        <ContenedorInfoTarjeta>
                            <h3 >{cuadro.titulo}</h3>
                            <p>
                                {cuadro.texto} 
                            </p>
                            <NavLink 
                                to="/sesiones"
                                className="enlace"
                                onClick={()=>setActiveTab(cuadro.id)}
                            >Detalles</NavLink>
                        </ContenedorInfoTarjeta>
                    </FondoTarjeta> 
                </ContenedorTarjeta>
            )
        })
        }
        </>
    );
}

export const ContenedorTarjeta = styled.div`
    height: 480px;
    width: 310px;
    margin: 10px;
    border-radius: 1%;

    @media screen and (max-width: 500px){
        height: 150px;
        width: 50%;
        margin: 0px;
    }

`;

export const FondoTarjeta = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.529);
    width: 100%;
    height: 100%;
    border-radius: 1%;

    &:hover{
        background-color: rgba(0, 0, 0, 0.429);
    }
`;

export const ContenedorInfoTarjeta = styled.div`
    padding: 30px;
    margin-bottom: 60px;
    font-family: 'Nanum Gothic', sans-serif;
    
    h3{
        font-family: 'Tangerine', sans-serif;
        font-weight: 900;
        font-size: 60px;
        padding-bottom: 5px;
        color: #fff; 
    }

    p{
        font-weight: 400;
        font-size: 15px;
        line-height: 23px;
        padding-bottom: 15px;
        color: #fff;
        height: 153px; 
    }

    .enlace{
        border: 2px solid #fff;
        padding: 10px;
        color: #fff;
        text-decoration: none;
        font-weight: bold;
        background: rgba(0,0,0,0.4);
    }

    .enlace:hover{
        background: rgba(0,0,0,0.6); 
    }

    @media screen and (max-width: 500px) {
        padding-left: 20px;
        margin-bottom: 10px;

        h3{
            font-size: 35px; 
        }

        p{
            display: none;
        }
        .enlace{
            font-size: 12px;
            padding: 8px;
        }
    }
`;
 
export default Tarjetas;