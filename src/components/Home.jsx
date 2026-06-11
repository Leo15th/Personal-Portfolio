import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaUpwork } from "react-icons/fa6"
import { siteconfig } from "../siteconfig"
import H2AmberGradient from "./H2AmberGradient"

const icons ={
    facebook: <FaFacebook/>,
    instagram: <FaInstagram/>,
    github: <FaGithub/>,
    linkedin: <FaLinkedin/>,
    upwork: <FaUpwork />,
    email: <FaEnvelope/>
}

export default function Home(){
    return(
        <>
            {/* <div className="w-full pt-20 py-4 flex flex-col gap-10 md:py-10 md:gap-14 md:pt-24"> */}
            <div className="w-full pt-20 py-4 md:py-10 md:pt-24 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="text-center flex flex-col gap-4 mx-auto w-full">

                    {/* This is Header/ Hero Title */}
                    <H2AmberGradient h2Text={siteconfig.heroTitle} />

                    {/* This is Sub Title for jobs describe */}
                    <p className="text-lg font-medium text-slate-300 md:text-xl">{siteconfig.heroSubTitle}</p>

                    {/* This is short intro for what you offer */}
                    <p className="text-md max-w-md text-slate-400 leading-relaxed mb-2 text-center md:text-lg mx-auto">{siteconfig.shortIntro}</p>

                    {/* This is CTA Button */}
                    <a className="text-slate-300 font-bold rounded-lg px-4 py-2 w-fit mx-auto mt-2 text-shadow-md text-shadow-gray-900
             bg-amber-600 transition-all duration-300 ease-in-out
             hover:bg-amber-600 hover:scale-110 cursor-pointer text-md md:text-lg" href="#projects" id="cta-btn" aria-label="cta-btn to view projects">{siteconfig.heroBtnText}</a>

                    {/* Social icons */}
                    <ul className="flex gap-5 mt-6 font-extrabold mx-auto text-slate-300">
                        {
                            siteconfig.socialLinks.map((link, index)=>(
                                <li key={index} className="text-4xl transition-all duration-300 ease-in-out hover:text-amber-400 hover:scale-125 md:text-4xl">
                                    <a 
                                    href={link.url} 
                                    aria-label={icons[link.name]}
                                    target="_blank"
                                    rel="noopener noreferrer">
                                        {icons[link.name]}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* <div className="w-4/5 h-auto mx-auto md:w-3/5"> */}
                <div className="w-4/5 h-auto mx-auto md:w-3/5 min-w-sm max-w-2xl ">
                    <img src={siteconfig.heroImage} alt="profile photo" className="w-full object-cover object-center rounded-4xl bg-gray-700/20"/>
                </div>
            </div>
        </>
    )
}