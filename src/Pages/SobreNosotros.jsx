import React from "react";
import NavBar from "../Components/Navbar";
import Software from "../Images/Software.jpg"
import infoIcon from "../Icons/information-button.png";
import Footer from "../Components/Footer";


export default function SobreNosotros() {
    const Softwareimg = Software;
    return (
            <div className="h-auto w-full flex flex-col items-center justify-center">
                <NavBar/>
                <div className="p-12 flex flex-row">
                    <h1 className="lg:text-4xl md:text-2xl sm:text-xl">
                        Sobre Nosotros
                    </h1>
                    <span >
                        <img src={infoIcon} className="w-12 h-12 ml-4"></img>
                    </span>
                </div>
                <div className="w-full" style={{ height: '711px' }}>

                </div>
                    <Footer/>    
           
                
            </div>
    )
}