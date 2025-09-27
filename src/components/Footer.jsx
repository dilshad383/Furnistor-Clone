import React from 'react'
import { Link } from 'react-router-dom';
import figure1 from '../assets/fsc-logo.svg'
import figure2 from '../assets/nordic-swan.svg'
import { LuInstagram } from 'react-icons/lu';
import { AiFillPinterest } from 'react-icons/ai';
import { IoLogoFacebook } from 'react-icons/io';
import { SiHouzz } from 'react-icons/si';
const Footer = () => {
  return (
    <div className='pb-8 mt-6'>
      <div className="relative h-[15rem] overflow-hidden">
        <div 
        className="contact-bg grid grid-cols-2 gap-4 text-white px-6 py-14 ">
          <div className="">
            <h5 className="text-5xl max-md:text-3xl font-light py-2 ">Stay Inspired</h5>
            <p className='max-md:text-sm'>Subscribe to receive updates on new posts, exclusive offers, and special content just for you. </p>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <input className='bg-white text-black placeholder-gray-500 px-4 py-2' type="email" name="" id="" placeholder='E-mail' />
            <button className="bg-[#111] text-white px-4 py-2">Subscribe</button>
          </div>
        </div>

      </div>
      <div className="grid lg:grid-cols-3 py-4 px-6">
        <div className="">
          <h1 className="text-4xl font-light">
            Handcrafted in København
          </h1>
          <p className='my-3'>
            Pilestæde 45, 1st Floor,
            1112 Copenhagen, Denmark
          </p>
          <div className="flex gap-4 pb-4">
            <img className='w-2/20' src={figure1} alt="" />
            <img className='w-2/20' src={figure2} alt="" />
          </div>
        </div>
        <div className="col-span-2 grid lg:grid-cols-4 max-lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-light mb-4">
              Collections
            </h6>
            <Link to="">Products</Link>
            <Link to="">New Arrivals</Link>
            <Link to="">Categories</Link>
            <Link to="">Gift Cards</Link>
            <Link to="">Bestseller Collection</Link>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-light mb-4">
              Cutomer Care
            </h6>
            <Link to="">Cutsomer Care</Link>
            <Link to="">Shipping</Link>
            <Link to="">Refunds & Returns</Link>
            <Link to="">Product Care</Link>
            <Link to="">Warranty</Link>
            <Link to="">Ters of Service</Link>
            <Link to="">Privacy Policy</Link>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-light mb-4">
              About Us
            </h6>
            <Link to="">Our Story</Link>
            <Link to="">Certifications</Link>
            <Link to="">Journal</Link>
            <Link to="">Careers</Link>
            <Link to="">Contact</Link>
            <Link to="">Sutainability</Link>
          </div>
          <div className="flex flex-col gap-1">
            <h6 className="text-2xl font-light mb-4">
              Stay Connected
            </h6>
            <p>Get exclusive updates, design tips, and previews of our newest collections.</p>

            <div className="flex gap-4 my-2">
              <LuInstagram />
              <AiFillPinterest />
              <IoLogoFacebook />
              <SiHouzz />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
