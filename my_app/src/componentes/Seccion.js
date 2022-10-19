import React, {useContext} from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import '../styles/seccion.css';
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";


const Seccion = () => {

    const {DatosGaleria, activeTab} = useContext(ContextoBaseDatos);

    return (
            <>
            {
                DatosGaleria[activeTab - 1].items.map((item) => 
                {
                    return(
                        <div className="row">
                            <div key={item.item_id} className="col-4">
                                <Card className={"card mx-3 "+item.class}>
                                    <div className="card-body">
                                        <h2>{item.titulo}</h2>
                                            <ul>
                                                {item.servicios.map( item=><li>{item}</li>)}
                                            </ul>
                                        <h5>Precio: {item.precio} <span>+iva</span></h5>
                                        <Link activeClass="active" to="agendar" spy={true} smooth={true}>Agendar</Link>
                                    </div>
                                </Card>
                            </div>
                        </div>
                    )
                })  
            }
            </>
    );
}

const Card = styled.div`
    width: 310px;
    height: 100%;
    max-height: 400px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.5);
    border:none;
    color: #fff;
    margin-bottom: 100px;

    h2{
        border-bottom: 1px solid #000;
        padding-bottom: 5px;
        margin-top: 20px;
    }

    ul{
        margin-top: 20px;
        border-left: 4px solid #fff;
        margin-bottom: 20px;
        padding-left: 20px;
    }

    h5{
        font-weight: bold;
        font-size: 20px;
        text-align: right;

        span{
            font-weight: normal;
            font-size: 15px;
        }
    }

    a{
        text-decoration: none;
        padding: 10px;
        border: none;
        box-shadow: 0 5px 7px 0 rgba(0,0,0,0.5);
        margin-top: 20px;
        font-weight: 600;
        border-radius: 12px;
        background: rgba(220,220,220,0.2)
    }

    a:hover{
        box-shadow: 0 0px 7px 0 rgba(0,0,0,0.5);
    }

    @media screen and (max-width: 1300px){
        width: 310px;
        height: auto;
        padding: 5px;
        margin-bottom: 5px;
    }
`;
 
export default Seccion;