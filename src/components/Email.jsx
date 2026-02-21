import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Email = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9pgsgrc', 'template_6r0zgcb', form.current, 'URIO-mZ2GqOAq5CFM')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-bottom" className='flex flex-col text-white justify-center items-center space-y-7 p-10 lg:w-100 h-auto mx-auto bg-template-contact'>
        <h1 className='text-2xl lg:text-4xl'>Contact Form</h1>
    <form className='text-white flex flex-col justify-center w-50 items-center space-y-7' ref={form} onSubmit={sendEmail}>
    <div className='flex flex-col justify-start'>
        <label className='text-lg'>Name</label>
        <input className='border-1 border-white w-72 h-10 px-3' placeholder='Your Name' type="text" name="from_name" />
    </div>
    <div className='flex flex-col justify-start items-start'>
      <label className='text-lg'>Email</label>
      <input className='border-1 border-white w-72 h-10 bg-black px-3' placeholder='Your Email' type="email" name="from_email" />
    </div>
    <div className='flex flex-col justify-start items-start'>
      <label className='text-lg'>Message</label>
      <textarea className='border-1 border-white w-72 h-32 bg-black px-3 py-1' placeholder='Your Message' name="message" />
    </div>
    <div className='px-14 text-lg py-5 z-0 relative border-1 border-white rounded-lg before:absolute before:w-0 before:h-full before:bg-white before:-z-1 before:rounded-lg before:left-0 before:top-0 before:transition-all before:duration-300 hover:before:w-full hover:text-black'>
      <button className='hover:text-black' type="submit" value="Send">Send</button>
    </div>
    </form>
    </div>
  );
};

export default Email