import React from 'react'
import Products from './Products'
import livingRoom1 from './images/living-room1.jpeg'
import livingRoom2 from './images/living-room2.jpeg'
import livingRoom3 from './images/living-room3.jpeg'
import livingRoom4 from './images/living-room4.jpeg'
import livingRoom5 from './images/living-room5.jpeg'
import livingRoom6 from './images/living-room6.jpeg'

const products =[
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
    },
]


const LivingRoom = () => {
return (
    <div>
        <Products
        sectionTitle="Living Room"
        items={products}
        />
    </div>
)
}

export default LivingRoom
