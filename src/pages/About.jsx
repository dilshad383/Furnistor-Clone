import React from 'react'
import about1 from '../assets/about-1.jpg'
import about2 from '../assets/about-2.jpg'
import about3 from '../assets/about-3.jpg'
import about4 from '../assets/about-4.jpg'
import design1 from '../assets/design1.png'
import design2 from '../assets/design2.png'
import design3 from '../assets/design3.png'
import design4 from '../assets/design4.png'
import maker1 from '../assets/maker1.png'
import maker2 from '../assets/maker2.png'
import maker3 from '../assets/maker3.png'

const design =[
    {
        img: design1,
        title: "Authentic Simplicity",
        text: "We believe in the power of restraint. Our designs strip away the unnecessary to reveal the essential, creating pieces that speak with quiet confidence."
    },
    {
        img: design2,
        title: "Timeless Relevance",
        text: "Trends fade, but great design endures. We create pieces that remain compelling across decades, adapting gracefully to changing lifestyles."
    },
    {
        img: design3,
        title: "Material Honesty",
        text: "We let materials speak their truth. From solid oak grain to smooth stone, we celebrate natural characteristics that make each piece unique."
    },
    {
        img: design4,
        title: "Human-Centered Function",
        text: "Every piece begins with understanding how people live. We design furniture that enhances daily moments with intuitive functionality and comfort."
    },
]

const makers = [
    {
        img: maker1,
        name: "Maria Larsson",
        title: "Creative Director",
        text: "With fifteen years in furniture design, Maria blends Scandinavian heritage with global influences. She believes the best furniture design happens when form, function, and feeling unite."
    },
    {
        img: maker2,
        name: "Erik Johannsen",
        title: "Master Craftsman",
        text: "Leading our production with three decades of woodworking experience, Erik ensures every piece meets our standards. His deep understanding of wood and joinery helps translate designs into enduring furniture."
    },
    {
        img: maker3,
        name: "Lena Chen",
        title: "Sustainability Director",
        text: "Lena guides our environmental commitment, working with suppliers to minimize impact while maximizing longevity. Her background in environmental science helps us create furniture that’s good for the planet."
    },
]

const overlay = [
    {
        img: about3,
        title: "Sustainability",
        text1: "Sustainability is integral to our design philosophy. We believe great furniture should be kind to both people and planet.",
        text2: "Our wood comes exclusively from FSC-certified forests, ensuring healthy forest ecosystems. We prioritize local sourcing when possible, reducing transportation impacts while supporting regional craftspeople."
    },
    {
        img: about4,
        title: "Craftsmanship",
        text1: "Excellence comes from deliberate choices at every step. Our craftspeople combine time-honored techniques with modern precision, ensuring each piece meets our standards for beauty and durability.",
        text2: "We source materials from certified sustainable forests and trusted suppliers. Our solid wood undergoes careful selection and seasoning, while metal components are precision-engineered for longevity."
    },
]
const About = () => {
  return (
    <>
        <section className="py-12 px-12 bg-[#e9e6e3]">
            <div className="grid lg:grid-cols-3 gap-6">
                <div className="max-lg:order-2 my-auto">
                    <h2 className="text-5xl font-light">
                        Our Story
                    </h2>
                    <p className='mt-4'>Furnistør was born from a passion for authentic design and exceptional quality. We create furniture that bridges timeless aesthetics with the evolving needs of modern life, believing that our homes should reflect both who we are and who we aspire to become.</p>
                    <p className='mt-4'>
                        Our journey began with a deep appreciation for Scandinavian design heritage—where function meets beauty in perfect harmony. Yet we recognized the need to push beyond tradition, embracing innovation while honoring the craftsmanship that has defined great furniture for centuries.
                    </p>
                    <p className='mt-4'>
                        We believe in creating pieces that tell stories worth passing down through generations. Today, every piece we create is conceived not just as furniture, but as an integral part of life’s most meaningful moments—from quiet morning coffees to gathered celebrations with loved ones.
                    </p>
                </div>
                <div className="max-lg:order-1 col-span-2">
                    <img src={about1} alt="" />
                </div>
            </div>
            <div className="grid lg:grid-cols-3 gap-6 mt-8">
                <div className="col-span-2">
                    <img src={about2} alt="" />
                </div>
                <div className="my-auto">
                    <h2 className="text-5xl font-light">
                        Where Timeless Design Meets Modern Living
                    </h2>
                    <p className='mt-4'>
                        Born from a passion for authentic design and exceptional quality, Furnistør emerged with a simple yet profound mission: to create furniture that tells a story worth passing down through generations. Founded on the belief that our homes should reflect both who we are and who we aspire to become, we bridge the gap between timeless aesthetics and the evolving needs of modern life.
                    </p>
                    <p className='mt-4'>
                        Our journey began with a deep appreciation for the Scandinavian design heritage—where function meets beauty in perfect harmony. Yet we recognized the need to push beyond tradition, embracing innovation while honoring the craftsmanship that has defined great furniture for centuries. Today, Furnistør stands as a testament to thoughtful design, where every piece is conceived not just as furniture, but as an integral part of life’s most meaningful moments.
                    </p>
                </div>
            </div>
        </section>

{/* DesignPhilosophy */}
        <section className="px-12 py-8">
            <h2 className="text-5xl font-light">Design Philosophy</h2>
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-6 my-12">
                {design.map((item, idx)=> (
                    <div key={idx} className="">
                        <img src={item.img} className='w-2/6' alt="" />
                        <h3 className="text-xl font-light mb-2 mt-6">
                            {item.title}
                        </h3>
                        <p>
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>

{/* Meet the Makers */}
        <section className="bg-[#e9e6e3] py-8 px-6">
            <h2 className="text-3xl font-light">
                Meet the Makers
            </h2>
            <p>
                Behind every Furnistør piece is a dedicated team of designers, craftspeople, and specialists who share a common passion for exceptional furniture. We believe that great design comes from collaboration, expertise, and an unwavering commitment to quality.
            </p>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-6 my-8">
                {makers.map((item, idx) => (
                    <div key={idx} className="">
                        <div className="bg-white brightness-85">
                            <img src={item.img} alt="" />
                        </div>
                        <div className="">
                            <h3 className="text-2xl font-light mt-4">{item.name}</h3>
                            <p className='my-2'>{item.title}</p>
                            <p>
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid gap-6">
                {overlay.map((item, idx)=> (
                    <div key={idx} className="relative text-white">
                        <img className='brightness-70' src={item.img} alt="" />
                        <div className="absolute top-6 mx-8">
                            <h4 className="text-3xl font-light py-2">
                                {item.title}
                            </h4>
                            <p className='py-4'>{item.text1}</p>
                            <p>{item.text2}</p>

                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-8">
                <h3 className="text-3xl font-light">
                    Every joint, every grain, every finish tells a story. Our job is to make sure it's a story worth telling for generations.
                </h3>
                <p className='font-semibold mt-4 text-lg'>Erik Johannsen</p>
                <p className="text-sm">Master Craftsman</p>
            </div>
        </section>

    </>
  )
}

export default About
