import React, { useRef, useState } from 'react'
import Button from './button'
import emailjs from '@emailjs/browser';

const Form = () => {
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [display, setDisplay] = useState(false)
    const contactForm = useRef<any>();

    const sendMail = async (e: any) => {
        e.preventDefault();
        try {
          setLoading(true);
          const mail = await emailjs.sendForm(
            process.env.MAIL_SERVICE_ID as string,
            process.env.MAIL_TEMPLATE_ID as string,
            contactForm.current,
            process.env.MAIL_PUBLIC_KEY
          );
          setLoading(false);
          if (mail) {
            console.log(mail)
            setMessage('Your request have been sent');
            setDisplay(true)
            setTimeout(() => setDisplay(false), 5000)
            contactForm.current.reset();
          }
        } catch (error) {
          console.log(error);
        }
    };
  return (
    <form ref={contactForm} className={`mt-3 px-1 md:px-7 py-5 md:py-10`}>
        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Name <span className="text-red-500">*</span></label>
                <div className="mt-2">
                        <input type="text" name="name" id="name" placeholder="Name" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Company</label>
                <div className="mt-2">
                        <input type="text" name="company" id="company" placeholder="Company" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div> 

        <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mt-5">
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Email <span className="text-red-500">*</span></label>
                <div className="mt-2">
                    <input type="email" name="email" id="email" placeholder="Email" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
                </div>
            </div>
            <div className="sm:col-span-3">
                <label className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
                <div className="mt-2">
                    <input type="text" name="phone" id="phone" placeholder="Phone" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
                </div>
            </div>
        </div>

        <div className="col-span-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900">Subject <span className="text-red-500">*</span></label>
            <div className="mt-2">
                <input type="text" name="subject" id="subject" placeholder="Subject" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
            </div>
        </div>

        <div className="col-span-full mt-5">
            <label className="block text-sm font-medium leading-6 text-gray-900">Message</label>
            <div className="mt-2">
                <textarea id="message" name="message" rows={3} placeholder="Message" className="block w-full rounded-md border-0 py-1.5 bg-[#F5F7F8] px-5 placeholder:text-gray-400 focus:outline-none focus:ring focus:bg-transparent sm:text-sm sm:leading-6" />
            </div>
        </div>

        <div className="col-span-full my-5" onClick={sendMail}>
            <Button text={loading ? "Loading..." : "Send Message"} className={`block w-[max-content] px-3 py-2 text-base text-center text-white text-[14px] bg-[#0FCC7C] rounded-full baseline hover:bg-darkBlue`} />
        </div>
        {
            display && (
                <div className='px-5 -y-10 bg-[#0FCC7C]'>
                    <p className='font-bold text-[rgb(16 185 129)]'>{message}</p>
                </div>
            )
        }
    </form>
  )
}

export default Form