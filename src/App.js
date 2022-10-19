import React from 'react';
import {Route, Routes } from 'react-router-dom';
import Home from './componentes/home';
import PanelAdministrador from './componetesAdmin/PanelAdministrador';
import Error404 from './componentes/Error404';
import PaginaSecciones from './componentes/PaginaSecciones';

function App() {
  
  return (
    <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/sesiones" element={<PaginaSecciones />}/>
        <Route path="/home/admin" element={<PanelAdministrador />}/>
        <Route path="*" element={<Error404 />} />
      </Routes>
  );
}

export default App;
