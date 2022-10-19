import React from "react";
import Header from './Header';
import AcercaDe from './Acerca_de';
import Galeria from './Galeria';
import Contacto from './Contacto';
import Footer from './Footer';

const Home = () => {

    return (
        <>
            <Header/>
                <main>
                    <AcercaDe />
                    <Galeria />
                    <Contacto />
                </main>
                <Footer />
        </>
    );
}
 
export default Home;