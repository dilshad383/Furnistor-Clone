import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="border-b">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center p-4 text-left text-lg "
      >
        {title}
        <span className="cursor-pointer">{isOpen ? <FiMinus /> : <FiPlus />}</span>
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

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const items = [
    {
      title: "What are the shipping options?",
      content:
        "We offer various shipping options to ensure your order arrives safely and promptly. Standard shipping typically takes 5-7 business days, while express options are available for faster delivery. You can choose your preferred method at checkout.",
    },
    {
      title: "What is your return policy?",
      content:
        "We want you to love your purchase! If you’re not satisfied, you can return items within 30 days for a full refund. Please ensure products are in their original condition and packaging.",
    },
    {
      title: "How do I care?",
      content:
        "To maintain the beauty of your furniture, we recommend regular dusting and using a damp cloth for spills. Avoid harsh chemicals that can damage finishes. For specific materials, refer to the care instructions included with your purchase.",
    },
    {
        title: "Do you offer warranties?",
        content:
        "Yes, many of our products come with a warranty that covers manufacturing defects. The length and terms of the warranty vary by item, so please check the product details for specific information. If you have questions, feel free to reach out.",
    },
    {
        title: "Can I track my order?",
        content:
        "Absolutely! Once your order has shipped, you will receive an email with tracking information. You can use this link to monitor your shipment’s progress until it arrives at your doorstep."
    }
  ];

  return (
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
  );
};

export default Faq;
