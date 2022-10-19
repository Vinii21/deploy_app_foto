import React, {useState/* , useEffect */} from "react";
import { galeria } from "../assets/media_fichero";

const ContextoBaseDatos = React.createContext();

const ProveedorBaseDatos = ({children}) => {

    //Estado que lleva el fichero de objetos de la galeria (local)
    const [ DatosGaleria, modificarDBgaleria ] = useState(galeria);
    //Estado que modifica el cambio de tarjetas en galerias de la pagina
    const [activeTab, setActiveTab] = useState("1");
    //Estado que modifica el cambio de tarjetas en admin/seccion-Panel-Tarjetas
    const [activeEdit, setActiveEdit] = useState(1);
    //Estado que establece las coordenadas del mapa en admin/home-Datos-Contacto
    const[stateCoor, setStateCoor]=useState({
        latitud: 0,
        longitud: 0,
    });

    //Funcion encargada de establecer el id en paginaAdmin/seccion-Panal de Tarjetas Elemento select opcion
    //Mediante el evento onClick
    const funcionActiveEdit = (id) => {
        setActiveEdit(id);
    };


    //Estado para prueba de api
    /* const [todos, setTodos] = useState(null); */
    //Logica para obtener datos de una api
    /* useEffect(()=>{
        const fetchAPI = async () => {
            const response = await fetch('https://pokeapi.co/api/v2/ability/3');
            const responseJSON = await response.json();
            setTodos(responseJSON);
        }
        fetchAPI()
    },[]) */

    return (
        <ContextoBaseDatos.Provider value={{DatosGaleria, activeTab, setActiveTab, activeEdit, stateCoor, setStateCoor, funcionActiveEdit}}>
            {children}
        </ContextoBaseDatos.Provider>
    );
}
 
export {ProveedorBaseDatos, ContextoBaseDatos};