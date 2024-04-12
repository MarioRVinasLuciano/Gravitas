import React, { useRef, useState } from 'react';
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
    <div className='flex h-screen w-full justify-center pt-12'>
        <div className='flex-initial w-96 md:w-1/2 h-fit  px-6 backdrop-blur-md rounded-sm shadow-md bg-white/20'>
          <div className='flex justify-center my-6'>
            <h1 className='text-4xl font-quicksand'>Contáctanos</h1>
          </div>
          {/* First and last name section  */}
          <form ref={form} onSubmit={sendEmail}>
            <div className='flex flex-col md:flex-row w-full h-44 md:h-24 '>
              <div className='h-20 w-full md:w-1/2 p-2 mr-4'>
                  <label className='text-sm font-quicksand font-bold'>Nombres</label>
                  <input className="h-10 flex w-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md" type="text" name="nombres" required/>
              </div>
              <div className='h-20 w-full md:w-1/2 p-2'>
                  <label className='text-sm font-quicksand font-bold'>Apellidos</label>
                  <input className="h-10 flex w-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md" type="text" name="apellidos" required/>
              </div>
            </div>

            <div className='h-20 w-full p-2'>
                  <label className='text-sm font-quicksand font-bold'>Nombre de Compañia</label>
                  <input className="h-10 flex w-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md" type="text" name="nombre_comp" required/>
              </div>
              <div className='h-20 w-full p-2'>
                  <label className='text-sm font-quicksand font-bold'>Email</label>
                  <input className="h-10 flex w-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md" type="text" name="email" required/>
              </div>
              <div className='h-20 w-full  p-2'>
                  <label className='text-sm font-quicksand font-bold'>Numero Telefonico</label>
                  <input className="h-10 flex w-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md" type="text" name="numero_telef" required/>
              </div>
              <div className='h-30 w-full  p-2 '>
                  <label className='text-sm font-quicksand font-bold'>Mensaje</label>
                  <textarea className="resize-none text-left w-full h-full rounded-md p-2 mt-2 outline-2 outline-blue-300 shadow-md overflow-auto" type="text" name="message" required/>
              </div>
                <div className='h-16 w-full p-2  mt-4' disabled={isSubmitting}>
                    <button type="submit" className='w-full h-10 bg-blue-400 rounded-md p-2 '>{isSubmitting ? 'Enviando...' : sent ? 'Enviado' : 'Enviar'}</button>
                </div>
       
           
          </form>
        </div>
    </div>
  );
}
