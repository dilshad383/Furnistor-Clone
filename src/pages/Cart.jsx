import React, { useContext } from "react";
import CartContext from "../components/CartContext";
import { MdCancel } from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import { LuScissorsLineDashed } from "react-icons/lu";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);
  // Helper to parse price string to number
  const parsePrice = (price) => {
    if (!price) return 0;
    const num = Number(String(price).replace(/[^\d.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  // Quantity is now managed in context and persisted
  const handleQuantityChange = (index, newQuantity) => {
    if (newQuantity < 1) return;
    updateQuantity(index, newQuantity);
  };

  // Calculate subtotal for all items
  const totalItemPrice = cart.reduce(
    (sum, item) => sum + parsePrice(item.price) * (item.quantity || 1),
    0
  );

  // grandTotal is same as subtotal 
  const grandTotal = totalItemPrice;

  return (
    <div className="p-6 h-screen bg-[#e9e6e3]">
      <h2 className="text-4xl font-light">Cart</h2>
      <p className=" font-light">You've got {cart.reduce((sum, item) => sum + (item.quantity || 1), 0)} items in the cart</p>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="grid lg:grid-cols-2 gap-4 text-gray-900 mt-12">
          <div className="">
            <div className="grid grid-cols-5 mx-4 border-b border-gray-400 pb-2">
              <span className="text-center col-span-2">Product</span>
              <span className="">Price</span>
              <span>Quantity</span>
              <span>Subtotal</span>
            </div>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="grid grid-cols-5 items-center border-b py-4">
                  <div className="flex items-center  col-span-2 ">
                    <div className="relative">
                      <img src={item.img} alt={item.title} className="w-14 h-10 object-cover mr-4 " />
                      <MdCancel onClick={() => removeFromCart(index)} className="absolute -top-1 -left-1 bg-white rounded-full cursor-pointer"/>
                    </div>


                    <span>{item.title}</span>
                  </div>
                  <span>{item.price}</span>
                  <div className="flex items-center">
                    <button className="px-2 cursor-pointer" onClick={() => handleQuantityChange(index, item.quantity - 1)}><FiMinus /></button>
                    <span className="px-2">{item.quantity}</span>
                    <button className="px-2 cursor-pointer" onClick={() => handleQuantityChange(index, item.quantity + 1)}><FiPlus /></button>
                  </div>
                  <span>
                    ${parsePrice(item.price) * (item.quantity || 1)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="invoice bg-[#f3f1ef] px-4">
            <div className="grid grid-cols-2 border-b border-dashed border-[#e9e6e3] py-4">
              <div className="list-none">
                <li>Subtotal</li>
                <li>Shipping</li>
              </div>
              <div className="list-none grid gap-1">
                <li>$ {totalItemPrice}</li>
                <li>Free shipping</li>
                <li>Shipping to DE.</li>
                <div className="border rounded-xs px-2 py-1 w-fit mt-2 gap-2 flex items-center">
                  Change address
                  <FiChevronDown/>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LuScissorsLineDashed className="text-gray-600"/>
              <span>Have a Coupon?</span>
            </div>
            <div className="grid grid-cols-2 mx-4 mt-12">
              <p className="text-xl">Total</p>
              <span className="text-xl">${grandTotal} USD</span>
            </div>
            <button className="flex items-center gap-4 bg-[#111] text-[#fff] w-full justify-center py-2 text-xl mt-4 cursor-pointer">Proceed to checkout <FaArrowRightLong /></button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
