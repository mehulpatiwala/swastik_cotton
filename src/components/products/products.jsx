import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import { FaCaretRight } from "react-icons/fa";

const Products = () => {
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
      <section className='hero slider'>
        <div >
          <Slider {...settings}>
            <div >
              <img src="./public/image/banner-1.jpg" alt="" />
            </div>
            <div>
              <img src="./public/image/banner-4.jpg" alt="" />
            </div>
            <div>
              <img src="./public/image/banner-3.jpg" alt="" />
            </div>
          </Slider>
        </div>
      </section>
      {/* mid section */}
      <section className='py-10'>
        <div className="max-w-screen-xl mx-auto">
          <h1 className='mb-10 inline-block text-3xl font-semibold  border-b-4 border-blue-900'> All Products</h1>
          <div className='mid_cnt_main flex'>
            <div className='w-3/12'>
              <h1 className='py-2.5 px-6 bg-blue-900 text-white text-2xl font-semibold uppercase rounded-tl-3xl'>Product</h1>
              <div className='mt-5'>
                <ul className='py-2.5 px-5 bg-blue-100 text-xl'>
                  <li className='py-2'><a href="">Cotton Waste</a></li>
                  <li className='py-2'><a href="">Cotton Yarn</a></li>
                  <li className='py-2'><a href="">Indian Raw Cotton</a></li>
                </ul>
              </div>
            </div>
            <div className='my-products-right pl-12 w-9/12'>
              <div className="myproductdetails ">
                <h2 className='bg-blue-900 text-white rounded-tr-3xl py-2.5 px-5 text-2xl uppercase font-semibold'>
                  Cotton Comber Noil
                </h2>
              </div>
              <div className='products-bottom mt-5 mb-10'>
                <img src="./public/image/products-bottom.jpg" alt="" className='border-8  border-blue-900' />
                <div className='product-description'>
                  <p className='py-5 px-5 border-30 border-emerald-100 text-lg font-normal text-dark leading-10'>Cotton Comber Noil is one of the finest qualities of cotton waste. Comber Noil is a by- product of the combed cotton yarn spinning industry produced when cotton is combed to remove short fibres. We provide the best quality of comber Noil which is defect free and pure cotton.</p>
                </div>
                <div className='product-description  border-8 border-emerald-100  '>
                  <h3 className='bg-yellow-200 rounded-tr-xl rounded-tl-xl py-1 px-2 text-lg uppercase font-semibold '>Features</h3>
                  <ul className='py-4 text-xl font-normal'>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' /> Trash Free/controlled/restricted</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />It is Pure.</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />Light weight & sustainable.</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />Available in Standard Export Packing Bales 160 kg to 170 kg.</li>
                  </ul>
                </div>
                <div className='myProductspec border-8 border-emerald-100 '>
                  <h3 className='bg-yellow-200 rounded-tr-xl rounded-tl-xl   py-1 px-2 text-lg uppercase font-semibold '>Specification</h3>
                  <div>
                    <table className="w-full  border-collapse border border-slate-400 text-lg">
                      <tbody>
                        <tr className='border border-slate-300 '>
                          <td className='border border-slate-300 p-2 bg-blue-50 text-blue-900 font-semibold '>Verity</td>
                          <td className='border border-slate-300 p-2 text-blue-900 font-semibold'>Comber</td>
                        </tr>
                        <tr className='border border-slate-300'>
                          <td className='border border-slate-300 p-2 bg-blue-50'>Length</td>
                          <td className='border border-slate-300 p-2'>15 to 21 m.m.</td>
                        </tr>
                        <tr className='border border-slate-300'>
                          <td className='border border-slate-300 p-2 bg-blue-50'>Strength</td>
                          <td className='border border-slate-300 p-2'>17 to 19</td>
                        </tr>
                        <tr className='border border-slate-300'>
                          <td className='border border-slate-300 p-2 bg-blue-50'>Mic.</td>
                          <td className='border border-slate-300 p-2'>2.5 to 3.5</td>
                        </tr>
                        <tr className='border border-slate-300'>
                          <td className='border border-slate-300 p-2 bg-blue-50'>Trash</td>
                          <td className='border border-slate-300 p-2'>0%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className='product-description-2  border-30 border-emerald-100  '>
                  <h3 className='bg-yellow-200 rounded-tr-xl rounded-tl-xl py-1 px-2 text-lg uppercase font-semibold '>Application</h3>
                  <ul className='py-4 text-xl font-normal'>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />Making of Pharmaceutical and surgical cotton.</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />Used in making cotton balls, cotton pads and cotton buds.</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />It is also used in making yarn in Open-End spinning mills.</li>
                    <li className='flex py-1.5 px-3'><FaCaretRight className='mt-1 text-blue-900' />Cosmetics</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default Products