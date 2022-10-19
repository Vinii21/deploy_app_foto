import React, {useState} from "react";
import { Form, FormEditar, Label, Span, Boton } from "./StylesCss";
import { Modal, ModalBody } from "reactstrap";
import styled from "styled-components";


const FormularioNuevaCategoria = () => {
    const [modal, mostrarModal] = useState(false);
    const [modalSesion, mostrarModalSesion] = useState(false);
    const [ nuevoTitulo, cambiarNuevoTitulo ] = useState('');
    const [ nuevaDescripcion, cambiarNuevaDescripcion ] = useState('');
    const [enlace, mostrarEnlace] = useState(false);

    const panelModal = () => {
        mostrarModal(true);
    };

    const closeNuevaCategoria = () => {
       if(nuevoTitulo != '' || nuevaDescripcion  != ''){
            cambiarNuevoTitulo('');
            cambiarNuevaDescripcion('');
       }
       mostrarModal(false);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(nuevoTitulo === '' || nuevaDescripcion === ''){
            alert("Tiene algun campo vacio");
        }
        if(nuevoTitulo && nuevaDescripcion != ''){
            mostrarModalSesion(true)
        }
    };

    const onChange = (e) => {
        if(e.target.name === "nuevoTitulo"){
            cambiarNuevoTitulo(e.target.value);
        }
        if(e.target.name === "nuevaDescripcion"){
            cambiarNuevaDescripcion(e.target.value);
        }

    };

    const enlaces = () => {
        mostrarEnlace(true);
        if(enlace === true){
            
        } else {
            alert('Lo siento')
        }
    }

    return (
        <>
            <FormEditar className="col-4">
                <span onClick={panelModal} className="bi bi-plus-circle">
                </span>
                <p>Click para crear una <br/>nueva categoria de sesión</p>
            </FormEditar>

            <Modal name="nuevaCategoria" size="ie" centered isOpen={modal} toggle={closeNuevaCategoria}>
                <ModalBody className="d-flex justify-content-center">
                    <Form onSubmit={onSubmit} className="col-9 mx-2">
                        <Span nuevo className="input-group-text bi bi-pencil-square">
                            <input className="form-control" type="file" required/>
                        </Span>
                        <Label htmlFor="title" className="form-label">Titulo Nueva Categria</Label>
                        <input
                            name="nuevoTitulo"
                            type="text"
                            className="form-control"
                            value={nuevoTitulo}
                            onChange={onChange}    
                        />
                        <Label htmlFor="description" className="form-label">Describe la categoria</Label>
                        <textarea
                            name="nuevaDescripcion"
                            style={{height: "140px", resize:"none"}} 
                            maxlength="240" type="text" 
                            className="form-control"
                            value={nuevaDescripcion}
                            onChange={onChange}
                        />
                        <Boton btn className="btn mx-4" >Continuar</Boton>
                    </Form>
                </ModalBody>
            </Modal>

            <Modal name="modalSesion" size="lg" centered isOpen={modalSesion} toggle={()=> mostrarModalSesion(false)}>
                <ModalBody>
                    <Div className="row">
                        <div className="col-6 borde">
                            <button className="btn btn-primary" onClick={enlaces}>Prueba</button>
                        </div>
                        <div className="col-6">

                        </div>
                    </Div>
                </ModalBody>
            </Modal>


        </>
    );
}

const Div = styled.div`
    height: 400px;
    widht: 100%;
    border: 1px solid red;

    .borde{
        border-right: 1px solid red;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`
 
export default FormularioNuevaCategoria;