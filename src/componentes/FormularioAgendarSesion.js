import React, {useContext, useState} from "react";
import { Fuentes } from "../CCS";
import styled from "styled-components";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const FormularioAgendarSesion = () => {
    const {DatosGaleria, activeTab} = useContext(ContextoBaseDatos)

    const [nombre, cambiarNombre] = useState('');
    const [telefono, cambiarTelefono] = useState('');
    const [correo, cambiarCorreo] = useState('');
    const [fecha, cambiarFecha] = useState(new Date());
    const [visible, cambiarVisibilidadModal ] = useState(false);
    const [stateVisible, cambiarVisibilidadModal2 ] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const Ndia = fecha.charAt(8) + fecha.charAt(9);
        const Nmes = fecha.charAt(5) + fecha.charAt(6) - 1;
        const year = fecha.charAt(0) + fecha.charAt(1) + fecha.charAt(2) + fecha.charAt(3);
        const diaActual = new Date().getDate(); 
        const mesActual = new Date().getMonth();
        const anoActual = new Date().getFullYear();

        if(nombre === '' || telefono === '' || correo === '' || fecha === ''){
            alert('Verifique que Nombre, Teléfono, Correo y Fecha esten llenos')
        } else {
            if(Ndia >= diaActual && Nmes >= mesActual){
                cambiarVisibilidadModal(true);
                cambiarNombre('');
                cambiarCorreo('');
                cambiarTelefono('');
                cambiarFecha('');
            } else if(year > anoActual){
                cambiarVisibilidadModal(true);
                cambiarNombre('');
                cambiarCorreo('');
                cambiarTelefono('');
                cambiarFecha('');
            } else {
                cambiarVisibilidadModal2(true);
            }

        }

    }

    const onChange = (e) => {
        if(e.target.name === 'nombre'){
            cambiarNombre(e.target.value)
        };
        if(e.target.name === 'telefono'){
            cambiarTelefono(e.target.value)
        };
        if(e.target.name === 'correo'){
            cambiarCorreo(e.target.value)
        };
        if(e.target.name === 'fecha'){
            cambiarFecha(e.target.value)
        };
    };

    return (
        <>
        <ContenedorFormulario className="row" id="agendar">
            <div className="col-12">
                <H2>Agendar Sesión</H2>
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={onSubmit}>
                            <div className="row">
                                <div className="col-sm-12 col-md-6">
                                    <label htmlFor="nombre" className="form-label">Nombre completo</label>
                                    <span style={{color:"red", fontSize:"13px", paddingLeft: "3px"}} className="bi bi-asterisk"></span>
                                    <div className="input-group w-100">
                                        <span className="input-group-text bi bi-person-bounding-box"></span>
                                        <input name="nombre" id="nombre" value={nombre} onChange={onChange} type="text" className="form-control" placeholder="Nombre y Apellido"/>
                                    </div>
                                    <label htmlFor="telefono" className="form-label my-2">Teléfono</label><span style={{color:"red", fontSize:"13px", paddingLeft: "3px"}} className="bi bi-asterisk"></span>
                                    <div className="input-group w-100">
                                        <span className="input-group-text bi bi-telephone-plus-fill"></span>
                                        <input name="telefono" id="telefono" value={telefono} onChange={onChange} type="tel" className="form-control" placeholder="Número celular o fijo"/>
                                    </div>
                                    <label htmlFor="correo" className="form-label my-2">Correo eléctronico</label><span style={{color:"red", fontSize:"13px", paddingLeft: "3px"}} className="bi bi-asterisk"></span>
                                    <div className="input-group w-100">
                                        <span className="input-group-text bi bi-envelope-fill"></span>
                                        <input name="correo" id="correo" value={correo} onChange={onChange} type="email" className="form-control" placeholder="Escribe tú E-mail"/>
                                    </div>
                                </div>

                                <div className="col-sm-12 col-md-6">
                                    <label htmlFor="lista" className="form-label">Ocasión</label>
                                    <div className="input-group w-100">
                                        <span className="input-group-text bi bi-list"></span>
                                        <select id="lista" className="form-select">
                                            {
                                                DatosGaleria.map((servicio)=>{
                                                    if(activeTab == servicio.id){
                                                        return(
                                                            <option>{servicio.titulo}</option>
                                                        );
                                                    }
                                                })
                                            }
                                            
                                        </select>
                                    </div>

                                    <label htmlFor="sesion" className="form-label my-2">Sesión escogida</label>
                                    <div className="input-group w-100">
                                        <span className="input-group-text bi bi-camera"></span>
                                        <select id="sesion" className="form-select">
                                            {
                                              DatosGaleria[activeTab - 1].items.map((sesion)=>{
                                                return(
                                                    <option value={sesion.titulo}>{sesion.titulo}</option>
                                                )
                                            })  
                                            }
                                        </select>
                                    </div>

                                    <label htmlFor="fecha" className="form-label my-2">Fecha deseada</label><span style={{color:"red", fontSize:"13px", paddingLeft: "3px"}} className="bi bi-asterisk"></span>
                                    <div className="input-group w-100">
                                        <span style={{fontSize:"24px"}} className="input-group-text bi bi-calendar-month-fill"></span>
                                        <input name="fecha" id="fecha" class="form-control" type="date" value={fecha} onChange={onChange} placeholder={fecha}/>
                                    </div>
                                </div>
                            </div>
                            <Boton style={{marginTop: "20px"}} className="btn btn-primary">Enviar Propuesta</Boton>
                            <p style={{color:"#555", fontSize:"15px", marginTop:"10px"}} className="text-center"><span style={{color:"red", fontSize:"13px"}} className="bi bi-asterisk"></span>Una vez nos envies los datos, nos pondremos en contacto contigo.</p>
                        </form>       
                    </div>
                </div>
            </div>
        </ContenedorFormulario>

        <Modal name="envido" size="ie" centered isOpen={visible} toggle={()=> cambiarVisibilidadModal(false)}>
            <ModalHeader className="justify-content-center">
                ¡Enviado!
            </ModalHeader>
            <ModalBody>
                <strong>¡Todo listo!</strong><br />
                Pronto nos pondremos en contacto contigo para coordinar la sesión.
                <hr />
            </ModalBody>
        </Modal>

        <Modal name="advertencia" size="ie" centered isOpen={stateVisible} toggle={()=> cambiarVisibilidadModal2(false)}>
            <ModalHeader className="justify-content-center">
                ¡Revisa bien la fecha!
            </ModalHeader>
            <ModalBody>
                La fecha seleccionada no está disponible. <br/>
                Escogiste una fecha que ya pasó.
                <hr />
            </ModalBody>
        </Modal>
        </>
    )
};

const ContenedorFormulario = styled.div`
    padding-top: 120px;
`;
const H2 = styled.h2`
    text-align: center;
    font-family: ${Fuentes.Tangerine};
    font-size: 3.5rem;
    font-weight: bold;
`;


const Boton = styled.button`
    position: relative;
    left: 565px;
    margin-top: 10px;

    @media screen and (max-width: 750px){
        left: 165px; 
    }

    @media screen and (max-width: 500px) {
        left: 70px;
    }
`;
 
export default FormularioAgendarSesion;