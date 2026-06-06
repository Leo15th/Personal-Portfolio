export default function MobileMenu({open,navlinks}){
    return(
        <div className={`w-1/2 bg-transparent p-4 rounded-b-2xl fixed top-12 z-40 right-0 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0": "translate-x-full"}  backdrop-blur-2xl backdrop-brightness-100 backdrop-invert-25 backdrop-opacity-95`}>
            <ul id="mobile-nav-links" className="flex flex-col gap-4 p-2 w-full text-slate-100 md:px-6">
                {
                    navlinks.map((navlink, index)=>(
                        <li key={index} className="nav-links text-lg hover:text-slate-200 hover:text-shadow-lg hover:text-shadow-black hover:cursor-pointer hover:bg-amber-600 rounded-lg hover:transform hover:transition-all hover:duration-300 hover:ease-in-out hover:scale-110 hover:font-bold"><a href={`#${navlink.toLowerCase()}`} className="w-full block p-2 text-right">{navlink}</a></li>
                    ))
                }
            </ul>
        </div>
    )
}