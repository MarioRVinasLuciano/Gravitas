import React from "react";
import Software from "../Images/Software.jpg"
import settingsIcon from "../Icons/technical-support.png";
import { Footer } from "../Components/Footer";


export default function Soluciones() {
    const Softwareimg = Software;
    return (
            <div className="h-auto w-full flex flex-col items-center justify-center">
                <div className="p-12 flex flex-row">
                    <h1 className="lg:text-4xl md:text-2xl sm:text-xl">
                        Soluciones
                    </h1>
                    <span >
                        <img src={settingsIcon} alt="img" className="w-14 h-14 ml-4"></img>
                    </span>
                </div>
                <div className="w-3/4 rounded-md bg-slate-100 mt-10 flex flex-col md:flex-row"> 
                    <div className="flex w-full h-96 bg-auto bg-center md:h-64 md:w-64 rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="flex flex-col w-full p-6 whitespace-normal">
                        <h2 className="text-4xl font-quicksand font-semibold">Proveedor de software</h2>
                        <p className="font-quicksand pt-6">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. Mantenemos relaciones estrechas con stakeholders y clientes para ofrecer soluciones efectivas y personalizadas.
                        </p>
                    </div>
                </div>

                <div className="w-3/4 rounded-md bg-slate-100 mt-10 flex flex-col md:flex-row"> 
                  
                    <div className="flex flex-col w-full p-6 whitespace-normal">
                        <h2 className="text-4xl font-quicksand font-semibold">Proveedor de software</h2>
                        <p className="font-quicksand pt-6">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. Mantenemos relaciones estrechas con stakeholders y clientes para ofrecer soluciones efectivas y personalizadas.
                        </p>
                    </div>
                    <div className="flex w-full h-96 bg-auto bg-center md:h-64 md:w-64 rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>

                <div className="w-3/4 rounded-md bg-slate-100 mt-10 flex flex-col md:flex-row"> 
                    <div className="flex w-full h-96 bg-auto bg-center md:h-64 md:w-64 rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                    <div className="flex flex-col w-full p-6 whitespace-normal">
                        <h2 className="text-4xl font-quicksand font-semibold">Proveedor de software</h2>
                        <p className="font-quicksand pt-6">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. Mantenemos relaciones estrechas con stakeholders y clientes para ofrecer soluciones efectivas y personalizadas.
                        </p>
                    </div>
                </div>

                <div className="w-3/4 rounded-md bg-slate-100 mt-10 flex flex-col md:flex-row mb-10"> 
                  
                    <div className="flex flex-col w-full p-6 whitespace-normal">
                        <h2 className="text-4xl font-quicksand font-semibold">Proveedor de software</h2>
                        <p className="font-quicksand pt-6">
                            Proveedor de software de logística que se especializa en optimizar procesos empresariales. Mantenemos relaciones estrechas con stakeholders y clientes para ofrecer soluciones efectivas y personalizadas.
                        </p>
                    </div>
                    <div className="flex w-full h-96 bg-auto bg-center md:h-64 md:w-64 rounded-md" style={{ backgroundImage: `url(${Softwareimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                    </div>
                </div>


               
                <Footer/>
            </div>
    )
}