"use client";
import React, { useState } from 'react';
import Link from 'next/link'


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <>
            <nav className=' bg-white text-black border-b-black-500 border-b-4'>
                <div className='container mx-auto flex p-4 justify-between items-center'>

                    {/* Logo */}
                    <Link href="/">
                        <img className='w-full' src="https://playmallguide.playpark.com/th-th/images/logo.png" alt="logo" />
                    </Link>
                    <div className='hidden md:flex space-x-4'>
                        <Link href="/" className='px-5 hover:text-blue-400'>Home</Link>
                        <Link href="/playmall" className='px-5 hover:text-blue-400'>Playmall</Link>
                        <Link href="#" className='px-5 hover:text-blue-400'>Itemshop</Link>
                        <Link href="#" className='px-5 hover:text-blue-400'>FAQ</Link>
                        <Link href="#" className='px-5 hover:text-blue-400'>Contact</Link>
                    </div>


                    {/* Hamburger Menu (Visible on Mobile) */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-400 hover:text-black focus:outline-none focus:ring-2 focus:ring-black"
                            id="menu-toggle"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                </div>
                {/* Dropdown Menu */}
                <div id="mobile-menu" className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
                    <Link href="/" className='block px-4 py-2 hover:bg-gray-700'>Home</Link>
                    <Link href="/playmall" className='block px-4 py-2 hover:bg-gray-700'>Playmall</Link>
                    <Link href="#" className='block px-4 py-2 hover:bg-gray-700'>Itemshop</Link>
                    <Link href="#" className='block px-4 py-2 hover:bg-gray-700'>FAQ</Link>
                    <Link href="#" className='block px-4 py-2 hover:bg-gray-700'>Contact</Link>
                </div>
            </nav >
        </>
    )
}
export default NavBar;