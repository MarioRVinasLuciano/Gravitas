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
    <div className='flex h-screen w-full justify-center items-center'>
        <div className='flex-initial w-96 md:w-1/2 h-3/4 '>
          <div className='flex flex-col md:flex-row w-full h-44 '>
            <div className='h-12 w-full md:w-1/2 p-2'>
                <input className="h-full flex w-full rounded-sm p-2" type="text" placeholder='Name' />
            </div>
            <div className='h-12 w-full md:w-1/2 p-2'>
                <input className="h-full flex w-full rounded-sm p-2" type="text" placeholder='Last name' />
            </div>
          </div>

        </div>
    </div>
  );
}
