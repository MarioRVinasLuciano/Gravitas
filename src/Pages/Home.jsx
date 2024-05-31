import { Footer } from "../Components/Footer";
import Warehouse from "../Images/Warehouse.jpg";
import Logistics from "../Images/Logistic.jpg";
import Software from "../Images/Software.jpg";
import Management from "../Images/Management.jpg";
import { motion } from "framer-motion"
import marioimg from "../Images/Nuestro equipo/Mario.jpg";
import counseling from "../Images/Counseling.jpg";
import rafaelaimg from "../Images/Nuestro equipo/Rafaela.jpg";
import saulimg from "../Images/Nuestro equipo/Saul.jpg";
import rafiimg from "../Images/Nuestro equipo/Rafael.jpeg";



export default function Homepage() {
    const Warehouseimg = Warehouse;
    const Softwareimg = Software;
    const Managementimg = Management;
    const Logisticimg  = Logistics;
    const Counselingimg = counseling;

    const Profileimg1 = marioimg;
    const Progileimg2 = rafaelaimg;
    const Profileimg3 = saulimg;
    const Profileimg4 = rafiimg;
   

    return (
        <div id="inicio" className="flex flex-col w-full h-auto">
            <div className="w-full" style={{ height: '711px' }}>
                <div className="h-full bg-auto bg-center relative" style={{ backgroundImage: `url(${Warehouseimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <motion.div initial={{ opacity: 0}} whileInView={{ opacity:1}} transition={{ delay:1 }} className="w-full h-full bg-black/30 opacity-98 absolute shadow-md flex justify-center md:justify-end lg:justify-end xl:justify-end items-center overflow-hidden text-wrap ">
                        <div className="w-1/2 h-auto rounded-md contrast-300 backdrop-blur-sm bg-gray/10 mr-12">
                            <h1 className="p-8 lg:text-7xl text-2xl sm:text-4xl md:text-6xl font-quicksand font-bold text-center text-white ">
                            "Con Integridad y compromiso, llevamos a cabo nuestro deber con la excelencia."
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full px-8  flex flex-col h-auto md:h-full lg:h-full xl:h-full bg-white  justify-center items-center gap-12" >
                <div className="py-16">
                    <h1 className="text-3xl md:text-6xl lg:text-6xl xl:text-6xl font-quicksand font-bold">Nuestros Servicios</h1>
                </div>

                <div className="flex flex-col md:flex-row  lg:flex-row  xl:flex-row  w-full md:w-2/3 bg-slate-100 rounded-md  h-full lg:h-64 shadow-md transition hover:-translate-y-2 hover:scale-110 ">
                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-32 md:h-auto lg:h-full xl:h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Counselingimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="h-auto text-wrap w-full px-8 py-4 whitespace-normal ">
                        <h1 className="text-3xl font-quicksand font-semibold">Consultoria</h1>
                        <p className="font-quicksand text-lg md:text-xl lg:text-xl">
                            Nos enfocamos en analizar, optimizar y mejorar los procesos empresariales de logisticas, manteniendo una estrecha relacion con los stackeholders y clientes.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row  lg:flex-row  xl:flex-row  w-full md:w-2/3 bg-slate-100 rounded-md  h-full lg:h-64 shadow-md transition hover:-translate-y-2 hover:scale-110 ">
                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-32 md:h-auto lg:h-full xl:h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="h-auto text-wrap w-full px-8 py-4 whitespace-normal ">
                        <h1 className="text-3xl font-quicksand font-semibold">Proveedor de software</h1>
                        <p className="font-quicksand text-lg md:text-xl lg:text-xl">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. 
                        </p>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row  lg:flex-row  xl:flex-row  w-full md:w-2/3 bg-slate-100 rounded-md  h-full lg:h-64 shadow-md transition hover:-translate-y-2 hover:scale-110 ">
                    <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 h-32 md:h-auto lg:h-full xl:h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Managementimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="h-auto text-wrap w-full px-8 py-4 whitespace-normal ">
                        <h1 className="text-3xl font-quicksand font-semibold">Gestiones</h1>
                        <p className="font-quicksand text-lg md:text-xl lg:text-xl">
                            Proveedor de soluciones de gestión de almacenes y flotas vehiculares
                        </p>
                    </div>
                </div>

            </div>
        
            <div className="w-full py-16 px-8 sm:px-0 md:px-0 flex flex-col h-full bg-white justify-center items-center gap-12" style={{ height: '780px' }} >
                <div className="w-full h-full bg-auto bg-center bg-fixed" style={{ backgroundImage: `url(${Logisticimg})`, backgroundSize: 'cover', backgroundPosition: 'top' }}>
                    <div className="w-1/2 h-full bg-white flex justify-center ">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1}}

                        className="flex lg:w-2/3 sm:w-3/4 md:w-3/4 h-full text-wrap items-center" >
                        
                        <h1 id="text" class="sm:text-md md:text-2xl lg:text-3xl font-quicksand p-8 text-black contrast-300">
                            Gravitas se destaca por su compromiso con la excelencia, la innovación y la integridad. Nuestra misión es ofrecer soluciones avanzadas que anticipen las necesidades futuras de nuestros clientes. Nos esforzamos por liderar la industria mediante la entrega de resultados excepcionales.
                        </h1>

                        
                        </motion.div>
                    </div>
                </div>
            </div>
            <div className="w-full px-8 sm:px-0 md:px-0 flex flex-col h-full  items-center bg-white gap-12 p-32" >
                <div className=" w-full p-2 pt-6 m-2  flex items-center justify-center"> 
                    <h2 className="text-6xl font-quicksand font-bold">
                        Nuestro equipo
                    </h2>
                </div>
                <div className="w-2/3 md:h-2/3 grid grid-cols-4 grid-rows-2  justify-items-center">
                        <div className="md:col-span-2  col-span-4 flex-col m-5 flex justify-center items-center h-44 w-36">
                            <div className="rounded-full bg-blue-200 h-28 w-28">
                                <img className="rounded-full shadow-md" src={Profileimg4} alt="" />
                            </div>
                            <p className="mt-2 font-quicksand font-semibold">Rafael Luciano</p>
                            <p className="mt-2 font-quicksand text-sm">Ceo</p>
                            
                        </div>
                        <div className="md:col-span-2  col-span-4 flex-col m-5 flex justify-center items-center h-44 w-36">
                        <div className="h-28 w-28">
                                <img className="rounded-full shadow-md" src={Progileimg2} alt="" />
                            </div>
                            <p className="mt-2 font-quicksand font-semibold">Rafaela Mercedes</p>
                            <p className="mt-2 font-quicksand text-sm">Directora Comercial</p>
                            
                        </div>
                        <div className="md:col-span-2  col-span-4 flex-col m-5 flex justify-center items-center h-44 w-36">
                            <div className="h-28 w-28">
                                <img className="rounded-full shadow-md" src={Profileimg1} alt="" />
                            </div>
                            <p className="mt-2 font-quicksand font-semibold">Mario Viñas</p>
                            <p className="mt-2 font-quicksand text-sm">Junior Developer</p>
                            
                        </div>
                        <div className=" md:col-span-2  col-span-4 flex-col m-5 flex justify-center items-center h-44 w-36">
                        <div className="h-28 w-28">
                                <img className="h-28 w-28 rounded-full shadow-md" src={Profileimg3} alt="" />
                            </div>
                            <p className="mt-2 font-quicksand font-semibold">Saul Pinales</p>
                            <p className="mt-2 font-quicksand text-sm">Senior Developer</p>
                            
                        </div>
                        
                </div>
            </div>
           
          
            <Footer/>
        </div>
    );
}


