import React from "react";
import styled from "styled-components";
import { Fuentes, Colores } from "../CCS";

const FormularioAlbun = () => {

    const file = document.getElementById('file');
    const preLoad = document.querySelector('.preload');
    const formData = new FormData();
    
    const changeFile = (e) => {
        const createCloseButton = (miniatura_id) => {
            let closeBottom = document.createElement('div');
            closeBottom.classList.add('close-button');
            closeBottom.innerHTML= 'x';
            document.getElementsByClassName(miniatura_id)[0].appendChild(closeBottom);
        }

        const createMiniatura = (file, iteradtor, miniatura_id) => {
            let miniatura = document.createElement('div'); //crea el elemento div
            miniatura.classList.add('miniatura', miniatura_id); //asigna la clase
            miniatura.dataset.id = miniatura_id; //Necesario para luego recoger ese id de este atributo, para pasarlo al for data 
            miniatura.setAttribute('style', `background-image: url(${ URL.createObjectURL( file.files[iteradtor] ) })`);
            document.getElementById('preview-img').appendChild(miniatura);
            createCloseButton(miniatura_id);
        }
    
        for (var i = 0; i < file.files.length; i++) {
            let miniatura_id = Math.floor(Math.random() * 500000) + '_' + Date.now();
            createMiniatura(file, i, miniatura_id);
            formData.append(miniatura_id, file.files[i]);
        };

        /* e.target.value = ''; */
    };

    //Boton de publicar
    const publicar = (e) => {
        e.preventDefault();
        if (file.files.length === 0) {
            alert("No has seleccionado ninguna imagen")
        } else {
            limpiarFormDataYMiniatura();
            const nuevasImg = file.files;
            console.log(nuevasImg[0]);          
        }
        /* alert("Estamos trabajando en subirlo a la Base de datos"); */
        
    };

    const limpiarFormDataYMiniatura  = () => {
        for (var key of formData.keys()) {
            formData.delete(key);
        };

        document.querySelectorAll('.miniatura').forEach((miniatura) => {
            miniatura.remove();
        })
    }

    //Evento click para quitar cada imagen se se sube
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('close-button')) {
            e.target.parentNode.remove();
            formData.delete(e.target.parentNode.dataset.id);
        }
    });

    return (
        <>
            <ContenedorAlbum id="wrapper">
                <h2>Sección Album</h2>
                <h3>Subir imagenes</h3>
                <div className="conteinerInput" id="conteinerInput">
                    <div className="wrap-file">
                        <form onSubmit={(e)=>publicar(e)} className="contenedor-iconCamera">
                            <input onChange={(e)=>changeFile(e)} type="file" id="file" name="file[]" multiple />
                            <span className="bi bi-camera-fill"><small>Presiona la camara para subir nuevas imagenes</small></span>
                            <hr/>
                            <div className="preview-img" id="preview-img">
                            
                            </div>
                            <button type="submit" className="btn-publicar" id="publicar">Publicar</button>
                        </form>
                    </div>
                    <div className="preLoad">
                        <img src={preLoad} alt="preLoad" />
                        <h4 id="succes"></h4>
                    </div>
                </div>
            </ContenedorAlbum>
        </>
    );
};

const ContenedorAlbum = styled.div`
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    margin-bottom: 50px;
    margin-top: 50px;
    padding-bottom: 25px;
    h2{
        font-family: ${Fuentes.NamunGothic};
        padding: 10px; 
    }
    h3, h4{
        padding: 10px 0px;
        text-align: center;
        font-family: ${Fuentes.NamunGothic};
    }
    h4{
        color: ${Colores.greenWin};
    }
    .preLoad{
        padding-top: 20px;
        text-align: center;
        display: none;  
    }
    .activatePreload{
        display: block;
    }
    .conteinerInput{
        width: 640px;
        margin: 0 auto;
        border: solid 1px #ccc;
        position: relative;
        overflow: hidden;
        .btn-publicar{
            padding: 15px 35px;
            font-size: 1.1em;
            float: right;
            border: none;
            cursor: pointer;
            background-color: #8ECA67;
            color: ${Colores.white};
            &:hover{
                background-color: #CEAD45;
            }
    }
    .contenedor-iconCamera{
        width: 100%;
        overflow: hidden;
        &:hover{
            background-color: #e6e6e6;
        }
        input{
          padding: 5px 15px;
          opacity: 0;
          position: relative;
          left: -13px;
          z-index: 100;
          cursor: pointer;
          width: 60px;
        }
        span{
            font-size: 36px;
            position: absolute;
            left: 10px;
            z-index: 50;
            small{
                font-size: 18px;
                padding-left: 10px;
            }
        }
        .miniatura{
            width: 120px;
            height: 120px;
            display: inline-block;
            vertical-align: middle;
            border: solid 2px #ccc;
            background-size: cover;
            position: relative;
        }
        .miniatura:not(:last-child) {
            margin-rigth: 5px;
        }
        .close-button{
            width: 25px;
            height: 25px;
            background-color: ${Colores.DarkCool};
            color: ${Colores.white};
            text-align: center;
            position: absolute;
            top: 5px;
            left: 6px;
            border-radius: 100px;
            cursor: pointer;
        }
        }
    }
`
 
export default FormularioAlbun;