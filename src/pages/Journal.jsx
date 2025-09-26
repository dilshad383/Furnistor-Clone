import React from 'react'
import journal1 from '../assets/journal-1.jpeg'
import journal2 from '../assets/journal-2.jpeg'
import journal3 from '../assets/journal-3.jpeg'
import journal4 from '../assets/journal-4.jpg'
import journal5 from '../assets/journal-5.jpeg'
import journal6 from '../assets/journal-6.jpeg'
import journal7 from '../assets/journal-7.jpg'
import journal8 from '../assets/journal-8.jpeg'
import journal9 from '../assets/journal-9.jpeg'

const cards = [
  {
    img: journal2,
    title: "Corners, curves, and the geometry of calm",
    text: "In a well-designed room, you may not notice the corners — but you feel them. You feel the way light moves across an edge. You notice how easily your hand passes over a curve. These decisions shape the atmosphere long before any color or decor comes into play. Geometry is everywhere in design — in the legs of a chair,…",
    pill1: "June 15, 2025",
    pill2: "Design Notes"
  },
  {
    img: journal3,
    title: "Soft light, hard edges",
    text: "Light doesn’t just illuminate a space — it defines it. The way it falls across surfaces, reflects off textures, and interacts with form shapes how a room feels long before you notice its furniture. At Furnistør, we think of lighting not just as a fixture, but as a material in itself. We often work with contrast. Soft light against hard…",
    pill1: "May 9, 2025",
    pill2: "Materials & Craft"
  },
  {
    img: journal4,
    title: "Before the product: sketches, samples, and decisions",
    text: "By the time a product appears in the collection, it’s already gone through dozens of decisions — most of which will never be seen. A curve adjusted by a few millimeters. A joint reworked after testing. A material rejected not because it didn’t look right, but because it didn’t feel right in the hand. This process isn’t about perfection. It’s…",
    pill1: "April 22, 2025",
    pill2: "Design Notes"
  },
  {
    img: journal5,
    title: "Furnistør, at home",
    text: "Our furniture doesn’t live in white studios. It lives in homes — in the light that shifts throughout the day, in the softness of textiles layered over time, in the way a chair ends up angled just slightly because that’s how someone always sits in it. We design with this in mind. Not for perfect corners or polished arrangements, but…",
    pill1: "February 28, 2025",
    pill2: "Journal"
  },
  {
    img: journal6,
    title: "What makes a table worth gathering around",
    text: "There are objects in a home that fade into the background — and then there are objects that quietly anchor everything around them. A table is one of those. Not loud, not decorative. Just present. Steady. Reliable. In the pace of daily life, we often overlook the importance of the surface we return to again and again — for meals,…",
    pill1: "January 5, 2025",
    pill2: "Journal"
  },
  {
    img: journal7,
    title: "Solid oak and why we keep returning to it",
    text: "Some materials are timeless not because of tradition, but because they quietly outperform trends. For us at Furnistør, solid oak is that kind of material. It appears across our collections, not for show, but for structure, warmth, and its ability to grow more beautiful with use. Oak makes up the backbone of many of our pieces — from dining tables…",
    pill1: "December 19, 2024",
    pill2: "Materials & Craft"
  },
  {
    img: journal8,
    title: "How to style a minimal dining space",
    text: "A minimal dining space isn’t empty — it’s intentional. Every element has a purpose, from the table finish to the way light falls across a chair. At Furnistør, we believe dining rooms should feel warm, clear, and human — not cold or clinical. Whether you’re starting fresh or refining your setup, here are some ways to create a space that’s…",
    pill1: "November 11, 2024",
    pill2: "Styling Guides"
  },
  {
    img: journal9,
    title: "From workshop to home: how a chair is made",
    text: "In a world that moves fast, there’s something grounding about an object built slowly. At Furnistør, a chair isn’t just made — it’s brought to life. Each piece carries the imprint of materials, hands, and decisions that extend far beyond the final form you see in your space. It begins with wood. We work primarily with solid European oak, sourced…",
    pill1: "May 24, 2024",
    pill2: "Behind the Pieces"
  },
]

const Journal = () => {
  return (
    <>
      <div className="bg-[#e9e6e3] py-8 px-8">
        <h1 className="text-5xl font-light">
          Journal
        </h1>
        <p>
          Thoughts, stories, and inspiration from our world of design, craft, and quiet living. Explore articles, behind-the-scenes insights, and curated ideas that reflect our values and aesthetic.
        </p>
        <div className="grid lg:grid-cols-2 gap-6 mt-6">
          <div className="">
            <img src={journal1} alt="" />
          </div>
          <div className="lg:mt-18">
            <h2 className="text-4xl font-light my-4">
              Why fewer, better pieces still matter
            </h2>
            <p>
              There’s nothing radical about wanting fewer things. But in a world where trends shift weekly and newness is constant, it takes intention to choose what stays. At Furnistør, we believe the best interiors aren’t filled — they’re focused. Fewer pieces create more space — not just physically, but visually and emotionally. They allow objects to breathe. They make small gestures…
            </p>
            <div className="mt-4 flex gap-4">
              <div className="inline-block rounded-3xl px-2 py-1 border">July 8, 2025</div>
              <div className="inline-block rounded-3xl px-2 py-1 border">Journal</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {cards.map((item, idx)=> (
            <div key={idx} className="">
              <img src={item.img} alt="" />
              <h3 className="text-2xl font-light my-4">
                {item.title}
              </h3>
              <p>{item.text}</p>
              <div className="mt-4 flex gap-4">
                <div className="inline-block rounded-3xl px-2 py-1 border">{item.pill1}</div>
                <div className="inline-block rounded-3xl px-2 py-1 border">{item.pill2}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Journal
