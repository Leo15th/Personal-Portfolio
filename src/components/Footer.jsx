import { siteconfig } from "../siteconfig"
export default function Footer(){
    return(
        <>
            <div className="flex flex-col items-center gap-4 text-slate-200 py-6 bg-slate-900">
                <h3 className="font-bold text-lg md:text-xl">Phyo Wai Aung Portfolio</h3>
                    <ul className="flex gap-6 text-sm md:text-[16px]">
                        {
                            siteconfig.navlinks.map((link,index)=>(
                                <li key={index}><a href={`#${link.toLowerCase()}`} className="hover:text-amber-500 hover:text-shadow-md hover:text-shadow-amber-700 hover:cursor-pointer hover:font-bold">{link}</a></li>
                            ))
                        }
                    </ul>
                <p className="text-xs text-slate-200 md:text-sm">© 2026 Phyo Wai Aung. All rights reserved.</p>
            </div>
        </>
    )
}