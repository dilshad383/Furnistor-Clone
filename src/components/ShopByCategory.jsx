import React from 'react'
import category1 from '../assets/category1.jpg'
import category2 from '../assets/category2.jpeg'
import category3 from '../assets/category3.jpg'
import category4 from '../assets/category4.jpeg'
import category5 from '../assets/category5.jpg'
import category6 from '../assets/category6.jpg'
import elementor1 from '../assets/shipping.svg'
import elementor2 from '../assets/world.svg'
import elementor3 from '../assets/leaf.svg'
import elementor4 from '../assets/hammer.svg'

const shopByCategory =[
    {
    img: category1,
    title: 'Textiles'
  },
  {
    img: category2,
    title: 'Tables'
  },
  {
    img: category3,
    title: 'Table Lamps'
  },
  {
    img: category4,
    title: 'Sofas'
  },
  {
    img: category5,
    title: 'Dining Chairs'
  },
  {
    img: category6,
    title: 'Beds'
  },
]
const elements = [
  {
    img: elementor1,
    title: 'Free Shipping',
    text: 'Enjoy complimentary shipping on all orders over €150 across Europe.'
  },
  {
    img: elementor2,
    title: 'Made in Denmark',
    text: 'Our products are proudly crafted in Denmark, ensuring authenticity and quality.'
  },
  {
    img: elementor3,
    title: 'Sustainable',
    text: 'Each item is handcrafted by skilled artisans, reflecting our dedication to craftsmanship.'
  },
  {
    img: elementor4,
    title: 'Handcrafted',
    text: 'We prioritize eco-friendly materials and sustainable practices in all our designs.'
  },
]
const ShopByCategory = () => {
return (
    <div>
        <section className=" mt-6 px-8">
            <div className="pb-8">
            <h2 className='text-5xl font-light'>Shop by category </h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-12 mt-8">
                {shopByCategory.map((item, idx) => (
                <div key={idx} className="relative">
                <div className="text-white absolute z-1  left-2 text-2xl">
                    {item.title}
                </div>
                <img src={item.img} className='' alt="" />
                </div>
                ))}
            </div>
            </div>

            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {elements.map((item, index) =>(
                <div key={index} className="">
                <div className="mb-4">
                    <img src={item.img} className='w-[2.5rem]' alt="" />
                </div>
                <p className="text-xl">{item.title}</p>
                <p className='my-2'>{item.text}</p>
                </div>
            ))}
            </div>
        </section>
    </div>
)
}

export default ShopByCategory
