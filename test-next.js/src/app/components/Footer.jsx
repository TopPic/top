import React from 'react'
import Link from 'next/link'
function Footer() {


    return (
        <>
            {/* <div className="bg-white border-b-black-500 border-t-4">
                <div className="container mx-auto p-4 ">
                    <div className="grid gap-5 text-center">
                        <div className="grid-cols-1 block">
                            <Link href="/" className='px-5 hover:text-blue-400'>Home</Link>
                            <Link href="/playmall" className='px-5 hover:text-blue-400'>Playmall</Link>
                            <Link href="#" className='px-5 hover:text-blue-400'>Itemshop</Link>
                            <Link href="#" className='px-5 hover:text-blue-400'>FAQ</Link>
                            <Link href="#" className='px-5 hover:text-blue-400'>Contact</Link>
                        </div>

                    </div>
                </div>
            </div> */}
            <div className="bg-white border-b-black-500 border-t-4">
                <div className="container mx-auto text-center">
                    <div className="flex flex-wrap justify-center p-5 gap-5">
                    <Link href="/" className='px-5 hover:text-blue-400'>Home</Link>
                    <Link href="/playmall" className='px-5 hover:text-blue-400'>Playmall</Link>
                    <Link href="#" className='px-5 hover:text-blue-400'>Itemshop</Link>
                    <Link href="#" className='px-5 hover:text-blue-400'>FAQ</Link>
                    <Link href="#" className='px-5 hover:text-blue-400'>Contact</Link>
                    </div>
                   
                </div>
            </div>
        </>
    )
}
export default Footer;
