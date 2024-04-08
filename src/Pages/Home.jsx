import { Footer } from "../Components/Footer";
import Warehouse from "../Images/Warehouse.jpg";
import Counseling from "../Images/Counseling.jpg";
import Consulting from "../Images/consulting2.jpg";
import Software from "../Images/Software.jpg";
import Management from "../Images/Management.jpg";
import { motion } from "framer-motion"



export default function Homepage() {
    const Warehouseimg = Warehouse;
    const Counselingimg = Counseling;
    const Softwareimg = Software;
    const Managementimg = Management;
    const Consultingimg = Consulting;

   

    return (
        <div id="inicio" className="flex flex-col w-full h-auto">
            <div className="w-full" style={{ height: '711px' }}>
                <div className="h-full bg-auto bg-center relative" style={{ backgroundImage: `url(${Warehouseimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    <motion.div initial={{ opacity: 0}} whileInView={{ opacity:1}} transition={{ delay:1 }} className="w-full h-full bg-black-300 opacity-98 absolute shadow-md flex justify-center items-center overflow-hidden text-wrap">
                        <div className="w-1/2 h-64 text-wrap absolute right-10">
                            <h1 className="lg:text-4xl md:text-3xl sm:text-2xl font-quicksand font-semibold p-8 text-center text-white contrast-300 backdrop-blur-sm bg-gray/10">
                            "Con gravedad y seriedad, llevamos a cabo nuestro compromiso con la excelencia."
                            </h1>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="w-full px-8 sm:px-0 md:px-0 flex flex-col h-full bg-white  justify-center items-center gap-12" style={{ height: '750px' }} >
                <div className="mb-8">
                    <h1 className="text-4xl font-quicksand">Nuestros Servicios</h1>
                </div>

                <div className="flex sm:mr-32 md:mr-32 mr-0 w-full md:w-1/2 bg-slate-100 rounded-md md:h-40 sm:h-40 h-36 shadow-md transition hover:-translate-y-2 hover:scale-110 flex-row">
                    <div className="w-28 h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Counselingimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="text-wrap w-full p-2 whitespace-normal overflow-auto">
                        <h1 className="text-xl font-quicksand font-semibold">Consultoria</h1>
                        <p className="font-quicksand text-sm md:text-lg">
                            Nos enfocamos en analizar, optimizar y mejorar los procesos empresariales de logisticas, manteniendo una estrecha relacion con los stackeholders y clientes.
                        </p>
                    </div>
                </div>

                <div className="flex sm:ml-32 md:mr-32 ml-0 w-full md:w-1/2 bg-slate-100 rounded-md md:h-40 sm:h-40 h-36 shadow-md transition hover:-translate-y-2 hover:scale-110">
                    <div className="w-28 h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="text-wrap w-full p-2 whitespace-normal overflow-auto">
                        <h1 className="text-xl  font-quicksand font-semibold">Proveedor de software</h1>
                        <p className="font-quicksand text-sm md:text-lg">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. Mantenemos relaciones estrechas con stakeholders y clientes para ofrecer soluciones efectivas y personalizadas.
                        </p>
                    </div>
                </div>
                <div className="flex sm:mr-32 md:mr-32 mr-0 w-full md:w-1/2  bg-slate-100 rounded-md md:h-40 sm:h-40 h-36 shadow-md transition hover:-translate-y-2 hover:scale-110">
                    <div className="w-28 h-full bg-auto bg-center relative rounded-md" style={{ backgroundImage: `url(${Managementimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="text-wrap w-full p-2 whitespace-normal overflow-auto">
                        <h1 className="text-xl font-quicksand font-semibold">Gestiones</h1>
                        <p className="font-quicksand text-sm md:text-lg">
                            Proveedor de soluciones de gestión de almacenes y flotas vehiculares
                        </p>
                    </div>
                </div>

            </div>
        
            <div className="w-full px-8 sm:px-0 md:px-0 flex flex-col h-full bg-white justify-center items-center gap-12" style={{ height: '780px' }} >
                <div className="w-full h-full bg-auto bg-center bg-fixed" style={{ backgroundImage: `url(${Consulting})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
           
          
            <Footer/>
        </div>
    );
}


