import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FiMenu, FiX } from 'react-icons/fi';
import { FiChevronDown } from "react-icons/fi";
import header1 from '../assets/header1.jpeg'
import header2 from '../assets/header2.jpeg'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <>
        <header className="bg-[#e9e6e3]">
            <div className="flex justify-between py-2 px-4 text-sm">
                <div className="">
                    Free shipping on orders above 150€
                </div>
                <div className="flex gap-4">
                    <Link to="">Warranty</Link>
                    <Link to="/shipping">Shipping</Link>
                    <Link to="">Wishlist</Link>
                    <Link to="">Login</Link>
                </div>
                <div className="flex items-center">
                    <input type="search" name="" id="" placeholder='Search site...' />
                    <CiSearch className='inline-block'/>
                </div>
            </div>
            <div className='flex justify-between px-4 py-3 border-y border-gray-400 items-center relative'>
                <div className="text-2xl hover:text-[#fc6b00]">Furnistør</div>
            {/* Desktop Menu */}
                <nav className="flex gap-4 max-lg:hidden">
                    <Link to="">Home</Link>

                    {/* Products dropdown */}
                    <div
                        className=" "
                        onMouseEnter={() => setOpenDropdown(true)}
                        onMouseLeave={() => setOpenDropdown(false)}
                    >
                        <Link className="group flex items-center gap-1" to="">
                        <span className="relative inline-block">
                            Products
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <FiChevronDown className={`inline-block transition-transform duration-300 ${openDropdown ? "rotate-180" : "rotate-0"}`} />
                        </Link>

                        <div
                        className={`absolute -right-1/2 top-10 -translate-x-1/2 transform transition-all duration-300 origin-top text-md z-20 bg-[#e9e6e3] py-10 w-full mx-auto ${
                            openDropdown
                            ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                        >
                        <div className="grid grid-cols-3 gap-4 mx-10">
                            <div className="col-span-2 grid grid-cols-4">
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Living Room</h3>
                                        <Link to=''>Armchairs</Link>
                                        <Link to=''>Coffee Tables</Link>
                                        <Link to=''>Sideboards</Link>
                                        <Link to=''>Sofas</Link>
                                    </div>
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Dining Room</h3>
                                        <Link to=''>Benches</Link>
                                        <Link to=''>Dining Chairs</Link>
                                    </div>
                                </div>
                                <div className=" grid gap-4">
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Bedroom</h3>
                                        <Link to=''>Beds</Link>
                                        <Link to=''>Nightstands</Link>
                                        <Link to=''>Wardrobes</Link>
                                    </div>
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Home Decor</h3>
                                        <Link to=''>Mirror</Link>
                                        <Link to=''>Rugs</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Lighting</h3>
                                        <Link to=''>Ceiling</Link>
                                        <Link to=''>Floor Lamps</Link>
                                        <Link to=''>Table Lamps</Link>
                                        <Link to=''>Wall Lamps</Link>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="grid gap-2">
                                        <h3 className="text-2xl">Outdoor</h3>
                                        <Link to=''>Accessories</Link>
                                        <Link to=''>Chairs</Link>
                                        <Link to=''>Benches</Link>
                                        <Link to=''>Lounge</Link>
                                        <Link to=''>Tables</Link>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-6 col-span-1 text-xl">
                                <div className="relative">
                                    <img className='brightness-70' src={header1} alt="" />
                                    <p className="text-white absolute top-4 left-4 z-1">Just In</p>
                                </div>
                                <div className="relative">
                                    <img className='brightness-70' src={header2} alt="" />
                                    <p className="text-white absolute top-4 left-4 z-1">Outlet</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <Link to="/about">About</Link>
                    <Link to="/journal">Journal</Link>
                    <Link to="/contact">Contact</Link>
                </nav>

                <button onClick={toggleMenu} className="md:hidden text-2xl cursor-pointer">
                {isOpen ? <FiX className='absolute z-4 top-2 right-4 '/> : <FiMenu className='hover:text-[#fc6b00]'/>}

        </button>
            {/* Mobile Menu */}

            {isOpen && (
                <nav className='flex gap-4 max-lg:flex-col max-lg:absolute inset-0 max-lg:bg-[#e9e6e3] h-dvh max-lg:text-3xl z-2 fraunces pt-6 pl-8'>
                    <Link className='group' to='' onClick={() => setIsOpen(false)}>
                    <span className="relative inline-block">
                        Home
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    </Link>
                    <div className="relative"
                    onClick={() => setOpenDropdown((prev) => !prev)}
                    >
                        <Link className='group' to='' onClick={() => setIsOpen(false)}>
                        <span className="relative inline-block">
                            Products 
                            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <FiChevronDown className='inline-block'/>
                        </Link>
                {/* Dropdown Menu */}
                        {openDropdown && (
                        <div
                            className={`relative left-0 py-2 transform transition-all duration-300 origin-top text-lg
                                ${openDropdown ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"}
                            `}
                            >
                            <Link
                                to="/products/phones"
                                className="block px-4 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Bedroom <FiChevronDown className='inline-block'/>
                            </Link>
                            <Link
                                to="/products/laptops"
                                className="block px-4 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Lighting
                            </Link>
                            <Link
                                to="/products/accessories"
                                className="block px-4 py-2"
                                onClick={() => setIsOpen(false)}
                            >
                                Living Room
                            </Link>
                            </div>

                        )}
                    </div>
                    <Link className='group' to='/about' onClick={() => setIsOpen(false)}>
                    <span className="relative inline-block">
                        About
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    </Link>
                    <Link  to='/journal' onClick={() => setIsOpen(false)}>
                    <span className="relative inline-block">
                        Journal
                        <span className="absolute left-0 -bottom-1 h-[2px] bg-black w-full"></span>
                    </span>
                    </Link>
                    <Link className='group' to='/contact' onClick={() => setIsOpen(false)}>
                    <span className="relative inline-block">
                        Contact
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    </Link>
                </nav>
            )}

                <Link to='/cart' className="flex gap-2 items-center hover:text-[#fc6b00]">
                    Cart 
                    <BsBag/>
                </Link>
            </div>
        </header>
    </>
  )
}

export default Header
