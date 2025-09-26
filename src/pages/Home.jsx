import React from 'react'
import BackgroundVideo from '../components/BackgroundVideo'

import img1 from '../assets/living-room.jpg'
import img2 from '../assets/bedroom.jpg'
import img3 from '../assets/dining-room.jpg'
import img4 from '../assets/home-decor.jpeg'
import img5 from '../assets/lighting.jpg'
import img6 from '../assets/outdoor.jpg'
import sectionimg1 from '../assets/section-img1.jpg'
import sectionimg2 from '../assets/section-img2.jpg'
import collection1 from '../assets/collection1.jpg'
import collection2 from '../assets/collection2.jpg'


import journal1 from '../assets/journal1.jpeg'
import journal2 from '../assets/journal2.jpeg'
import journal3 from '../assets/journal3.jpeg'
import { GoArrowRight } from 'react-icons/go';
import Faq from '../components/Faq';
import ShopByCategory from '../components/ShopByCategory';
import ShopByRoom from '../components/ShopByRoom';

import { Link } from 'react-router-dom'
import Categories from '../components/Categories'
const category = [
  {
    img: img1,
    title: 'Living Room'
  },
  {
    img: img2,
    title: 'Bedroom'
  },
  {
    img: img3,
    title: 'Dining Room'
  },
  {
    img: img4,
    title: 'Home Decor'
  },
  {
    img: img5,
    title: 'Lighting'
  },
  {
    img: img6,
    title: 'Outdoor'
  },
]

const journal = [
  {
    img: journal1,
    text: 'Why fewer, better pieces still matter',
    pill: 'July 8, 2025'
  },
  {
    img: journal2,
    text: 'Corners, curves, and the geometry of calm',
    pill: 'June 15, 2025'
  },
  {
    img: journal3,
    text: 'Soft light, hard edges',
    pill: 'May 9, 2025'
  }
]

const Home = () => {

  return (
    <>
{/* Hero section */}
      <div className="relative">
        {/* <BackgroundVideo /> */}
      </div>

      <section className="bg-[#e9e6e3] px-14 py-8">
        <Categories 
        items={category}
        sectionTitle="Shop by Room"
        />

        <div className="grid lg:grid-cols-2  gap-6 mt-6">
          <div className="">
            <div className="row-start-1 row-end-3 col-start-1 col-end-2">
              <img src={sectionimg1} className='aspect-square' alt="" />
            </div>
            <div className="row-start-1 row-end-2 col-start-1 col-end-2 mt-6">
              <h2 className="text-5xl font-light mb-6">
                Made with Care for a Cleaner Future
              </h2>
              <p>
                At Furnistør, we prioritize eco-friendly materials and ethical production practices in every aspect of our business. Our unwavering commitment to sustainability ensures that every piece of furniture we create is not only beautiful and stylish but also made with a sense of responsibility towards the environment.
              </p>
              <p>
                We believe that our choices impact the planet, and we strive to make a positive difference through our high-quality designs. By selecting sustainable resources and promoting fair trade, we aim to deliver products that our customers can feel proud to own.
              </p>
            </div>
          </div>
          <div className="max-lg:flex flex-col">
            <div className="row-start-3 row-end-4 col-start-1 col-end-2 max-lg:order-2">
              <h2 className="text-5xl font-light max-lg:my-4 mb-6">
                The Art of Furniture Making
              </h2>
              <p>
                Every Furnistør piece begins with a simple belief: exceptional furniture requires exceptional care. Our artisans spend years perfecting their craft, ensuring that each table, chair, and cabinet meets the exacting standards that have defined Scandinavian design for generations.
              </p>
              <p>
                The result? Furniture that improves with age, grows more beautiful with time, and becomes an integral part of your home’s story.
              </p>
            </div>
            <div className="row-start-2 row-end-4 col-start-2 col-end-3 lg:mt-6 max-lg:order-1">
              <img src={sectionimg2} className='aspect-square' alt="" />
            </div>
          </div>
        </div>
      </section>

{/* Explore Products */}
      <ShopByRoom/>

{/* Shop Collection */}
      <section className="bg-[#111] grid lg:grid-cols-2 gap-8 px-8 py-4">
        <div className="grid grid-cols-2 gap-4 ">
          <img src={collection1} alt="" />
          <img src={collection2} alt="" />
        </div>
        <div className="!text-white mt-auto">
          <h2 className="text-6xl font-light">
            The Lounge Edit
          </h2>
          <p className='!text-white my-4'>Unwind in style. Discover our handpicked selection of sofas, lounge chairs, and coffee tables designed for effortless comfort and timeless appeal.</p>
          <button className="border my-4 px-2 py-1">Shop Collection</button>
        </div>
      </section>

{/* Shop by category */}
        <ShopByCategory/>

{/* from our journal */}
            <section className="px-8 py-12 bg-[#e9e6e3]">
                <div className="flex justify-between pb-6">
                  <h2 className="text-4xl font-light">
                    From our journal
                  </h2>
                  <button className="border px-3 py-2 flex items-center gap-2 rounded-xs hover:text-white hover:bg-[#111] transition-all delay-75 cursor-pointer">
                    View More <GoArrowRight />
                  </button>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  {journal.map((item, idx)=> (
                    <div key={idx} className="">
                      <div className='aspect-video overflow-hidden'>
                        <img  src={item.img} alt="" />
                      </div>
                      <h3 className="text-lg font-light py-4 hover:text-[#fc6b00] cursor-pointer">{item.text}</h3>

                      <div className="inline-block py-1 px-2 border rounded-3xl text text-sm">
                        {item.pill}
                      </div>
                    </div>
                  ))}
                </div>
            </section>

{/* FAQS */}
            <section className="py-8 px-6 md:px-14 md:py-12">
              <div className="grid lg:grid-cols-2">
                <h3 className="text-3xl md:ml-12 md:my-12 lg:text-5xl md:w-[5rem] font-light">
                  Frequently Asked Questions
                </h3>
                <Faq/>
              </div>
            </section>
    </>


  )
}

export default Home
