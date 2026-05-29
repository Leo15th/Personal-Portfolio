import { siteconfig } from "../siteconfig"
import { useState, useEffect } from "react"
import MobileMenu from "./MobileMenu"

export default function Nav(){
    const [open, setOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=>{
        const handleScroll= ()=>{
            if(window.scrollY>50){
                setScrolled(true)
            } else{
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", handleScroll)
        return()=> window.removeEventListener("scroll", handleScroll)
    },[])
    return(
        <>
            <nav className={`w-full bg-linear-60 flex justify-between items-center p-2 fixed z-50 ${scrolled ? "backdrop-blur-3xl backdrop-brightness-200 backdrop-opacity-100": "backdrop-blur-none backdrop-brightness-0 backdrop-opacity-0"}`}>
                {/* when scroll bar   backdrop-blur-3xl backdrop-brightness-150 backdrop-opacity-95 that must me added*/}
                {/* logo */}
                {siteconfig.logoType === "text" ? 
                (
                    <h1 className="text-md font-bold text-gray-100 hover:cursor-default">{siteconfig.logoText}</h1>
                ): (
                    <img src={siteconfig.logoImage} alt="Logo Image" />
                )
                }

                <button className="p-1 cursor-pointer hover:transform hover:scale-110 text-gray-100" onClick={()=> setOpen(!open)}>
                    {
                        open ? (<svg viewBox="0 0 24 24" width="50" height="50" className="w-6 h-6">
                        <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2" />
                    </svg>) : (<svg viewBox="0 0 24 24" width="50" height="50" className="w-6 h-6">
                                <path d="M4 6h16 M4 12h16 M4 18h16" stroke="currentColor" strokeWidth="2" />
                            </svg>)
                    }
                </button>
            </nav>
            <MobileMenu open={open} navlinks={siteconfig.navlinks}/>
        </>
    )
}