import React, { useRef, useState } from 'react';
import env from "dotenv";
import emailjs from '@emailjs/browser';

export default function Form() {
  const form = useRef();
  const [sent, setSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!form.current.checkValidity()) {
      setErrorMessage('Porfavor, llene el form con datos validos');
      setIsSubmitting(false);
      return;
    }

    emailjs
      .sendForm('service_6nhystl', 'template_rpv0xad', form.current, {
        publicKey: 'opaGUR5t2fxSLEtw7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setSent(true);
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Intente luego');
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="flex justify-center items-center w-full h-screen">
      <form ref={form} onSubmit={sendEmail} className="flex flex-col md:flex-row justify-center items-center gap-4 w-2/3">
        <div className="text-5xl w-full mb-4 md:mb-36">
          <h1 className="font-pirulen text-white bg-gray/10">Contactanos</h1>
        </div>
        <div className="flex flex-col gap-2 w-full md:w-1/2 bg-gray-100 p-12 rounded-md shadow-md">
          <div className="h-12 w-full">
            <input type="text" name="user_name" className="p-2 w-full rounded-md shadow-sm" placeholder="Nombre completo" required />
          </div>
          <div className="h-12 w-full">
            <input type="email" name="user_email" className="p-2 w-full rounded-md shadow-sm" placeholder="Email" required />
          </div>
          <div className="h-36 w-full">
            <input name="message" className="p-2 h-full w-full rounded-md shadow-sm text-wrap align-top" placeholder="Escribe el mensaje" required />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
          <button type="submit" className="bg-blue-400 mt-4 h-10 w-full rounded-md" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : sent ? 'Enviado' : 'Enviar'}
          </button>
        </div>
      </form>
    </div>
  );
}
