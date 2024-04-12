
import setupflota from "../Images/Soluciones img/setupflota.jpg";
import boxes from "../Images/Soluciones img/boxes.jpg";
import warehouseimg from "../Images/Soluciones img/Warehouseimg.jpg";
import dashboardimg from "../Images/Soluciones img/Dashboard.jpg";

const flota = setupflota;
const cajas = boxes;
const Almacen = warehouseimg;
const Tablero = dashboardimg;


const content = [
    {
        id:1,
        title: "Setup de flotas",
        text: "Centraliza todos los procedimientos relacionados con la Gestión de Flotas en una plataforma basada en la nube, brindando acceso desde cualquier ubicación y garantizando actualizaciones instantáneas en tiempo real. Esta solución involucra a todos los participantes clave en la cadena de operaciones.",
        image: flota
    },
    {
        id:2,
        title: "Setup Logística - Software",
        text: " Esta solución garantiza un completo control de los envíos, ofreciendo seguimiento y rastreo en tiempo real para una total trazabilidad.",
        image: cajas
    },
    {
        id:3,
        title: "Setup Depósito - Software",
        text: "Se trata de una solución diseñada para la Gestión Avanzada de Almacenes, la cual facilita el mantenimiento de un inventario preciso, la optimización del espacio disponible y la disminución de los tiempos de entrega.",
        image: Almacen
    },
    {
        id:4,
        title: "Tablero de comando Logístico",
        text: "Nuestro Tablero de Comandos Logístico es una herramienta de Business Intelligence que presenta de manera visual los indicadores clave para evaluar el estado de tu empresa en tiempo real. Basada en análisis de datos reales, facilita la toma de decisiones informadas",
        image: Tablero
    },
   
]

export default content;