import React from "react";
import Form from "../Components/Form";
import whitebg from "../Images/background/normalbg.jpg";

export default function Contact(){
    const bluehue = whitebg;
    return (
        <div className="w-full h-full bg-gray-100" style={{ backgroundImage: `url(${bluehue})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Form/>
        </div>
    )
}