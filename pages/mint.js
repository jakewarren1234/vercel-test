import Web3Modal from 'web3modal'
import {ethers} from 'ethers'
import { useState, useEffect, Children } from 'react'
import { shortAddress } from '../utils/helpers'
import { useRouter } from 'next/router'
import Modal from '../components/Modal'
import Image from 'next/image'



export default function Mint() {

    const router = useRouter()


    const [walletAddress, setWalletAddress] = useState()
    const [chainId, setChainId] = useState()
    const [showModal, setShowModal] = useState(false)
    const [ringsToMint, setRingsToMint] = useState(1)

    useEffect(() => {

    },[])


    async function loadWeb3() {
        const web3modal = new Web3Modal()
        const provider = await web3modal.connect()
        const injectedProvider = new ethers.providers.Web3Provider(provider)

        const accounts = await injectedProvider.listAccounts()
        setWalletAddress(accounts[0])

        const network = await injectedProvider.getNetwork()
        const chain = network.chainId
        setChainId(chain)
        console.log(chain)
        if (chain != 1) {
            setShowModal(true)
        }

        provider.on("chainChanged", chainId => {
            console.log(`chain changed to ${chainId}!`)
            router.reload('/mint')

        })

        provider.on("accountsChanged", () => {
            console.log("account changed")
            router.reload('/mint')
            
        })

    }
    return (
    <div className="bg-teal py-5">
        <div className="flex justify-center">
            <div className="flex flex-col">
                {/* <button onClick={() => setShowModal(true)}>Open</button> */}
                {
                showModal ?
                    
                    <Modal
                        onClose={() => setShowModal(false)}
                        show={showModal}
                    >
                        Please connect to the mainnet.
                    </Modal>
                    :
                    null
                }

                <div className="flex justify-center pb-16">
                {
                    !walletAddress ?
                    <button className="bg-gradient-to-r from-yellow-200 text-gray-700 text-xl to-yellow-400 rounded-3xl py-6 px-10 shadow-lg transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={loadWeb3}>Connect Wallet</button>
                    :
                    <button className="bg-gradient-to-r from-yellow-200 text-gray-700 text-xl to-yellow-400 rounded-3xl py-6 px-14 shadow-lg transition duration-400 ease-in-out transform hover:-translate-y-1 hover:scale-110" onClick={loadWeb3}>{shortAddress(walletAddress.toString())}</button>

                }
                </div>
                
                <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={ringsToMint}
                onChange={e => setRingsToMint(e.target.value)}
                />
                <p className="my-3">How many rings do you want to mint?</p>
                <p className="text-center text-3xl text-gray-400">{ringsToMint}</p>
                <button className="bg-white rounded-xl py-3 px-6 mx-6 my-6" >MINT</button>
            </div>
        </div>
    </div>
    )
}