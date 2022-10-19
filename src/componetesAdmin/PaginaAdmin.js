import React, { useContext } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import FormularioDatosHeader from "../componetesAdmin/FormularioDatosHeader";
import FormularioDatosAcercaDE from "./FormularioDatosAcercaDe";
import FormularioEditarServicios from "./FormularioEditarServicios";
import FormularioNuevaCategoria from "./FormularioNuevaCategoria";
import FormularioEditarCaracteristicas from "./FormularioEditarCaracteristicas";
import FormularioAlbun from "./FormularioAlbun";
import EditarContacto from "./EditarContacto";
import { ContextoBaseDatos } from "../contexto/ContextoBaseDatos";


const PaginaAdmin = () => {
    const {activeTab, setActiveTab} = useContext(ContextoBaseDatos);

    const cambiarTab = (numTab) => {
        if(activeTab !== numTab){
            setActiveTab(numTab);
        }
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col" style={{background:"rgba(259,259,259,0.9)"}}>

                        <Nav tabs className="pt-4">
                            <NavItem>
                                <NavLink className={(activeTab =="1"? "active" : "")} onClick={()=>cambiarTab("1")}>
                                    Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className={(activeTab =="2"? "active" : "")} onClick={()=>cambiarTab("2")}>
                                    Section
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <FormularioDatosHeader />
                                <FormularioDatosAcercaDE />
                                <div className="row justify-content-center">
                                    <FormularioEditarServicios />
                                    <FormularioNuevaCategoria />
                                </div>
                                <EditarContacto />
                            </TabPane>

                            <TabPane tabId="2">
                                <div className="container">
                                    <h2 className="mt-2">Panel de Tarjetas</h2>
                                    <FormularioEditarCaracteristicas />
                                    <FormularioAlbun />
                                </div>
                            </TabPane>
                        </TabContent>

                    </div>
                </div>
            </div>
        </>
    );
}
 
export default PaginaAdmin;