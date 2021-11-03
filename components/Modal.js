// import React, { useEffect, useRef, useState } from "react"
// import ReactDOM from "react-dom"
// import {BsX} from 'react-icons/bs'

// export default function Modal({ onClose, children }) {
//     const [isBrowser, setIsBrowser] = useState(false)

//     const modalWrapperRef = useRef()

//     const backDropHandler = e => {
//         if (!modalWrapperRef?.current?.contains(e.target)) {
//             onClose()
//         }
//     }

//     useEffect(() => {
//         setIsBrowser(true)

//         window.addEventListener('click', backDropHandler)

//         return () => window.removeEventListener('click', backDropHandler)
//     }, [])

//     const handleClose = (e) => {
//         e.preventDefault()
//         onClose()
//     }

//     const modalContent = (
//         <div style={{backgroundColor: "rgba(0,0,0,0.5)"}}className="absolute top-0 left-0 w-full h-full pt-20">
//             <div ref={modalWrapperRef} className="mx-auto w-1/2">
//                 <div className="bg-red-200 border-2 border-red-600 rounded-xl text-md md:text-xl text-red-600 flex items-center justify-between px-4 py-2">
//                     <p>{children}</p>
//                     <button className="text-3xl md:text-4xl"onClick={handleClose}><BsX/></button>
//                 </div>
//             </div>
//         </div>
//     )

//     if (isBrowser) {
//         return ReactDOM.createPortal(
//             modalContent,
//             document.getElementById("modal-root")
//         )
//     } else {
//         return null
//     }
// }