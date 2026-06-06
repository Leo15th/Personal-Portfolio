import H2AmberGradient from "./H2AmberGradient"
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { FaUpwork,FaPhone, FaLocationDot } from "react-icons/fa6"
import { siteconfig } from "../siteconfig"

const icons={
    email: <FaEnvelope/>,
    phone: <FaPhone/>,
    address: <FaLocationDot/>
}
const socialIcons={
    facebook: <FaFacebook/>,
    instagram: <FaInstagram/>,
    github: <FaGithub/>,
    linkedin: <FaLinkedin/>,
    upwork: <FaUpwork />
}
export default function Contact(){
    const handleSubmit = (e) =>{
        e.preventDefault();
        e.target.reset();
    }
    return(
        <>  
        <div className="bg-slate-950 py-6 px-10 md:py-8 md:px-20">
            <H2AmberGradient h2Text="Get In Touch"/>
            <h3 className="text-lg font-bold text-slate-100 text-center mt-4 md:text-xl mb-4">Feel free to reach out to me!</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                {/*left grid holder */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-10 py-6 text-center md:gap-16 md:py-10">
                    {/* first grid */}
                    <div className="text-slate-300 w-full mx-auto md:px-10 md:py-8 md:shadow-md shadow-slate-400 md:rounded-4xl">
                        <h3 className="font-bold text-lg mb-10 text-center md:text-2xl">Contact Info</h3>
                        <div>
                            {
                                siteconfig.contactLinks.map((link, index)=>(
                                    <a key={index} className="flex transition-all duration-300 ease-in-out text-slate-400 items-baseline capitalize gap-3 p-2 hover:text-amber-400 hover:cursor-pointer hover:scale-110 hover:font-bold text-md border w-full hover:my-1 rounded-2xl shadow-md hover:shadow-amber-400 md:gap-4 md:text-lg md:p-3 md:rounded-3xl" href={link.url}>
                                        <span aria-hidden="true">{icons[link.name]}</span>
                                        <span>{link.text}</span>
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    {/* second grid */}
                    <div className="text-slate-300 w-full mx-auto md:px-10 md:py-8 md:shadow-md shadow-slate-400 md:rounded-4xl">
                        <h3 className="font-bold text-xl text-center mb-10 md:text-2xl">Follow Me</h3>
                        <ul className="flex gap-5 mt-6 text-slate-400 py-5 flex-wrap md:gap-10 justify-between md:justify-center">
                            {
                                siteconfig.contactSocialLinks.map((link, index)=>(
                                    <li key={index} className="text-3xl transition-all duration-300 ease-in-out hover:text-amber-400 hover:scale-125 w-fit flex md:text-4xl">
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>{socialIcons[link.name]}</a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                {/* right grid holder */}
                <div className="shadow-lg shadow-slate-500 bg-slate-900/30 rounded-3xl my-10 py-8 px-4 md:py-12 md:px-10">
                    <h3 className="font-bold text-2xl mb-4 text-center text-slate-200 text-shadow-md text-shadow-orange-500 md:text-3xl md:text-shadow-lg">Send me a Message</h3>
                    <form className="text-md text-slate-300 p-4 flex flex-col gap-3 md:text-lg md:gap-4" onSubmit={handleSubmit}>
                        {/* for name */}
                        <label htmlFor="name" className="font-bold text-lg md:text-xl">Your Name :</label>{" "}
                        <input type="text" placeholder="John Doe" name="name" id="name" maxLength="30" autoComplete="off" required className="border border-slate-400 px-3 py-1 rounded-xl focus:outline-0 transition-all duration-300 ease-in-out text-slate-400 capitalize focus:text-amber-400 focus:font-bold text-md shadow-md focus:shadow-amber-400 focus:border-amber-600 "/>
                        
                        {/* for email */}
                        <label htmlFor="email" className="font-bold text-lg md:text-xl">Your Email :</label>{" "}
                        <input type="email" placeholder="example@email.com" name="email" id="email" maxLength="40" required className="border border-slate-400 px-3 py-1 rounded-xl focus:outline-0 transition-all duration-300 ease-in-out text-slate-400 capitalize focus:text-amber-400 focus:font-bold text-md shadow-md focus:shadow-amber-400 focus:border-amber-600 "/>

                        {/* for textarea */}
                        <label htmlFor="comment" className="font-bold text-lg md:text-xl">Your Message :</label>{" "}
                        <textarea name="comment" id="comment" rows={5} className="w-full border border-slate-400 px-3 py-1 rounded-xl focus:outline-0 transition-all duration-300 ease-in-out text-slate-400 capitalize focus:text-amber-400 focus:font-bold text-md shadow-md focus:shadow-amber-400 focus:border-amber-600 " placeholder="Your Message"></textarea>

                        {/* button */}
                        <div className="flex justify-center mt-6">
                            <button type="submit" className="text-slate-300 font-bold rounded-lg px-4 py-2 w-fit mx-auto mt-2 text-shadow-md text-shadow-gray-900
                bg-amber-600 transition-all duration-300 ease-in-out
                hover:bg-amber-600 hover:scale-110 cursor-pointer text-md md:text-lg">Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
    )
}