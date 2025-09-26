import React from 'react'
const infoList = ['Custome Care', "Shipping", 'Refunds & Returns', 'Product Care','Warranty','Terms of Service','Privacy Policy']

const Shipping = () => {
  return (
    <div>
        <div className="grid lg:grid-cols-3">
            <div className="border-r border-gray-400">
                <h1 className="text-3xl font-light mb-2">Information</h1>
                <ul className="list-none text-[#383733]">
                    {infoList.map((item, idx)=>(
                        <li key={idx} className="mb-2">{item}</li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="col-span-2">
            <h1 className="text-4xl font-light mb-4">Shipping</h1>
            <p>Here’s how it works: you order → we process → we ship → you receive your furniture</p>
            <p>
                <span className='font-semibold'>Processing Time: </span>
            Most in-stock items are processed within 2-3 business days from our warehouse in Denmark.
            </p>
            <p>
                <span className='font-semibold'>Delivery Time:</span>
                 Once shipped, delivery typically takes 3-7 business days depending on your location. 
            </p>
            <p>
                <span className='font-semibold'>Total Timeline:</span>
                Expect to receive your order within 7-10 working days after placing your order, unless otherwise stated for specific products. You’ll receive a shipment notification email with tracking information as soon as your package ships.
            </p>
        </div>
    </div>
  )
}

export default Shipping
