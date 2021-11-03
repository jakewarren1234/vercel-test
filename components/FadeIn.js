
import { useRef, useState, useEffect } from "react";
export default function FadeIn(props) {
    const [isVisible, setIsVisible] = useState(true)
    const domRef = useRef()

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
            observer.observe(domRef.current)
            return () => observer.unobserve(domRef.current)
        })
    }, [])
    return (
        <div 
            className={`fade-in ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {props.children}
        </div>

    )

}