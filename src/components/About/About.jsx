import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
      <Header />
      <section className="bg-gray-50 pt-12 style">
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 sm:grid-cols-2 p-8 gap-8 items-center">
      <div className="flex justify-center sm:justify-start fade-right">
        <img className="rounded-xl shadow-xl w-full sm:max-w-md lg:max-w-lg xl:max-w-xl" src="./image/img-about-page.jpg" alt="" />
      </div>
      <div className="mr-8">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8">
          <span>About Us</span>
        </h1>
        <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-slate-700 tracking-wide font-normal">
          We take this opportunity to introduce ourselves as Swastik cotton fiber leading Manufacturers & exporters of Cotton waste & Raw Cotton from India since many years.
          <br />
          <br />
          We have been in the textile business for the last 20 years and our group has 5 Ginning plants and 2 spinning units which produce 100% cotton yarn with fully automatic technology and provide contamination controlled products.
        </p>
        <div className="rn-card mt-8">
          <div>
            <h1 className="text-lg font-medium">
              <span className="border-b-2 border-indigo-500 mt-4 hover:text-blue-900">Who we are</span>
            </h1>
            <p className="text-base leading-7 text-slate-700 tracking-wide font-normal mt-2 sm:text-lg">
              Swastik Cotton Fiber is the largest exporter of cotton waste products & Indian raw cotton, exporting to Russia, Germany, Italy, Taiwan, China, Vietnam, Portugal, Nepal, Bangladesh, etc.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <h1 className="text-lg font-medium">
              <span className="border-b-2 border-indigo-500 mt-4 hover:text-blue-900">What we do</span>
            </h1>
            <h2 className="text-base sm:text-lg leading-7 text-slate-700 tracking-wide font-normal mt-2">
              Any requirements of 100% Cotton waste like Comber Noil, Flat strips, Lickerin dropping, processed cotton etc?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  )
}

export default About