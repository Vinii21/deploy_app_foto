import React from "react";
import { viaContacto } from "../assets/media_fichero";
import styled from "styled-components";
import MapView from "../componetesAdmin/MapView";


const Contacto = () => {
    return (
        <ContenedorContacto id="contacto">
            <ContenedorRedes>
                <a href={viaContacto.instagram}><span className="bi bi-instagram"></span></a> 
                <a href={viaContacto.facebook}><span className="bi bi-facebook"></span></a>
                <a href={viaContacto.youtube}><span className="bi bi-youtube"></span></a>
            </ContenedorRedes>
            <ContenedorInfoContacto>
                <h2>Cuentanos tu proyecto</h2>
                    <div>
                        <span className="bi bi-whatsapp"></span>
                        <p>
                            <strong>WhatsApp:</strong>
                            <br/>
                            {viaContacto.whatsapp}
                        </p>
                    </div>
                    <div>
                        <span className="bi bi-telephone-fill"></span>
                        <p>
                            <strong>Llamanos:</strong>
                            <br/>
                            {viaContacto.telefono}
                        </p>
                    </div>
                    <div>
                        <span className="bi bi-envelope-fill"></span>
                        <p>
                            <strong>Ponte en contacto:</strong>
                            <br/>
                            {viaContacto.correo}
                        </p>
                    </div>
                    <div>
                        <span className="bi bi-geo-alt-fill"></span>
                        <p>
                            <strong>Dónde estamos:</strong>
                            <br/>
                            {viaContacto.direccion}
                        </p>
                    </div>
            </ContenedorInfoContacto>
            <ContenedorMapa>
                {/* <iframe src={viaContacto.mapa} width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
                <MapView />
            </ContenedorMapa>
        </ContenedorContacto>
    );
}

export const ContenedorContacto = styled.div`
    width: 1000px;
    height: 500px;
    margin: 0 auto;
    margin-top: 100px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 830px){
        width: 80%;
    }

    @media screen and (max-width: 500px){
        widht: 100%;
        height: 300px;
        margin: 0px;
        margin-top: 70px;
        margin-bottom: 100px;
        flex-direction: column;
    }
`;

export const ContenedorRedes = styled.div`
    height: 400px;
    width: 88px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-top: 2px solid rgb(105, 104, 104);
    border-left: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);

    a{
        color: #000;
        font-size: 30px;

        &:hover{
            color: #666;
        }
    }

    span{
        margin-bottom: 20px
    }

    @media screen and (max-width: 830px){
        width: 20%;
    }

    @media screen and (max-width: 500px){
        height: 60px;
        width: 150px;
        flex-direction: row;
        border-right: 2px solid rgb(105, 104, 104);
        position: relative;
        left: 40px;
        padding-bottom: 5px;

        a{
            font-size: 20px;
        }

        span{
            padding: 10px;
        }
    }
`;

export const ContenedorInfoContacto = styled.div`
    width: 50%;
    height: 540px;
    position: relative;
    top: -5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgb(105, 104, 104);

    h2{
        width: 80%;
        margin: 0 auto;
        margin-bottom: 30px;
        font-weight: 900;
        text-align: center;
        font-size: 30px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(50, 50, 60);
        color: rgb(48, 46, 46);
    }

    div{
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10%;
        margin-bottom: 20px;
        width: 65%;
    }

    span{
        font-size: 45px;
        margin-right: 20px;
    }

    @media screen and (max-width: 830px){
        width: 100%;

        h2{
            font-size: 20px;  
        }

        div{
            padding: 0 5%; 
        }

        span{
            font-size: 40px;;
            margin-right: 10px;
        }

        p{
            font-size: 14px;
        }
    }

    @media screen and (max-width: 500px){
        height: 400px;
        width: 100vw;
        margin: 0 auto;

        h2{
            margin-top: 20px;
            padding-bottom: 10px;
        }

        div{
            justify-content: center;
        }
    }
`;

export const ContenedorMapa = styled.div`
    height: 400px;
    width: 600px;
    border-top: 2px solid rgb(105, 104, 104);
    border-right: 2px solid rgb(105, 104, 104);
    border-bottom: 2px solid rgb(105, 104, 104);
    
    @media screen and (max-width: 500px){
        display: none;
    }
`;
 
export default Contacto;