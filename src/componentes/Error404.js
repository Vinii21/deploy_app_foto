import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import ghost from "../assets/gifts/Ghost.gif"
import {Fuentes} from "../CCS";

const Error404 = () => {
    
    return (
        <>
            <ContenedorError404>
                <div>
                    <h1>ERROR 404...<br/><small>No podemos encontrar lo que buscas.</small> </h1>
                    <hr/>
                    <span>Intestaste acceder a <strong>{useLocation().pathname}</strong>, pero no existe.</span>
                    <img src={ghost} alt="Fantasma Perdido"/>
                    <NavLink to="/" className="btn-home" >Volver al Home</NavLink>
                </div>
            </ContenedorError404>
        </>
    );
}

const ContenedorError404 = styled.div`
    height: 100vh;
    width: 100wh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: ${Fuentes.NamunGothic};
    background-color: rgba(0,0,0,0.6);

    div{
        width: 50%;
        border: 3px solid #3f3f3f;
        border-radius: 20px;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #ffffff;
        h1{
            text-align: center;
            small{
                font-size: 18px;
            }
        }
    
        img{
            width: 80px;
        }
        .btn-home{
            text-decoration: none;
            color: #3f3f3f;
            font-weight: bold;
            border: 1px solid #3f3f3f;
            padding: 10px;
            &:hover{
                text-decoration: underline;
            }
        }
    }
    @media screen and (max-width: 830px){
        div{
            width: 70%;
            padding: 30px;
        }
    }

    @media screen and (max-width: 500px){
        div{
            padding: 20px;
            h1{
                small{
                    font-size: 15px;
                }
            }
            img{
                width: 60px;
            }
        }
    }

`
 
export default Error404;