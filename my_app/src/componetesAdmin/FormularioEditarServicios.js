import React, { useContext } from "react";
import { Label, Form, Span, Boton, H2, BotonDel } from "./StylesCss";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";

const FormularioEditarServicios = () => {

    const {DatosGaleria, actualizarNombre} = useContext(ContextoBaseDatos);

    const onSubmit = (e, ide) => {
        e.preventDefault();
        const input = e.target.title.value;
        const textarea = e.target.description.value;
        
        if(input != ''){
            actualizarNombre(input);
            console.log(DatosGaleria[ide - 1].titulo)
            e.target.title.value = ''
        }
    }

    return (
        <>
            <H2>Panel de Edición de Sesiones</H2>
            {
                DatosGaleria.length > 0 ?
                DatosGaleria.map((item, index)=>{
                    return(
                            <Form onSubmit={item.id === index + 1 ? (e)=>onSubmit(e, item.id) : '' } margin key={index} className="col-4">
                                <Span className="input-group-text bi bi-pencil-square" style={{background: "url("+item.fondo+")", backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "noRepeat"}}>
                                    <input className="form-control" type="file"/>
                                </Span>
                                <Label className="form-label">Titulo</Label>
                                <input name="title" maxLength="12" className="form-control" type="text" placeholder={item.titulo}/>
                                <Label className="form-label">Descripción</Label>
                                <textarea name="description" style={{height: "140px", resize:"none"}} maxLength="240" className="form-control" type="text" placeholder={item.texto}/>
                                <Boton type="submit" className="btn">Actualizar</Boton>
                                <BotonDel btn className="btn mx-4" >Eliminar</BotonDel>
                            </Form>
                        
                    );
                })  
                :
                    <Span className="input-group-text">
                        <input disabled className="form-control form-control-lg" value="No hay categorias aún, crea para empezar a editar"/>
                    </Span>
            }
                
        </>
    );
}
 
export default FormularioEditarServicios;