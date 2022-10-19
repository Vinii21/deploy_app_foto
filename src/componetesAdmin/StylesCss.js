import styled, {css} from "styled-components";
import { HomePage, AcercaDe } from "../assets/media_fichero";

const Form = styled.form`
    border: 1px solid #aaa;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;

    ${props => props.margin && css`
        margin: 5px;
    `

    }

    &:hover{
        background: rgba(75,83,88,0.1);
    }

    h2{
        border-bottom: 1px solid #aaa;
    }
`

const FormEditar = styled.form`
    border: 2px solid #777;
    padding: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 390px;
    height: 200px;

    span{
        font-size: 100px;
        color: rgba(59, 59, 59, 0.5);

        &:hover{
            color: rgba(59, 59, 59, 0.9);
            cursor: pointer;
        }
    }

    p{
        text-align: center;
        font-size: 15px;
    }
`

const H2 = styled.h2`
        border-bottom: 1px solid #aaa;
`

const Label = styled.label`
    font-size: 20px;
`

const Span = styled.span`
    background: url(${HomePage.background});
    background-position: center;
    background-size: cover;
    background-repeat- no-repeat;
    height: 100px;
    color: #fff;
    font-size: 25px;

    &:hover{
        color: #000;
    }

    ${props => props.nuevo && css`
    background: #87B6A7;
    `}

    ${props => props.logo && css`
        background: url(${HomePage.logos});
        background-position: center;
        background-size: cover;
        background-repeat- no-repeat;
    `}

    ${props => props.acercaDe && css`
        background: url(${AcercaDe.logos});
        background-position: center;
        background-size: cover;
        background-repeat- no-repeat;
    `}

    input{
        background: rgba(259,259,259,0.4);
        margin-left: 5px;

        &:hover{
            background: rgba(259,259,259,0.6);
        }
    }
`

const Boton = styled.button`
    margin-top: 10px;
    background: #104547;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5);
    border: none;
    transition: 1s ease all;
    color: #fff;

    &:hover{
        color: #000;
        border: none;
        background: #73AB84;
        box-shadow: 0 0px 7px 0 rgba(0,0,0,0.5);
    }

`
const BotonDel = styled.button`
    color: #fff;
    margin-top: 10px;
    background: #d30;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.5);
    border: none;
    transition: 1s ease all;

    &:hover{
        color: #fff;
        border: none;
        background: #000;
        box-shadow: 0 0px 7px 0 rgba(0,0,0,0.5);
    }

`

export {Label, Form, Span, Boton, H2, BotonDel, FormEditar}