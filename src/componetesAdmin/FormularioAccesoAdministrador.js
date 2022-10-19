import React from "react";
import { useState } from "react";
import styled from 'styled-components';
import { Fuentes, Colores } from "../CCS";
import { NavLink } from "react-router-dom";

const FormularioAccesoAdministrador = (props) => {
    const [ usuario, cambiarInputUsuario ] = useState('');
    const [ password, cambiarInputPassword ] = useState('');

    const onChange = (e) => {
        if(e.target.name === 'usuario'){
            cambiarInputUsuario(e.target.value);
        }
        if(e.target.name === 'password'){
            cambiarInputPassword(e.target.value);
        }
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(usuario === 'Vini' && password === '1234'){
            props.cambiarSession(true)
        } else if(usuario === '' && password === ''){
            alert('Ingresa los datos necesarios para iniciar el administrador.')
        } else {
            alert('Ups, cometiste algún error')
            cambiarInputUsuario('');
            cambiarInputPassword('');
        }
    }

    return (
        <>
            <ContenedorFormulario className="container-fluid">
            <div className="row">
                <div className="col">
                    <Formulario className="d-flex flex-column" onSubmit={onSubmit}>
                        <h2>Ingresa los datos para acceder</h2>
                        <input
                            className="input"
                            id="usuario" 
                            type="text"
                            name="usuario"
                            placeholder="Escribe tu usuario" 
                            value={ usuario }
                            onChange={onChange}
                            />
                        <input
                            className="input"
                            id="password"
                            type="password" 
                            name="password"
                            placeholder="Escribe tu contraseña"
                            value={ password }
                            onChange={onChange}
                            />
                        <button className="btn btn-primary" type="submit">Iniciar Sesión</button>
                    </Formulario>
                    <NavLink style={{background: "#fff"}} to="/" className="btn btn-secundary" >Volver al Home</NavLink>
                </div>
            </div>
        </ContenedorFormulario>
        </>
    );
}

const ContenedorFormulario = styled.div`
    width: 100%;
    height:100vh;
    display: flex;
    justify-content: center;
    align-items:center;
    background-color: ${Colores.DarkCool};
    clip-path: polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%);
`;

const Formulario = styled.form`
    width: 400px;
    height: 400px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #154c79;
    color:  #e5effb;
    cursor: default;
    border-radius: 24px;
    clip-path: polygon(0 0, 100% 0%, 100% 60%, 50% 100%, 0 60%);

    h2{
        border-bottom: 1px solid #777;
        padding-bottom: 10px;
        margin-bottom: 25px;
        font-family: 'Nanum Gothic', sans-serif;
        font-weight: bold; 
        font-size: 24px;
    }

    input{
        color:  #e5effb;
        width: 75%;
        padding-top: 10px;
        border: none;
        font-size: 17px;
        font-family: 'Namun Gothic', sans-serif;
        margin-bottom: 30px;
        border-bottom: 2px solid #fff;
        outline: none;
        background-color: transparent;
    }

    .input:focus{
        color: #1f212d;
        border-bottom: 2px solid #1f212d; 
    }

    .btn{
        font-size: 16px;
        font-weight: 700;
        font-family: ${Fuentes.NamunGothic};
        color:  #e5effb;
        border: 2px solid  #e5effb;
        padding: 10px;
        width: auto;
        margin-bottom: 15px;
        background:  #314d8b;
    }

    .btn:hover{
        background:  #12285a;
    }
`;
 
export default FormularioAccesoAdministrador;