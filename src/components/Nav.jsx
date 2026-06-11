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
            <nav className={
                `w-full bg-linear-60 flex justify-between items-center p-2 fixed z-50 bg-gray-950 rounded-2xl border-white/20 md:px-8 
                ${scrolled ? 
                    "border-b-2"
                    :
                    "border-0"}
                `}>
                
                {/* logo */}
                {siteconfig.logoType === "text" ? 
                (
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-100 hover:cursor-default">{siteconfig.logoText}</h1>
                ): (
                    <img src={siteconfig.logoImage} alt="Logo Image" />
                )
                }

                <button className="p-1 cursor-pointer hover:transform hover:scale-110 text-gray-100 lg:hidden" onClick={()=> setOpen(!open)} aria-label="Mobile Menu Bars">
                    {
                        open ? (<svg viewBox="0 0 24 24" width="50" height="50" className="w-9 h-9">
                        <path d="M6 6 L18 18 M18 6 L6 18" stroke="currentColor" strokeWidth="2" />
                    </svg>) : (<svg viewBox="0 0 24 24" width="50" height="50" className="w-9 h-9">
                                <path d="M4 6h16 M4 12h16 M4 18h16" stroke="currentColor" strokeWidth="2" />
                            </svg>)
                    }
                </button>

                <ul className="hidden lg:flex gap-6 text-lg font-bold  p-2 text-slate-100">
                    {
                        siteconfig.navlinks.map((link, index)=>(
                            <li key={index} className="py-1 px-2 hover:scale-110 cursor-pointer hover:bg-amber-600 hover:text-shadow-2xs text-shadow-black rounded-xl  transition-all duration-300 ease-in-out">
                                <a href={`#${link.toLowerCase()}`}>{link}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <MobileMenu open={open} navlinks={siteconfig.navlinks}/>
        </>
    )
}