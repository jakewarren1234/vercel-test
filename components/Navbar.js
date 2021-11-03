// import { Link, animateScroll as scroll } from "react-scroll";
import Link from 'next/link'
import {FiMenu} from 'react-icons/fi'


export default function Navbar() {
    return (
        <div className="flex md:flex-col justify-between items-center md:space-y-10 py-20 bg-teal px-8">
            <h1 className="text-5xl sm:text-7xl text-stealdream md:text-center ">CryptoRings</h1>
            <div className="text-4xl sm:text-5xl md:hidden relative dropdown"><FiMenu className="my-auto"/>
                <ul className="text-xl divide-y dropdown-menu absolute hidden bg-white text-gray-700 right-0 py-1 rounded-lg w-52">
                    <li className=" hover:bg-gray-400 px-2 py-3"><Link href="/">Home</Link></li>
                    <li className=" hover:bg-gray-400 px-2 py-3"><Link href="/#about">About</Link></li>
                    <li className="hover:bg-gray-400 px-2 py-3"><Link href="/#irl">Crypto IRL</Link></li>
                    <li className="hover:bg-gray-400  block px-2 py-3"><Link href="#">Merch</Link></li>

                </ul>
            
            </div>

            <div className=" hidden md:flex mx-auto space-x-20 flex-wrap">
                <div className="text-gray-400 hover:text-gray-800"><Link href="/">HOME</Link></div>
                <div className="text-gray-400 hover:text-gray-800"><Link href="/#about">ABOUT</Link></div>
                {/* <div className="text-gray-400 hover:text-gray-800"><a href="/#about" smooth={true} duration={1000}>ABOUT</a></div> */}

                <div className="text-gray-400 hover:text-gray-800"><Link href="/#irl">CRYTORING IRL</Link></div>
                <div className="text-gray-400 hover:text-gray-800"><a>MERCH</a></div>
            </div>
        </div>

    )
}