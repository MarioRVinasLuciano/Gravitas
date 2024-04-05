import React, { useState } from "react";
import menu from "../Icons/menu.png";
import close from "../Icons/close.png";
import Logo2 from "../Images/Logo2.png";


export default function NavBar() {
   
    const logo = Logo2;

let Links = [
    { name: "Nuestras Soluciones", link: "/soluciones" },
    { name: "Sobre nosotros", link: "/sobrenosotros" },
    { name: "Contactanos", link: "/contact"},
  ];
    let [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    };


    return (
        <header className="bg-white top-0 w-full sticky z-10">
            <div className="md:flex items-center justify-between py-4 ml-10 md:px-10 px-7 ">
                <div className="flex items-center pt-4">
                    <a href="/gravitas" className="text-3xl font-pirulen">
                        <img className="h-16 w-26" src={logo} alt="" />
                    </a>
                </div>
                <div className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden" onClick={toggleMenu}>
                    <span>
                        <img className="h-5 w-5" src={open ? close : menu} alt="Menu Icon"/>
                    </span>
                </div>
                <ul
                    className={`md:z-auto z-[-1] left-0 md:mt-2 w-full md:w-auto md:flex md:items-center md:pb-0 md:pl-0 pl-9 pb-10 md:static absolute bg-white transition-all duration-500 ${open ? "" : "hidden"}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className="md:ml-6 mr-6 h-10 px-4 py-2 items-center text-lg md:my-0 my-7 hover:bg-slate-100 rounded-md md:">
                            <a
                                className="transform duration-300 hover:-translate-y-6 hover:scale-110 hover:text-gray-500 font-quicksand text-md"
                                href={link.link}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
