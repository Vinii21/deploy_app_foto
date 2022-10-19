import React, {useEffect, useContext, useState} from "react";
import Seccion from "./Seccion";
import FormularioAgendarSesion from "./FormularioAgendarSesion";
import Footer from './Footer';
import Albunes from "./Albunes";
import Logo from './Logo';
import { animateScroll as scroll } from "react-scroll";
import { TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";
import styled from "styled-components";
import { Fuentes, Colores } from "../CCS";

const PaginaSecciones = () => {

    const {DatosGaleria, activeTab, setActiveTab} = useContext(ContextoBaseDatos);
    const[mostrar, cambiarMostrar] = useState(true);

    useEffect(()=>{
        scroll.scrollToTop();
    }, [])

    const navbarBrand = 'navbar-brand';

    const mostrarMenu = () => {
        if(mostrar){
            const right = 0 + "px";
            document.getElementById('menu').style.right = right;
            cambiarMostrar(false)
        } else {
            const right = -700 + "px";
            document.getElementById('menu').style.right = right;
            cambiarMostrar(true)
        }
    }


    return (
        <>
           <HeaderSection>
                    <Logo navbarBrand={navbarBrand}/>
                    <ContenedorNavSection>
                        <Nav style={{border:"none", borderRadius: "none"}} tabs className="pt-3">
                            <NavItem className="d-flex">
                                {
                                    DatosGaleria.map((item, index)=>{
                                        return(
                                            <NavLink key={index} className={(activeTab == item.id ? "active" : "")} onClick={()=>setActiveTab(item.id)}>
                                                {item.titulo}
                                            </NavLink>
                                        );
                                    })
                                }
                            </NavItem>
                        </Nav>
                    </ContenedorNavSection>
                    <ContenedorIconNavResponsive>
                        <span className="bi bi-list" onClick={ () => {mostrarMenu();}}></span>
                    </ContenedorIconNavResponsive> 
           </HeaderSection>
           <ContenedorNavResponsive id="menu">
                            <ul>
                                {
                                    DatosGaleria.map((item, index)=>{
                                        return(
                                            <NavLink key={index} className={(activeTab == item.id ? "active" : "")} onClick={()=>{setActiveTab(item.id); mostrarMenu()}}>
                                                <li>{item.titulo}</li>
                                            </NavLink>
                                        )
                                    })
                                }
                            </ul>
                        </ContenedorNavResponsive>
           <MainSection className="container-fluid">
                <TabContent activeTab={activeTab} className="row pb-5 d-flex justify-content-center">
                    {
                        DatosGaleria[activeTab - 1].id === activeTab ?
                            <TabPane tabId={activeTab} className="col pane-seccion">
                                <Seccion/>
                            </TabPane>
                        :
                            <TabPane tabId={activeTab} className="col pb-5 d-flex justify-content-center">
                                <Seccion/>
                            </TabPane>
                    }
                </TabContent>
                <TabContent activeTab={activeTab} className="row justify-content-center">
                    {
                        DatosGaleria[activeTab - 1].id === activeTab ?
                            <TabPane tabId={activeTab} className="col d-flex flex-row flex-wrap justify-content-center">
                                <Albunes/>
                            </TabPane>
                        :
                            <h1>Sin datos para mostrar</h1>
                    }
                </TabContent>
               <FormularioAgendarSesion/>
           </MainSection>
               <Footer />
        </>
    );
}

const HeaderSection = styled.header`
    width: 100vw;
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
    padding-bottom: 20px;
    position: fixed;
    z-index: 100;
    background: ${Colores.DarkCool};

    @media screen and (max-width: 1300px){
        height: 100px;
        position: static;
    }

`;

const ContenedorNavSection = styled.div`

   ul{

    li{
        a{
         color: ${Colores.white};
     
         &:hover{
             color: ${Colores.white};
         }
        }
        
    }
   }

   @media screen and (max-width: 1300px){
        display: none;
}

`
const ContenedorIconNavResponsive = styled.div`
    display: none;

    @media screen and (max-width: 1300px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span {
            color: #ffffff;
            font-size: 60px;
            cursor: pointer;
        }
    } 

    @media screen and (max-width: 500px) {
        span {
            font-size: 40px;
            margin-right: 15px;
        }
    }
`

const ContenedorNavResponsive = styled.div`
    position: absolute;
    z-index: 200;
    top: 100px;
    right: -700px;

    @media screen and (max-width: 1300px){
        padding: 40px;
        width: 400px;
        height: 100%;
        background: ${Colores.DarkCool};
        transition: all ease 1s;
    }
    
    .active{ 
        color: #fff;
        font-weight: bold;
        border-bottom: 1px solid #fff;
    }

    li{
        list-style: none;
        padding: 5px 0;
        color: #FFFFFF;
         cursor: pointer;
    }
}
`

const MainSection = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 12%;
    position: relative;
    height: auto;
    z-index: 1;
    font-family: ${Fuentes.NamunGothic};

    .pane-seccion {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding-bottom: 50px;
    }
`;
 
export default PaginaSecciones;