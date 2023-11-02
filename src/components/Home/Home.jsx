import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Tabs } from 'flowbite-react';
import { HiAdjustments, HiClipboardList, HiUserCircle } from 'react-icons/hi';
import { MdDashboard } from 'react-icons/md';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div>
      <Header />
      <section className='hero slider w-lg'>
        <div >
          <Slider {...settings}>
            <div >
              <img src="./image/swastikcottonfiber slider7.jpg" alt="" />
            </div>
            <div>
              <img src="./image/swastikcottonfiber slider5.jpg" alt="" />
            </div>
            <div>
              <img src="./image/swastikcottonfiber slider6.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <section className='bg-gray-50 pt-24 my-12' >
        <div class="max-w-screen-xl mx-auto">
          <div className='grid grid-cols-2 p-8 items-center'>
            <div className='w-10/12 ml-9'>
              <img className='rounded-xl shadow-xl w-full' src="./image/img-about-page.jpg" alt="" />
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
      <section>
        <div className='max-w-screen-xl mx-auto'>
          <div className='flex justify-center customBtn border-2 border-solid border-slate-100 my-10 '>
            <Tabs.Group className='border-0'>
              <Tabs.Item
              active
                title="cotton waste" >
               <div className='grid grid-cols-3  text-lg text-blue-900'>
                  <p className='pl-4 pr-4'>Swastik Cotton Fiber is largest exporter of cotton waste products, cotton yarn & Indian raw cotton, exporting to Russia, Germany, Italy, Taiwan, China, Vietnam, Portugal, Nepal, Bangladesh, etc. We export it with all international quality standard & compliance. We are sourcing cotton waste from renowned spinning mills and undergoing various process with strict quality control in high tech factory to produce contamination free cotton waste. Our cotton waste products have various applications in convectional and conversational industries.</p>
                  <p className='pl-4 pr-4'>We offer products with quality, purity and longevity as well as recyclable nature. Satisfying clients to the fullest, the company emphasizes on strong business network and supplying quality cotton waste products in specifications required by clients all over the world We are exporting quality cotton waste products in many countries with an experience of last 37 years as per customer requirements. We are dealing in Thread Waste, Comber Noil For Making Currency Paper, Roving Waste, Dropping, FS FLAT, Yellow Cotton, Lycrine, Recycle Cotton A/B Grade, etc.</p>
                 <img src="./image/COTTON WASTE 3.png" alt="" className='w-3/4  h-auto border-2 border-solid  border-slate-200 rounded-md p-8 ' />
               </div>
              </Tabs.Item>
              <Tabs.Item title="cotton yarn">
                <div  className='grid grid-cols-3  text-lg text-blue-900'>
                  <p className='pl-4 pr-4'>Cotton yarn is naturally soft and lustrous with a high twist finish. The fabric made from cotton yarn provides at most comfort to wear. We can use cotton fabrics in all weather conditions. It gives warmth in cold weather and cool in warm weather conditions. 100 % pure cotton yarn provides high strength to the fabrics which improves the quality of cotton garments. We provides 100% pure cotton yarn by spinning the high quality hygienic cotton. Our cotton yarn is widely used by the fabric manufacturers across the world. We supply and export yarns according to the requirement of the global clients as well as the clients around India.</p>
                  <p className='pl-4 pr-4'>Cotton fabric is the choice of all age groups starting from baby to adult. It can be used in all climates and in all trends. We offer both carded and combed yarn in various count required by our clients. We never compromise with our quality standards that vitally lead more revenue to us. Our standard reflects in our quality services and on time delivery. We provide optimum quality cotton textile yarns at the best competitive price.</p>
                  <img src="./image/products-bg.jpg" alt=""  className='w-3/4  h-auto border-2 border-solid  border-slate-200 rounded-md p-8 ' />
                </div>
              </Tabs.Item>
              <Tabs.Item title="Indian Raw Cotton">
                <div  className='grid grid-cols-3 text-lg text-blue-900'>
                  <p className='pl-4 pr-4 '>We are exporter of all types Indian Raw Cottons from various cotton from major Indian states. India has the advantage of growing all species of cotton i.e. from short staple 20mm & below, medium staple (20.5 to 24.5mm), medium long (25.0 to 27.0mm), long (27.5 to 32.0mm) and extra long staple cottons (32.5mm and above).</p>
                  <p className='pl-4 pr-4'>India produce large number of varieties and hybrids, number of varieties in cultivation exceeds seventy-five. However, 98 per cent of the production is contributed by about 25 varieties. In India, the states of Gujarat, Maharashtra, Andhra Pradesh and also Madhya Pradesh are the leading cotton producing states. These states have a predominantly tropical wet and dry climate.</p>
                  <img src="./image/Masthead-Cotton.png" alt="" className='w-3/4  h-auto border-2 border-solid  border-slate-200 rounded-md p-8'  />
                </div>
              </Tabs.Item>
            </Tabs.Group>
          </div>
        </div>

      </section>
      <div>

      </div>
      <Footer />
    </div>
  )
}

export default Home