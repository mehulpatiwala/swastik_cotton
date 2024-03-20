import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-300 py-16">
        <div class='mb-12 text-center'>
          <h1 class='text-2xl text-gray-600 mb-4'>Contact</h1>
          <p class='text-3xl normal-case font-extralight md:text-4xl lg:text-4xl' style={{ fontFamily: "cursive" }}>
            Need Help? <span class='text-red-600 font-extralight'>Contact Us</span>
          </p>
        </div>

        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="md:col-span-2">
              <iframe
                title="Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5537.7475744939275!2d71.73784177834767!3d22.12585624194664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958c513ab8efcb1%3A0xdf0ff248216c159e!2sSwastik%20Cotton%20Fiber!5e0!3m2!1sen!2sus!4v1710825283396!5m2!1sen!2sus"
                className="w-full h-full md:h-auto"
                style={{ minHeight: "500px" }}
                loading="lazy"
              ></iframe>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-600 mb-4">Feel free to get in touch with us. We are available 24/7 to answer your questions.</p>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14"></path>
                </svg>
                <p className="text-gray-600">Sr. No.25/1, Nr Triveni Ashram, Botad-Bhavnagar Road, <br /> Samadhiyala No.1, Botad, Gujarat 364710, India</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14"></path>
                </svg>
                <p className="text-gray-600">user@example.com</p>
              </div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v14M5 12h14"></path>
                </svg>
                <p className="text-gray-600">+91 2132157891</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Form</h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-600">Name</label>
                  <input type="text" id="name" name="name" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-600">Email</label>
                  <input type="email" id="email" name="email" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-600">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-400"></textarea>
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}

export default Contact;
