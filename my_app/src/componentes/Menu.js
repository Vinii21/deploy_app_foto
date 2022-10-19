import React from "react";
import Logo from "./Logo";
import Navegacion from "./Navegacion";
import styled from "styled-components";

const Menu = () => {
    return (
       <ContenedorMenu className="contenedorMenu">
            <Logo />
            <Navegacion />
       </ContenedorMenu> 
    );
}

export const ContenedorMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 830px){
        flex-direction: column;
    }
`;
 
export default Menu;