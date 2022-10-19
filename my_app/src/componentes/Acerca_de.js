import React, {useRef, useContext} from "react";
import { AcercaDe } from "../assets/media_fichero";
import {motion, useTransform, useScroll} from "framer-motion";
import styled from "styled-components";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

function Acerca_De() {

    const{todos} = useContext(ContextoBaseDatos);
    
    function useParallax(value, distance) {
        return useTransform(value, [0, 1], [-distance, distance]);
    }
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({target: ref})
    const windowwidth = window.innerWidth;
    const y = useParallax(scrollYProgress, 300);

    return (
       <ContenedorAcercaDe id="sobre" ref={ref}>
            <ContenedorImg >
                <img src={AcercaDe.logos} alt={AcercaDe.altLogo} width='100'/>
            </ContenedorImg>
            {
                windowwidth > 900 ?
                <ContenedorInfo style={{y}}>
                    <h2>{AcercaDe.Nombre}</h2>
                    <p>{AcercaDe.Text1}</p>
                    <p>{AcercaDe.Text2}</p>
                </ContenedorInfo>
                :
                <ContenedorInfo>
                <h2>{AcercaDe.Nombre}</h2>
                <p>{AcercaDe.Text1}</p>
                <p>{AcercaDe.Text2}</p>
                </ContenedorInfo>
            }
       </ContenedorAcercaDe> 
    );
}

const ContenedorAcercaDe = styled.div`
    overflow: visible;
    position: relative;  
`;

const ContenedorImg = styled(motion.div)`
    width: 50%;
    position: absolute;
    left: 200px;
    top: 30px;
    z-index: 0;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.421);

    img{
        vertical-align: top;
        width: 100%;   
    }

    @media screen and (max-width: 830px){
        width: 50%;
        position: absolute;
        left: 200px;
        top: -50px;
        z-index: 0;
        box-shadow: 0 0 15px rgba(0, 0, 0, 0.421);
    }
    
    @media screen and (max-width: 500px) {
        width: 70%;
        left: 15.5%;
        top: -30px;
    }

`;

const ContenedorInfo = styled(motion.div)`
    background-color: #fff;
    padding: 30px;
    width: 30%;
    height: auto;
    position: relative;
    top: 360px;
    right: 260px;
    float: right;
    z-index: 1;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.231);
    font-size: 14px;

    h2{
        font-weight: bold;
        font-size: 20px;
    }

    @media screen and (max-width: 830px){
        width: 100%;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 180px;
    }
`;
 
export default Acerca_De;