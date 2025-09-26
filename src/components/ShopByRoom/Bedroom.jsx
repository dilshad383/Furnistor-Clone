import React from 'react'
import Products from './Products'
import bedroom1 from './images/bedroom1.jpg'
import bedroom2 from './images/bedroom2.jpeg'
import bedroom3 from './images/bedroom3.jpeg'
import bedroom4 from './images/bedroom4.jpeg'
import bedroom5 from './images/bedroom5.jpeg'
import bedroom6 from './images/bedroom6.jpg'

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
]
const Bedroom = () => {
  return (
    <div>
      <Products
      sectionTitle="Bedroom"
      items={products}
      />
    </div>
  )
}

export default Bedroom
