import Image from 'next/image'
import cryptoPunks from '../public/img/cryptopunks.jpeg'
import openSea from '../public/img/opensea.webp'
import ethLogo from '../public/img/eth-diamond-black.png'
import {FaDiscord, FaTwitter, FaEthereum} from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import diamond from '../public/img/diamond.webp'
import Link from 'next/link'

export default function Home() {



  return (
    <div className="text-primary">
      <div className="bg-teal">
        <div className="flex md:flex justify-center md:justify-between w-7/12 mx-auto py-10 items-center ">
          <div className="text-6xl text-center md:text-left md:text-7xl text-chapaza">
            <p className="text-white pb-5">Bling</p>
            <p className="pb-5">on the</p>
            <p>Blockchain</p>
          </div>
          <div className="hidden md:block">
          <Image src={diamond} width={100} height={135} layout="fixed"/> 
          </div>

        </div>
        <div className="flex justify-center space-x-3 py-14">
          <a href="https://opensea.io/thecryptorings" target="_blank" rel="noopener noreferrer" style={{height:"60px", width: "60px"}}>
          <Image src={openSea} className="text-black black-filter"/>
          </a>
          <a href="https://discord.com/channels/891015960864116777/891015961564577825" target="_blank" rel="noopener noreferrer"><FaDiscord className="text-teal bg-black p-1 text-5xl" style={{height:"60px", width:"60px", borderRadius: "50%"}} /></a>
          <a href="https://twitter.com/thecryptorings" target="_blank" rel="noopener noreferrer"><div style={{height:"60px", width:"60px", borderRadius: "50%"}} className="bg-black flex items-center justify-center "><FaTwitter className="text-teal text-3xl"/></div></a>
        </div>
        <div className="flex justify-center py-14">
          <div className="flex flex-col space-y-6 text-center">
            <h3 className="text-5xl text-chapaza"><span className="text-white">Exclusive</span> 1st Edition Collection</h3>
            <div className="flex flex-col space-y-5 sm:space-y-0 sm:flex-row justify-between">
              <div className="flex-1">
                <h4 className="text-white text-5xl">6000</h4>
                <p className="py-6">NFT CRYPTORINGS</p>
                <div className="border-b-6 border-dotted border-white w-1/2 mx-auto"></div>

              </div>
              <div className="flex-1">
                <h4 className="text-white text-5xl">0</h4>
                <p className="py-6">OWNERS</p>
                <div className="border-b-6 border-dotted border-white w-1/2 mx-auto"></div>

              </div>
              <div className="flex-1">
                <div className="flex items-center justify-center">
                  <FaEthereum className="text-black text-4xl"/>
                  <h4 className="text-white text-5xl">0.00</h4>
                </div>
                <p className="py-6">VOLUME TRADED</p>
                <div className="border-b-6 border-dotted border-white w-1/2 mx-auto"></div>

              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center pb-14">
          {/* <button className="bg-white py-2 px-4 text-primary-bold rounded-3xl border-2 border-black hover:bg-red-500 hover:text-white hover:border-none">GET YOURS ON OPENSEA</button> */}
          <Link href="mint"><div  className="bg-white py-2 px-10 text-primary-bold rounded-3xl border-2 border-black hover:bg-red-500 hover:text-white hover:border-none">MINT A RING</div></Link>

        </div>
        <section className="lg:flex">
          <Image src={cryptoPunks}/>
          <div id="about" className="lg:w-6/12 md:max-w-2xl flex flex-col space-y-12 text-center px-10 lg:px-7 py-20 mx-auto">
            <h3 className="text-chapaza text-5xl">About</h3>
            <p className="leading-7">CryptoRings is a collection of 6000 meticulously designed NFT diamond rings. With over 100 integrated properties, ring shopping has never been more fun and individualized. Invest in a CryptoRing for yourself or your family&apos;s future generations, send it as a special gift or even use it to pop the question IRL.</p>
            <div>
            <h4 className="text-stealdream text-3xl text-white filter drop-shadow-md">Diamonds are forever.</h4>
            <h4 className="text-stealdream text-3xl text-white filter drop-shadow-md">CryptoRings are infinite.</h4>
            </div>

          </div>

        </section>

      </div>
      <section id="irl" className="bg-black flex justify-center ">
        <div className="flex flex-col max-w-2xl text-center space-y-12 px-10 py-20">
          <h3 className="text-5xl text-teal text-chapaza">Flex your CryptoRing</h3>
          <p className="text-white leading-7">We have partnered with SafeRingz to gift our CryptoRing owners a custom silicone ring to represent your Bling on the Blockchain.</p>
          <Link href="request-your-cryptoring"><button className="bg-white text-black text-primary-bold py-2 px-4 self-center rounded-3xl hover:bg-red-500 hover:text-white ">LEARN MORE</button></Link>
         
        </div>
      </section>
      <div className="bg-teal flex justify-center">
        <div className="flex flex-col max-w-2xl text-center space-y-12 px-10 py-20">
          <h3 className="text-5xl text-black text-chapaza">Family Owned</h3>
          <div className='border-b-4 border-black w-1/6 mx-auto'></div>
          <p className="text-black leading-7">Before proposing, Anthony joked about sending Kate an NFT instead of giving her a diamond ring. Months later as she learned more about the booming NFT Market, she thought back and wished she would have taken him up on the offer. The joke soon resurfaced, CryptoRings was born and Bling was introduced to the Blockchain.</p>

        </div>
      </div>
      <div className="bg-black p-20">
        <div className="flex flex-col text-center py-20">
          <h3 className="text-4xl sm:text-6xl text-white text-stealdream">Road Map</h3>
          <h3 className="text-4xl sm:text-6xl text-teal text-stealdream">Coming Soon</h3>

        </div>

      </div>

    </div>
    
  )
}
