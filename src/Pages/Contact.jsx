import React from "react";
import Form from "../Components/Form";
import bluehueimg from "../Images/background/Bluehue.jpg";

export default function Contact(){
    const bluehue = bluehueimg;
    return (
        <div className="w-full h-full bg-gray-100" style={{ backgroundImage: `url(${bluehue})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <Form/>
        </div>
    )
}