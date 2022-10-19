import header from './img/header.png';
import modelo from './img/modelo.jpg';
import textura1 from './img/swirl_pattern.webp'
import logo from './icon/LOGO.png';
import boda from './img/boda.jpg';
import familia from './img/familia.jpg';
import gastronomia from './img/gastronomia.jpg';
import mascotas from './img/mascota.jpg';
import espacio from './img/espacio.jpg';
import productos from './img/bolso.jpg';
import pareja1 from './img/pareja.jpg';
import pareja2 from './img/boda.jpg';
import novios1 from './img/novios1.jpg';
import novios2 from './img/novios2.webp';
import novios3 from './img/novios3.jpg';
import novios4 from './img/novios4.webp';
import novios5 from './img/novios5.jpg';
import novios6 from './img/novios6.jpg';



const HomePage = {
        id: 'header',
        logos: logo,
        altLogo: 'Logo Empresa',
        Nombre: 'Alfa Fotografia',
        Text: 'Capturando tus momentos',
        background: header
    }

const AcercaDe = {
    id: 'AcercaDe',
    logos: modelo,
    altLogo: 'Foto fotografo',
    Nombre: 'Hola, soy Lady',
    Text1: 'Fundadora de Alfa Fotografía con 10 años de experiencia, Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est animi natus, ab ea blanditiis error ipsa nemo esse atque veniam rem vitae, quod fuga aperiam eligendi nesciunt ullam sapiente.',
    Text2: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est animi natus, ab ea blanditiis error ipsa nemo esse atque veniam rem vitae, quod fuga aperiam eligendi nesciunt ullam sapiente. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias est animi natus, ab ea blanditiis error ipsa nemo esse atque veniam rem vitae, quod fuga aperiam eligendi nesciunt ullam sapiente.',
}


const img = [
    {alt: 'Fondo header', img: header},
    {alt: 'Modelo', img: modelo},
    {alt: 'Textura fondo main', img: textura1}
]


const galeria = [
    {
        id: 1, 
        titulo: 'Boda', 
        texto: 'Tu boda desde una perspectiva única, capturar la naturalidad y sus momentos mas espontáneos. Un recuerdo para el resto de vuestras vidas.',
        fondo: boda,
        direccion: 'boda',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['25 fotos editadas de manera profesional en alta resolución', 'Dos vestuarios', '2.5 horas de sesión fotográfica'],
                precio: "$270",
                fondo: pareja2,
                class: "fullSesion"
            },
            {
                titulo: "Sesión Basica",
                servicios: ['10 fotos editadas de manera profesional en alta resolución', 'Un vestuario', '1 hora de sesión fotográfica'],
                precio: "$100",
                fondo: pareja1,
                class: "basicSesion"
            },
            {
                titulo: "Sesión Avanzada",
                servicios: ['50 fotos editadas de manera profesional en alta resolución', 'Cinco vestuario', '5 horas de sesión fotográfica'],
                precio: "$600",
                fondo: pareja1,
                class: "basicSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    },
    {
        id: 2, 
        titulo: 'Familia', 
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas, possimus repellat minima recusandae nihil eos, deserunt dignissimos debitis fugit labore quos ducimus.',
        fondo: familia,
        direccion: 'familia',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['30 fotos editadas de manera profesional en alta resolución', 'Tres vestuarios', '3 horas de sesión fotográfica'],
                precio: "$300",
                fondo: pareja1,
                class: "fullSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    },
    {
        id: 3, 
        titulo: 'Gastronomia', 
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas, possimus repellat minima recusandae nihil eos, deserunt dignissimos debitis fugit labore quos ducimus.',
        fondo: gastronomia,
        direccion: 'gastronomia',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['30 fotos editadas de manera profesional en alta resolución', 'Platillos a gusto del cliente', '4.5 horas aprox. de sesión fotográfica'],
                precio: "$300",
                class: "fullSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    },
    {
        id: 4, 
        titulo: 'Tu Espacio', 
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas, possimus repellat minima recusandae nihil eos, deserunt dignissimos debitis fugit labore quos ducimus.',
        fondo: espacio,
        direccion: 'tu-espacio',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['25 fotos editadas de manera profesional en alta resolución', 'Dos vestuarios', '2.5 horas de sesión fotográfica'],
                precio: "$270",
                fondo: pareja1,
                class: "fullSesion"
            },
            {
                titulo: "Sesión Basica",
                servicios: ['10 fotos editadas de manera profesional en alta resolución', 'Un vestuario', '1 hora de sesión fotográfica'],
                precio: "$100",
                fondo: pareja2,
                class: "fullSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    },
    {
        id: 5, 
        titulo: 'Mascotas', 
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas, possimus repellat minima recusandae nihil eos, deserunt dignissimos debitis fugit labore quos ducimus.',
        fondo: mascotas,
        direccion: 'mascotas',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['25 fotos editadas de manera profesional en alta resolución', 'Dos vestuarios', '2.5 horas de sesión fotográfica'],
                precio: "$270",
                fondo: pareja1,
                class: "fullSesion"
            },
            {
                titulo: "Sesión Basica",
                servicios: ['10 fotos editadas de manera profesional en alta resolución', 'Un vestuario', '1 hora de sesión fotográfica'],
                precio: "$100",
                fondo: pareja2,
                class: "fullSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    },
    {
        id: 6, 
        titulo: 'Tus Productos', 
        texto: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quas, possimus repellat minima recusandae nihil eos, deserunt dignissimos debitis fugit labore quos ducimus.',
        fondo: productos,
        direccion: 'tus-productos',
        items: [
            {
                titulo: "Sesión Completa",
                servicios: ['25 fotos editadas de manera profesional en alta resolución', 'Dos vestuarios', '2.5 horas de sesión fotográfica'],
                precio: "$270",
                fondo: pareja1,
                class: "fullSesion"
            }
        ],
        albun: [
            {alt: 'Novios mirandose', img: novios1},
            {alt: 'Novios bailando', img: novios2},
            {alt: 'Novios de fondo', img: novios3},
            {alt: 'Novia', img: novios4},
            {alt: 'Novios sentados', img: novios5},
            {alt: 'Novios besandose', img: novios6}
        ]
    }
]

export const viaContacto = {
    instagram: 'https://www.instagram.com/',
    facebook: 'https://www.facebook.com/',
    youtube: 'https://www.youtube.com/',
    whatsapp: '+506 000 000',
    telefono: '+506 000 000',
    correo: 'correo@correo.com',
    direccion: 'Estamos ubicados en ...',
    mapa: 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d572839.0638893053!2d-112.29532069433033!3d60.02300674870576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scr!4v1663976754506!5m2!1ses!2scr',
}

export {img, galeria, HomePage, AcercaDe};
