import React from "react";
import { motion } from "framer-motion";
import logo from "../Images/Logo.jpeg"
import infoIcon from "../Icons/information-button.png";
import { Footer } from "../Components/Footer";


export default function SobreNosotros() {
    const Logo = logo;
    //const Softwareimg = Software;
    return (
            <div className="h-auto w-full flex flex-col items-center justify-center">
                <div className="mt-20 w-full flex md:flex-row flex-col justify-center items-center" style={{ height: '400px' }}>
               
                    <motion.div 
                    className="flex-none"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                    }}
                    >
                        <span className="items-center">
                          <img className="h-76 w-96 h-min-76 w-min-96" src={Logo} alt="" />
                        </span>
                    </motion.div>
                    <div className="flex flex-col p-5 lg:px-20">
                        <h1 className="text-4xl font-quicksand">
                            Sobre Nosotros
                        </h1>
                        <p className="font-quicksand mt-10 pr-10">
                        Bienvenido a Gravitas

                            Gravitas es una empresa dedicada a [descripción breve de lo que hace la empresa, sus productos o servicios]. Desde nuestra fundación, nos hemos comprometido a [misión de la empresa, por ejemplo, proporcionar soluciones innovadoras para nuestros clientes y contribuir al desarrollo sostenible de la sociedad].
                        </p>

                    </div>
                   
                </div>
                <div className="mt-20 h-full w-full flex flex-col" style={{ height: '700px' }}>
                    <div className="px-5 py-10">
                        <h1 className="text-4xl font-quicksand">Nuestra Misión</h1>
                        <p className="font-quicksand mt-10 pr-10">En Gravitas, nuestra misión es [explicar la misión de la empresa en detalle, cómo se traduce en acciones concretas y cuál es su impacto].</p>
                    </div>
                    <div className="px-5 py-10">
                        <h1 className="text-4xl font-quicksand">Nuestros Valores</h1>
                        <ul className="font-quicksand mt-10 pr-10">
                            <li>Excelencia: Nos esforzamos por alcanzar la excelencia en todo lo que emprendemos, desde la calidad de nuestros productos hasta la atención al cliente.</li>
                            <li>Integridad: Actuamos con honestidad, transparencia y responsabilidad en todas nuestras relaciones y operaciones.</li>
                            <li>Innovación: Fomentamos la creatividad y la innovación en la búsqueda constante de soluciones mejores y más eficientes.</li>
                            <li>Compromiso: Estamos comprometidos con el éxito de nuestros clientes, empleados y comunidades en las que operamos.</li>
                        </ul>
                    </div>
                    <div className="px-5 py-10">
                        <h1 className="text-4xl font-quicksand">Nuestra Misión</h1>
                        <p className="font-quicksand mt-10 pr-10">En Gravitas, nuestra misión es [explicar la misión de la empresa en detalle, cómo se traduce en acciones concretas y cuál es su impacto].</p>
                    </div>
                    <div className="px-5 py-10">
                        <h1 className="text-4xl font-quicksand">Nuestra Misión</h1>
                        <p className="font-quicksand mt-10 pr-10">En Gravitas, nuestra misión es [explicar la misión de la empresa en detalle, cómo se traduce en acciones concretas y cuál es su impacto].</p>
                    </div>
                    <Footer/> 
               </div>
            
              
           
                
            </div>
            
    )
}