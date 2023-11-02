import React from 'react'
import { Link, useLocation } from 'react-router-dom/cjs/react-router-dom.min'
const Header = () => {
  const location = useLocation()
  console.log(location.pathname);
  return (

    <header classNameName='overflow-x-auto' >
      <nav className="border-gray-200 dark:bg-black-900 bg-slate-50 fixed top-0	right-0 left-0  z-10">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="" className="flex items-center">
            <img src="./image/Swastik Logo.png" className="mr-3 w-64 h-16" alt="" />
          </a>
          <div className="flex items-center md:order-2">
            <button type="button" data-dropdown-toggle="language-dropdown-menu" className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-gray-900 dark:text-white rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5 mr-2 rounded-full" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink" viewBox="0 0 3900 3900"><path fill="#b22234" d="M0 0h7410v3900H0z" /><path d="M0 450h7410m0 600H0m0 600h7410m0 600H0m0 600h7410m0 600H0" stroke="#fff" stroke-width="300" /><path fill="#3c3b6e" d="M0 0h2964v2100H0z" /><g fill="#fff"><g id="d"><g id="c"><g id="e"><g id="b"><path id="a" d="M247 90l70.534 217.082-184.66-134.164h228.253L176.466 307.082z" /><use xlink: href="#a" y="420" /><use xlink: href="#a" y="840" /><use xlink: href="#a" y="1260" /></g><use xlink: href="#a" y="1680" /></g><use xlink: href="#b" x="247" y="210" /></g><use xlink: href="#c" x="494" /></g><use xlink: href="#d" x="988" /><use xlink: href="#c" x="1976" /><use xlink: href="#e" x="2470" /></g></svg>
              English (US)
            </button>
            <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700" id="language-dropdown-menu">
            </div>
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 text-lg" id="navbar-language">
            <ul className="flex flex-col font-medium p-4  md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className={location.pathname == "/" ? "text-blue-900 " : ""}>Home</Link>
              </li>
              <li>
                <Link to="/about" className=
                  {location.pathname == "/about" ? "text-blue-900 hover:text-blue-900" : ""}>About Us</Link>
              </li>
              <li>
                <Link to="/products" className={location.pathname == "/products" ? "text-blue-900 hover:text-blue-900" : ""}>Products</Link>
              </li>
              <li>
                <Link to="/contact" className={location.pathname == "/contact" ? "text-blue-900 hover:text-blue-900" : ""}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
     
    </header>
  )
}

export default Header