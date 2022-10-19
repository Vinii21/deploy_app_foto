import React from "react";
import Menu from "./Menu";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { HomePage } from "../assets/media_fichero";

const Header = () => {
    return (
    <Headerr>
       <Menu />
       <ContendorHero animate={{y:-130, opacity: 1}} transition={{ duration: 1.3 }}>
            <h1>{HomePage.Text}</h1>
            <span></span>
            <span className="row"></span>
       </ContendorHero> 
    </Headerr>
    );
}

const Headerr = styled.header`
    width: 100%;
    height: 100vh;
    background: url('${HomePage.background}');
    background-repeat: no-repeat;
    background-position: center -120px;
    background-size: cover;
    background-attachment: fixed;

    @media screen and (max-width: 830px){
        height: 650px;
    }

    @media screen and (max-width: 500px){
        height: 500px;
    }
`;

const ContendorHero = styled(motion.div)`
    position: relative;
    top: 130px;
    width: 1000px;
    height: 100vh;
    margin: 0 auto;
    padding-top: 130px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center; 
    opacity: 0;  

    h1{
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: bold;
        font-size: 40px;
        color: #fff;
        border: 1px solid #fff;
        padding: 20px;   
    }
    span{
        background-color: #fff;
        clip-path: polygon(50% 69%, 100% 35%, 100% 65%, 50% 100%, 50% 100%, 0 65%, 1% 35%);
        position: relative;
        top: 100px;
        width: 60px;
        height: 60px;   
    }
    .row{
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 830px){
        top: 100px;
        height: 100px;
        width: 600px;

        h1{
            font-size: 30px;
        }
    }

    @media screen and (max-width: 500px) {
        height: 300px;
        width: 100%;
        justify-content: flex-start;

        h1{
            font-size: 20px;
        }

        span{
            display: none;
        }
    }
`;
 
export default Header;
