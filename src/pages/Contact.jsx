import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import contact1 from '../assets/contact1.jpeg'
import contact2 from '../assets/contact2.jpeg'
import RegionSelector from "../components/RegionSelector";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-400 mx-6">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-4 text-left text-lg text-[#1f2124]"
      >
        {title}
        <span className="cursor-pointer ">{isOpen ? <FiMinus /> : <FiPlus />}</span>
      </button>

      {/* Transition wrapper */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-40 opacity-100 p-4" : "max-h-0 opacity-0 p-0"
        }`}
      >
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
};

const Contact = () => {
    const [openIndex, setOpenIndex] = useState(null);
    
    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

      const items = [
    {
      title: "General Inquiries",
      content:
        "Got a question about a product, need help with an order, or just want to reach out? We’re here to help. Reach us at info@example.com. We usually respond within 1–2 business days.",
    },
    {
      title: "Trade & Wholesale",
      content:
        "Interested in stocking our products or setting up a trade account? Email us at sales@example.com.",
    },
    {
      title: "Press & Media",
      content:
        "For press-related requests, collaborations, or media kits, contact press@example.com.",
    },
    {
        title: "Showrooms",
        content:
        "Visit our showroom in Copenhagen: Bredgade 45, Ground Floor 1260 Copenhagen, Denmark",
    }
];


  return (
    <div className='bg-[#e9e6e3] px-8'>
        <div className="grid lg:grid-cols-2 gap-6">
            <div className="grid grid-cols-2 gap-10">
                <img className='mt-auto' src={contact1} alt="" />
                <img src={contact2} alt="" />
            </div>
            <div className="">
                <h1 className="text-6xl font-light lg:mb-12">
                    Questions, requests, or just a hello, feel free to reach out.
                </h1>
                <div className="grid grid-cols-3 gap-6 mt-4">
                    <div className="">
                        <div className="mb-2">Location</div>
                        <p>Pilestræde 45, 1st Floor Copenhagen, Denmark 1112</p>
                    </div>
                    <div className="">
                        <div className="mb-2">Hours</div>
                        <p>Monday – Tuesday
                        10:30am – 5:00pm</p>
                    </div>
                    <div className="">
                        <div className="mb-2">Phone</div>
                        <p>+45 89 88 12 45</p>
                    </div>
                </div>
            </div>
        </div>

{/* Contact Section */}
        <section className="bg-white grid lg:grid-cols-2 gap-6 py-8">
            <div className="lg:border-r max-lg:border-b pb-6 border-gray-300">
                <h2 className="text-4xl font-light ml-6 mt-4">
                    Departments
                </h2>
                <div className="w-full mx-auto ">
                {items.map((item, index) => (
                    <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                    isOpen={openIndex === index}
                    onClick={() => toggleAccordion(index)}
                    />
                ))}
                </div>

            </div>
            <div className="mx-6">
                <h2 className="text-4xl font-light mt-6">
                Departments
                </h2>
                <form action="">
                    <input type="text" name="name" placeholder="Name" id="" />
                    <input type="email" name="email" placeholder="Email" id="" />

                    <select name="Choose department" id="">
                        <option value="" disabled selected>Choose department</option>
                        <option value="HR">Sales & Product Inquiry</option>
                        <option value="HR">Interior Design Consultation</option>
                        <option value="HR">After Sales Support</option>
                        <option value="HR">Shipping & Delivery</option>
                        <option value="HR">Careers/Collaborations</option>
                        <option value="HR">Other</option>
                    </select>
                    <RegionSelector/>
                    <div className="flex gap-4">
                      <label htmlFor="checkbox" className="">
                      <input type="checkbox" name="checkbox" id="checkbox" required />
                      </label>
                      <p className="mt-2">I agree to the Privacy Policy and consent to be contacted by Furnistør regarding my inquiry. *</p>
                    </div>
                    <button type="submit" className="bg-[#111] p-2 mt-4 text-white">Submit</button>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Contact
