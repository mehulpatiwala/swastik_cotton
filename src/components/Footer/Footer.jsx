import React from 'react'
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className='footer relative'>
        <div className='grid grid-cols-2 items-end'>
          <div className='col-span-1 pl-0 pr-0 relative'>
            <div className='footer-left w-full h-full px-36 py-36'>
              <div class="inner relative z-10">
                <span className='text-white text-base mt-4 tracking-widest uppercase'>Awaiting for your positive reply.</span>
                <h2 className='text-7xl font-extrabold text-white leading-tight '>Let's get to Connect...</h2>
                <a class="text-white inline-block" href="https://swastikcottonfiber.com/contact/">
                  <span className='py-4 px-12 mt-6 border-2 inline-block  rounded tracking-widest text-lg hover:bg-slate-50 text-white font-medium hover:text-emerald-500'>CONTACT US</span>
                </a>
              </div>
            </div>
          </div>

          <div className='col-span-1 relative'>
            <div className='footer-right w-full h-full  px-20 py-44  bg-slate-800'>
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <div className="footer-widget text-white opacity-75">
                    <h4 className=' mb-8 text-2xl font-medium'>Quick Link</h4>
                    <div className="menu-quick my-3.5 mx-0">
                      <ul className='text-lg font-medium '>
                        <li><a href="p-4 ">Contact Us</a></li>
                        <li><a href="p-4 ">Privacy Policy</a></li>
                        <li><a href="p-4 ">About Us</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='col-span-1'>
                  <div className="footer-widget-2 text-white opacity-75">
                    <h4 className='font-bold text-xl mb-8 '>Say Hello</h4>
                    <div className='mail text-lg '>
                      <ul>
                        <li><a href="">swastikcottonfiber@gmail.com</a></li>
                      </ul>
                    </div>
                    <div className='social-share-inner mt-8'>
                      <ul>
                        <li><a href=""></a><FaLinkedinIn /></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer