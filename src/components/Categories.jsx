import React from 'react'
import { Link } from 'react-router-dom'

const Categories = ({sectionTitle, items}) => {
  return (
    <div className='bg-[#e9e6e3]'>
        <div className="pb-8">
            <h2 className='text-5xl font-light'>{sectionTitle}</h2>
            <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-12 pt-8">
            {items.map((item, idx) => (
                <Link key={idx} 
                to={`/category/${item.title.replace(/\s+/g, '-').toLowerCase()}`}
                className="relative">
                <div className="text-white absolute z-1  left-2 text-2xl">
                {item.title}
                </div>
                <div className="overflow-hidden  cursor-pointer">
                <img className="hover:scale-[1.1] brightness-90 transition-all duration-200 ease-in hover:brightness-100" src={item.img} alt="" />
                </div>
            </Link>
            ))}
            </div>

        </div>
    </div>
  )
}

export default Categories
