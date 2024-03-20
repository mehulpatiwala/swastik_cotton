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
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 370, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div>
      <Header />
      <section className='carousel hero slider'>
        <div  >
          <Slider {...settings}>
            <div >
              <img src="./image/swastikcottonfiber slider10.jpg" alt=""  />
            </div>
            <div >

              <img src="./image/swastikcottonfiber slider7.jpg" alt="" />
            </div>
            <div >

              <img src="./image/swastikcottonfiber slider4.jpg" alt="" />
            </div>
            <div >

              <img src="./image/swastikcottonfiber slider3.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
      <section className='bg-gray-50 pt-12 my-12'>
  <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className='grid grid-cols-1 sm:grid-cols-2 p-8 gap-8 items-center'>
      <div className='flex justify-center sm:justify-start fade-right'>
        <img className='rounded-xl shadow-xl w-full sm:max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl' src="./image/img-about-page.jpg" alt="" />
      </div>
      <div className='flex flex-col justify-center'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8'>
          <span>About Us</span>
        </h1>
        <p className='text-lg sm:text-xl leading-7 sm:leading-8 text-slate-700 tracking-wide font-normal'>
          We take this opportunity to introduce ourselves as Swastik cotton fiber leading Manufacturers & exporters of Cotton waste & Raw Cotton from India since last many years. We are into textile business for the last 20 years and our group has 5 Ginning plants and 2 spinning units which produce 100% cotton yarn with fully automatic technology and give contamination-controlled products.
        </p>
        <div className='rn-card mt-8'>
          <div>
            <h1 className='text-lg font-medium'>
              <span className='border-b-2 border-indigo-500 mt-4 hover:text-blue-900'>Who we are</span>
            </h1>
            <p className='text-base leading-7 text-slate-700 tracking-wide font-normal mt-2 sm:text-lg'>
              Swastik Cotton Fiber is the largest exporter of cotton waste products & Indian raw cotton, exporting to Russia, Germany, Italy, Taiwan, China, Vietnam, Portugal, Nepal, Bangladesh, etc.
            </p>
          </div>
          <div className="mt-6 sm:mt-8">
            <h1 className='text-lg font-medium'>
              <span className='border-b-2 border-indigo-500 mt-4 hover:text-blue-900'>What we do</span>
            </h1>
            <h2 className='text-base sm:text-lg leading-7 text-slate-700 tracking-wide font-normal mt-2'>
              Any requirements of 100% Cotton waste like Comber Noil, Flat strips, Lickerin dropping, processed cotton etc?
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="px-4 py-8 sm:px-6 lg:px-8">
  <div className="max-w-screen-xl mx-auto">
    <div className="flex justify-center sm:justify-start">
      <div className="customBtn border-2 border-solid border-slate-100 my-10">
        <Tabs.Group className="border-0">
          <Tabs.Item active title="Cotton Waste ">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
              <p className="sm:col-span-2 pl-4 pr-4">Swastik Cotton Fiber is the largest exporter of cotton waste products, cotton yarn & Indian raw cotton, exporting to Russia, Germany, Italy, Taiwan, China, Vietnam, Portugal, Nepal, Bangladesh, etc. We export it with all international quality standards & compliance. We source cotton waste from renowned spinning mills and undergo various processes with strict quality control in high-tech factories to produce contamination-free cotton waste. Our cotton waste products have various applications in conventional and conversational industries.</p>
              <p className="sm:col-span-2 pl-4 pr-4">We offer products with quality, purity, and longevity as well as recyclable nature. Satisfying clients to the fullest, the company emphasizes a strong business network and supplying quality cotton waste products in specifications required by clients all over the world. We are exporting quality cotton waste products to many countries with 37 years of experience as per customer requirements. We deal in Thread Waste, Comber Noil For Making Currency Paper, Roving Waste, Dropping, FS FLAT, Yellow Cotton, Lycrine, Recycle Cotton A/B Grade, etc.</p>
              <img src="./image/COTTON WASTE 3.png" alt="" className="sm:col-span-1 w-full h-auto border-2 border-solid border-slate-200 rounded-md p-8 fade-right" />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Cotton Yarn">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
              <p className="sm:col-span-2 pl-4 pr-4">Cotton yarn is naturally soft and lustrous with a high twist finish. The fabric made from cotton yarn provides utmost comfort to wear. We can use cotton fabrics in all weather conditions. It gives warmth in cold weather and cool in warm weather conditions. 100% pure cotton yarn provides high strength to the fabrics, which improves the quality of cotton garments. We provide 100% pure cotton yarn by spinning high-quality hygienic cotton. Our cotton yarn is widely used by fabric manufacturers across the world. We supply and export yarns according to the requirement of global clients as well as clients around India.</p>
              <p className="sm:col-span-2 pl-4 pr-4">Cotton fabric is the choice of all age groups starting from baby to adult. It can be used in all climates and in all trends. We offer both carded and combed yarn in various counts required by our clients. We never compromise with our quality standards that vitally lead to more revenue for us. Our standard reflects in our quality services and on-time delivery. We provide optimum quality cotton textile yarns at the best competitive price.</p>
              <img src="./image/products-bg.jpg" alt="" className="sm:col-span-1 w-full h-auto border-2 border-solid border-slate-200 rounded-md p-8 fade-right" />
            </div>
          </Tabs.Item>
          <Tabs.Item title="Indian Raw Cotton">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
              <p className="sm:col-span-2 pl-4 pr-4">We are exporters of all types of Indian Raw Cotton from various cotton from major Indian states. India has the advantage of growing all species of cotton, i.e., from short staple 20mm & below, medium staple (20.5 to 24.5mm), medium-long (25.0 to 27.0mm), long (27.5 to 32.0mm), and extra-long staple cottons (32.5mm and above).</p>
              <p className="sm:col-span-2 pl-4 pr-4">India produces a large number of varieties and hybrids; the number of varieties in cultivation exceeds seventy-five. However, 98 percent of the production is contributed by about 25 varieties. In India, the states of Gujarat, Maharashtra, Andhra Pradesh, and also Madhya Pradesh are the leading cotton-producing states. These states have a predominantly tropical wet and dry climate.</p>
              <img src="./image/Masthead-Cotton.png" alt="" className="sm:col-span-1 w-full h-auto border-2 border-solid border-slate-200 rounded-md p-8 fade-right" />
            </div>
          </Tabs.Item>
        </Tabs.Group>
      </div>
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