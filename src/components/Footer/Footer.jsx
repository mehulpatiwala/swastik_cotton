import React from 'react'
import { FaLinkedin, FaFacebook } from "react-icons/fa";
const Footer = () => {
  return (
    <>
   <footer className="bg-gray-800 text-white p-8 box fadeInUp">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="mb-4 sm:mb-0">
        <h2 className="text-lg font-semibold">Address</h2>
        <p>Sr. No.25/1, Nr Triveni Ashram, Botad-Bhavnagar Road, <br /> Samadhiyala No.1, Botad, Gujarat 364710, India</p>
      </div>
      <div className="mb-4 sm:mb-0">
        <h2 className="text-lg font-semibold">Reservations</h2>
        <p>Phone: +91 2132157891</p>
        <p>Email: user@example.com</p>
      </div>
      <div className="mb-4 sm:mb-0">
        <h2 className="text-lg font-semibold">Opening Hours</h2>
        <p>Mon-Sat: 9AM To 6AM</p>
        <p>Sunday: Closed</p>
      </div>
      <div className="mb-4 sm:mb-0">
        <h2 className="text-lg font-semibold">Follow us</h2>
        <div className="flex">
          <a href="https://www.linkedin.com/in/mehul-patiwala-4b3390264" className="text-white hover:text-blue-500 mr-4"><FaLinkedin /></a>
          <a href="#" className="text-white hover:text-blue-500"><FaFacebook /></a>
        </div>
      </div>
    </div>
    <hr className="my-4 border-gray-700" />
    <div className="flex flex-col md:flex-row items-center justify-center"> {/* Centering content */}
      <p className="mb-4 md:mb-0">&copy; Copyright Swastik cotton fiber. All Rights Reserved</p>
      <span className="mx-2 hidden md:inline-block">|</span>
      <a href="#" className="text-blue-500 hover:underline mx-2">Privacy Policy</a>
      <span className="mx-2 hidden md:inline-block">|</span>
      <a href="#" className="text-blue-500 hover:underline mx-2">Terms & Conditions</a>
    </div>
  </div>
</footer>


    </>
  )
}

export default Footer