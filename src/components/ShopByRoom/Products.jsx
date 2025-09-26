import React, { useState, useContext } from 'react'
import CartContext from "../CartContext";
import { LuHeart } from 'react-icons/lu';
import { FiPlus } from 'react-icons/fi';

const LivingRoom = ({sectionTitle, items}) => {
    const [likedItems, setLikedItems] = useState(
    Array(items.length).fill(false)
    );

    const toggleLike = (idx) => {
    const updated = [...likedItems];
    updated[idx] = !updated[idx];
    setLikedItems(updated);
    };

    const { addToCart } = useContext(CartContext);
const handleAddToCart = (item) => {
addToCart({ ...item, quantity: 1 });

}
return (
<div>
    <section className="bg-[#e9e6e3] px-14 py-8">
            <h2 className="text-5xl font-light">{sectionTitle}</h2>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 my-4">
            {items.map((item, idx) => (
                <div id={idx} className="group" key={idx}>
                <div className="h-70">
                    <img
                    src={item.img}
                    className="object-cover w-full h-full object-center"
                    alt=""
                    />
                </div>
                <div className="">
                    <div className="flex justify-between pt-2 items-center">
                    <p className="text-lg">{item.title}</p>
                    {likedItems[idx] ? (
                        <IoMdHeart
                        className="text-red-500 cursor-pointer"
                        size={20}
                        onClick={() => toggleLike(idx)}
                        />
                    ) : (
                        <LuHeart
                        className="cursor-pointer"
                        size={20}
                        onClick={() => toggleLike(idx)}
                        />
                    )}
                    </div>
                    <div className="text-sm">
                    <div className="flex gap-2 text-[#383733] transition-all duration-300 opacity-100 max-h-10 group-hover:opacity-0 group-hover:max-h-0 overflow-hidden">
                        <p>{item.price}</p>
                        <p className="line-through">{item.initPrice}</p>
                    </div>
                    <div
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center text-[#383733] cursor-pointer hover:text-[#fc6b00] transition-all duration-300 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
                    >
                        <FiPlus />
                        <p className="hover:text-[#fc6b00]"> Add to cart</p>
                    </div>
                    </div>
                </div>
                </div>
            ))}
            </div>
            </section>
    </div>
    )
}

export default LivingRoom
