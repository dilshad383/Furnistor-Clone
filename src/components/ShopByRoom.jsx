import React, { useState, useContext } from "react";
import CartContext from "../components/CartContext";
import product1 from "../assets/product-img1.jpg";
import product2 from "../assets/product-img2.jpg";
import product3 from "../assets/product-img3.jpeg";
import product4 from "../assets/product-img4.jpeg";
import product5 from "../assets/product-img5.jpeg";
import product6 from "../assets/product-img6.jpg";
import product7 from "../assets/product-img7.jpeg";
import product8 from "../assets/product-img8.jpeg";
import { LuHeart } from "react-icons/lu";
import { IoMdHeart } from "react-icons/io";
import { FiMinus, FiPlus } from "react-icons/fi";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const products = [
  {
    img: product1,
    title: "Compact Wood Nightstand",
    initPrice: "",
    price: "$290.00",
  },
  {
    img: product2,
    title: "Steel Garden Armchair",
    initPrice: "",
    price: "$475.00",
  },
  {
    img: product3,
    title: "Tact Mirror",
    initPrice: "$245.00",
    price: "$199.00",
  },
  {
    img: product4,
    title: "Linen Rocking Armchair",
    initPrice: "",
    price: "$599.00",
  },
  {
    img: product5,
    title: "Linterna Wall Lamp",
    initPrice: "",
    price: "$150.00",
  },
  {
    img: product6,
    title: "Round Bedside Table",
    initPrice: "$880.00",
    price: "$499.00",
  },
  {
    img: product7,
    title: "Glass Display Sideboard",
    initPrice: "",
    price: "$1389.00",
  },
  { img: product8, title: "Vosco Lamp", initPrice: "", price: "$450.00" },
];

const ShopByRoom = () => {
  const [likedItems, setLikedItems] = useState(
    Array(products.length).fill(false)
  );

  const toggleLike = (idx) => {
    const updated = [...likedItems];
    updated[idx] = !updated[idx];
    setLikedItems(updated);
  };



  const [sidePanelOpen, setSidePanelOpen] = useState(false)
  const { addToCart, cart, updateQuantity, removeFromCart } = useContext(CartContext);
  const handleAddToCart = (item) => {
    addToCart({ ...item, quantity: 1 });
    setSidePanelOpen(true);
  }

  // Helper to parse price string to number
const parsePrice = (price) => {
  if (!price) return 0;
  const num = Number(String(price).replace(/[^\d.]/g, ""));
  return isNaN(num) ? 0 : num;
};
// Calculate subtotal for all items
const totalItemPrice = cart.reduce(
  (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
  0
);


  return (
    <div>
        {/* Side Panel */}
<div
  className={`fixed top-0 right-0 h-full  w-100 bg-[#e9e6e3] shadow-lg z-50 transform transition-transform duration-300 ${sidePanelOpen ? "translate-x-0" : "translate-x-full"}`}
>
  <div className="flex justify-between items-center p-4 border-b border-white">
  <h3 className="text-xl tracking-wide font-light">Your cart ({cart.reduce((sum, item) => sum + (item.quantity || 1), 0)} items)</h3>
    <button onClick={() => setSidePanelOpen(false)} className="text-2xl font-light cursor-pointer">&times;</button>
  </div>
  <div className="p-4  h-[74%]">
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item, idx) => (
          <li key={idx} className="">
            <div className="flex items-center gap-4 py-2 group">
              <div className="relative">
                  <img src={item.img} alt={item.title} className="w-16 h-16 object-cover rounded" />
                  <MdCancel onClick={() => removeFromCart(idx)} className="absolute  -top-2 -left-2 bg-white rounded-full cursor-pointer text-xl"/>
              </div>
              <div className="flex-1">
                <div className="">{item.title}</div>
                <div className="text-sm text-gray-500">{item.price}</div>
                <div className="flex items-center gap- mt-1 border bg-white border-gray-300 w-[4.5rem] text-sm rounded-xs">
                  <button
                    className="px-2 py-1"
                    onClick={() => updateQuantity(idx, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  ><FiMinus className="text-gray-500 cursor-pointer"/></button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 "
                    onClick={() => updateQuantity(idx, item.quantity + 1)}
                  ><FiPlus className="text-gray-500 cursor-pointer"/></button>
                </div>
              </div>
                <div className="text-sm self-start ">
                  ${(Number(String(item.price).replace(/[^\d.]/g, "")) * (item.quantity || 1)).toFixed(2)}
                </div>
            </div>
            
        </li>
        ))}
      </ul>
    )}
  </div>
    <div className="mx-4">
      <div className="">
        <div className="flex justify-between">
          <p className="text-md">Subtotal</p>
          <p className="text-md">${totalItemPrice}</p>
        </div>
          <p className="text-sm mt-2">Shipping, taxes, and discounts calculated at checkout.</p>
      </div>
      <div className="flex gap-2 mt-6">
        <Link to="/cart" className="border rounded-xs px-2 py-1 w-full text-center">
          View cart
        </Link>
        <Link to="checkout" className="bg-[#111] rounded-xs text-white px-2 py-1 w-full text-center hover:bg-black/80 ">Checkout</Link>
      </div>
    </div>
</div>
{/* Overlay */}
{sidePanelOpen && (
  <div
    className="fixed inset-0 bg-black/60 bg-opacity-30 z-40"
    onClick={() => setSidePanelOpen(false)}
  ></div>
)}

{/* products */}
      <section className="bg-[#e9e6e3] px-14 max-md:px-4 py-8">
        <h2 className="text-5xl font-light max-md:text-3xl">Explore products</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 gap-8 max-md:gap-4 my-4">
          {products.map((item, idx) => (
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
  );
};

export default ShopByRoom;
