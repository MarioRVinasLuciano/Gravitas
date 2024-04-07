import React, { useState } from "react";
import { Link } from "react-router-dom";
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
            <div className="md:flex items-center justify-between py-2 ml-10 md:px-10 px-7 ">
                <div className="flex items-center pt-4">
                    <a href="/gravitas" className="text-3xl font-pirulen ">
                        <img className="h-12 w-26 " src={logo} alt="" />
                    </a>
                </div>
                <div className="text-2xl absolute right-8 top-10 cursor-pointer lg:hidden" onClick={toggleMenu}>
                    <span>
                        <img className="h-5 w-5" src={open ? close : menu} alt="Menu Icon"/>
                    </span>
                </div>
                <ul
                    className={`lg:z-auto z-[-1] md:top-20 md:items-center left-0  w-full lg:w-auto lg:flex lg:items-center lg:pb-0 lg:pl-0 pl-9 pb-10 lg:static absolute bg-white ${open ? "" : "hidden"}`}
                >
                    {Links.map((link) => (
                        <li key={link.name} className=" mr-6 h-10 px-4 py-2 items-center text-lg  my-7 hover:bg-slate-100 rounded-md ">
                            <Link
                                className="transform duration-300 hover:-translate-y-6 hover:scale-110 hover:text-gray-500 font-quicksand text-md"
                                to={link.link} onClick={toggleMenu}
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}
