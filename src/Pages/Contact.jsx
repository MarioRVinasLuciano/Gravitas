import React from "react";
import Form from "../Components/Form";
import NavBar from "../Components/Navbar";
import Contact3 from "../Images/Contactimgs/Contact3.jpg";

export default function Contact(){
    const Backgroundimg = Contact3;
    return (
        <div className="w-full h-full bg-gray-100" style={{ backgroundImage: `url(${Backgroundimg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <NavBar/>
            <Form/>
        </div>
    )
}