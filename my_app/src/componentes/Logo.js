import React from "react";
import { HomePage } from "../assets/media_fichero";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Logo = (props) => {
    return (
        <ContenedorLogo>
            <NavLink to="/" className={props.navbarBrand}>
                <img src={HomePage.logos} alt={HomePage.altLogo} width='200'/>
                <span>{HomePage.Nombre}</span>
            </NavLink>
        </ContenedorLogo>
    );
}

const ContenedorLogo = styled.div`
    height: 100%;

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        color: #fff; 
    }
    img{
        width: 150px;
        margin: 40px 0px 0px 50px; 
    }
    span{
        font-family: 'Tangerine', sans-serif;
        font-weight: 600;
        font-size: 4rem;
        padding-top: 40px;  
    }

    .navbar-brand{
        position: relative;
        bottom: 20px;
        width: 200px;
        height: 60px;
        img{
            width: 90px;
        }
        span{
            font-size: 3.5rem;
        }

        @media screen and (max-width: 1300px){
            left: -25px;
            img{
                width: 70px;
            }
            span{
                font-size: 2.8rem;
            }
        }

        @media screen and (max-width: 500px) {
            left: -5px;
            img{
                width: 60px;
            }
            span{
                font-size: 2rem;
            }
        }

    }

    @media screen and (max-width: 830px){
        margin-bottom: 40px;
        z-index: 1;
        position: relative;

        a{
            margin-right: 120px;  
        }
    }

    @media screen and (max-width: 500px) {
        img{
            width: 60px;
        }
        span{
            font-size: 30px;
        }
    }
`;
 
export default Logo;