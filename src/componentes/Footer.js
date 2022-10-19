import React from "react";
import Logo from "./Logo";
import styled from "styled-components";

const Footer = () => {
    return (
        <EtiquetaFooter>
            <ContenedorFooter>
                <Logo />
            </ContenedorFooter>
        </EtiquetaFooter>
    );
}

export const EtiquetaFooter = styled.footer`
    width: 100%;
    height: 200px;
    position: relative;
    margin-top: 50px;

    @media screen and (max-width: 500px){
        height: 100px;
        margin-top: 200px;
    }
`;

export const ContenedorFooter = styled.div`
    height: 100%;
    width: 100%;
    background-color: #333333;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    padding-right: 100px;

    div{
        display: flex;
        justify-content: center;
        height: 100px;
    }
`;
 
export default Footer;