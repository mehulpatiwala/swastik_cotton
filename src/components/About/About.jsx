import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <>
      <Header />
      <section className='bg-gray-50 pt-24' >
        <div className="max-w-screen-xl mx-auto">
          <div className='grid grid-cols-2 p-8 items-center'>
            <div className='w-10/12 ml-9'>
              <img className='rounded-xl shadow-xl w-full' src="./public/image/img-about-page.jpg" alt="" />
            </div>
            <div className='mr-8'>
              <h1 className='text-7xl font-bold mb-8'>
                <span>About-us</span>
              </h1>
              <p className='text-xl leading-8 text-slate-700 tracking-wide font-normal'>We take this opportunity to introduce ourselves as Swastik<br /> cotton fiber leading Manufacturers & exporter of Cotton <br />waste & Raw Cotton from India since last many years.
                <br />
                <br />
                We are into textile bussiness since last 20 years and our <br /> group has 5 Ginning plant and 2 spinning unit which  <br />produce 100% cotton yarn with fully automatic technology <br /> and giving contamination controlled products.
              </p>
              <div className='rn-card'>
                <div>
                  <h1 className='mt-10 text-lg font-medium'>
                    <span className=' border-b-2 border-indigo-500 mt-4 hover:text-blue-900'>Who we are</span></h1>
                  <p className='text-xl leading-8 text-slate-700 tracking-wide font-normal'>Swastik Cotton Fiber is largest exporter of cotton waste <br /> products & Indian raw cotton, exporting to Russia, Germany,  Italy, Taiwan, China, Vietnam, Portugal, Nepal, Bangladesh, etc.</p>
                </div>
                <div>
                  <h1 className='mt-10 text-lg font-medium'>
                    <span className=' border-b-2 border-indigo-500 mt-4 hover:text-blue-900'>What we do</span></h1>
                  <h2 className='text-xl mt-2 leading-8 text-slate-700 tracking-wide font-normal'>Any requirements of 100% Cotton waste like Comber Noil, Flat strips, Lickrin dropping, processes cotton etc?</h2>
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