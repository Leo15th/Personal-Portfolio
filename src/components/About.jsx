import { siteconfig } from "../siteconfig"
import H2AmberGradient from "./H2AmberGradient"
export default function About(){
    return(
        <>
            <div className="text-slate-300 tracking-tighter leading-relaxed p-4 text-justify flex flex-col gap-3 md:py-8 md:px-20 md:tracking-wide">
                <div className="mb-4">
                    <H2AmberGradient h2Text="About Me"/>
                </div>
                <p className="text-md text-slate-400 md:text-lg">{siteconfig.firstParaText}</p>
                <p className="text-md text-slate-400 md:text-lg">{siteconfig.secondParaText}</p>
                <p className="text-md text-slate-400 md:text-lg">{siteconfig.thirdParaText}</p>
            </div>
        </>
    )
}