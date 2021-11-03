import Navbar from "../components/Navbar"

export default function IRL() {
    return (
        <div className="bg-teal">
            <div className="md:text-center pl-10 md:pl-0">
                <h2 className="text-stealdream text-5xl md:text-6xl drop-shadow-lg white-stroke">CryptoRings x SafeRingz</h2>
            </div>
            <div className="flex md:flex-row md:space-y-0 flex-col space-y-16 p-10 md:p-20 justify-center md:space-x-10 md:ml-20">
                <div style={{width: "300px"}} className="flex flex-col space-y-6 md:ml-6">
                    <p className="text-primary-bold text-xl">PURCHASE</p>
                    <div className='border-b-4 border-white w-1/3'></div>

                    <p className="text-sm no-wrap">Select your unique NFT CryptoRing to purchase through <span className="underline"><a href="#">OpenSea Marketplace</a></span></p>
                </div>
                <div  style={{width: "300px"}} className="flex flex-col space-y-6">
                    <p className="text-primary-bold text-xl">CONTACT</p>
                    <div className='border-b-4 border-white w-1/3'></div>
                    <div className="text-sm">
                        <p>Email</p>
                        <p><a className="underline" href="mailto:thecryptorings@gmail.com">thecryptorings@gmail.com</a><span> with:</span></p>
                        <p>&nbsp;</p>
                        <p>- Proof of Purchase</p>
                        <p>- Ring Size <span className="text-xs underline"><a href="https://www.saferingz.com/pages/find-your-fit" target="_blank" rel="noopener noreferrer">(click here to find your fit)</a></span></p>
                        <p>- Full Name</p>
                        <p>- Full Shipping Address</p>
                        <p>&nbsp;</p>

                        <p>You can expect a confirmation email when your order is placed.</p>
                        
                    </div>

                </div>
                <div  style={{width: "300px"}} className="flex flex-col space-y-6 ">
                    <p className="text-primary-bold text-xl">FLEX</p>
                    <div className='border-b-4 border-white w-1/3'></div>

                    <p className="text-sm">Receive your physical CryptoRing within 7-10 business days. Flex your CryptoRing to represent your Bling on the Blockchain.</p>
                </div>
            </div>
        </div>
    )
}