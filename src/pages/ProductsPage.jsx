import React from 'react'
import Categories from '../components/Categories'
import Products from '../components/ShopByRoom/Products'
import img1 from '../assets/living-room.jpg'
import img2 from '../assets/bedroom.jpg'
import img3 from '../assets/dining-room.jpg'
import img4 from '../assets/home-decor.jpeg'
import img5 from '../assets/lighting.jpg'
import img6 from '../assets/outdoor.jpg'
import bedroom1 from '../components/ShopByRoom/images/bedroom1.jpg'
import bedroom2 from '../components/ShopByRoom/images/bedroom2.jpeg'
import bedroom3 from '../components/ShopByRoom/images/bedroom3.jpeg'
import bedroom4 from '../components/ShopByRoom/images/bedroom4.jpeg'
import bedroom5 from '../components/ShopByRoom/images/bedroom5.jpeg'
import bedroom6 from '../components/ShopByRoom/images/bedroom6.jpg'
import livingRoom1 from '../components/ShopByRoom/images/living-room1.jpeg'
import livingRoom2 from '../components/ShopByRoom/images/living-room2.jpeg'
import livingRoom3 from '../components/ShopByRoom/images/living-room3.jpeg'
import livingRoom4 from '../components/ShopByRoom/images/living-room4.jpeg'
import livingRoom5 from '../components/ShopByRoom/images/living-room5.jpeg'
import livingRoom6 from '../components/ShopByRoom/images/living-room6.jpeg'

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
const products =[
  {
      img: bedroom1,
      title: "Compact Wood Nightstand",
      price: "$290.00",
  },
  {
      img: bedroom2,
      title: "Round Bedside Table",
      price: "$499.00",
  },
  {
      img: bedroom3,
      title: "Sliding Wood Wardrobe",
      price: "$1,200.00",
  },
  {
      img: bedroom4,
      title: "Oak Bedside Table",
      price: "$270.00",
  },
  {
      img: bedroom5,
      title: "Minimalist Oak Table",
      price: "$245.00",
  },
  {
      img: bedroom6,
      title: "Double Fabric Bed",
      price: "$2,480.00",
  },
  {
          img: livingRoom1,
          title: "Geometric Sideboard",
          price: "$9,879.00",
      },
      {
          img: livingRoom2,
          title: "Linen Rocking Armchair",
          price: "$599.00",
      },
      {
          img: livingRoom3,
          title: "Glass Display Sideboard",
          price: "$1,389.00",
      },
      {
          img: livingRoom4,
          title: "Minimalist Sideboard",
          price: "$799.00",
      },
      {
          img: livingRoom5,
          title: "Compact Club Armchair",
          price: "$2,779.00",
      },
      {
          img: livingRoom6,
          title: "Compact Bouclé Sofa",
          price: "$1,650.00",
      }
]
const ProductsPage = () => {
  return (
    <div className='bg-[#e9e6e3]'>
      <div className="px-8 max-md:px-4">
        <Categories
        sectionTitle=""
        items={category}
      />
      </div>
      <Products
        items={products}
      />
    </div>
  )
}

export default ProductsPage
