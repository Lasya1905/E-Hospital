import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            {/* ------ Left Section ------ */}
            <div>
                <img src={assets.logo} alt="" className='mb-5 w-40'/>
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto Hospital is a next-generation digital healthcare platform committed to delivering accessible, affordable, and reliable medical services. Our vision is to bridge the gap between patients and quality healthcare, anytime, anywhere.</p>
            </div>

            {/* ------ Center Section ------ */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* ------ Right Section ------*/}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>prescrip.to@gmail.com</li>
                </ul>
            </div>

        </div>

        {/* -------- Copyrights--------- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ Prescripto. All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer