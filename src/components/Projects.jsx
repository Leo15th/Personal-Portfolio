import H2AmberGradient from "./H2AmberGradient"
import { siteconfig } from "../siteconfig"
export default function Projects(){
    return(
        <>
            <div className="py-4 px-5 md:py-8 md:px-20">
                {/* div for header */}
                <div className="mb-8 ">
                    <H2AmberGradient h2Text="Projects" />
                    <p className="text-slate-400 mt-8 md:mt-10 text-md md:text-lg">{siteconfig.projectsIntro}</p>
                </div>
                {/* div for grid holder */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {
                        siteconfig.projects.map((project, index)=>(
                            <div key={index} className="text-white p-4 mx-auto">
                            {/* project header */}
                                <h3 className="text-xl mb-4 font-bold text-amber-400 md:text-2xl md:mb-6">{project.title}</h3>
                                {/* project description*/}
                                <p className="text-md text-slate-300 md:text-lg">{project.description}</p>
                                {/* image for description */}
                                <div className="w-full mx-auto py-8 mb-2 md:mb-4 aspect-video">
                                    <img src={project.img} alt={project.imgAlt} className="w-full max-w-md h-auto object-contain bg-gray-950 object-center rounded-2xl shadow-lg shadow-slate-500 transition-all duration-300 ease-in-out hover:scale-110 hover:cursor-pointer hover:shadow-amber-600 hover:my-2 sm:mx-auto md:mx-0"/>
                                </div>
                                {/* TECH you use */}
                                <div className="flex justify-start items-baseline gap-2 md:gap-4 mb-2 md:mb-4">
                                    <span className="text-orange-500 font-extrabold text-lg md:text-xl">Tech:</span>
                                    <div className="text-slate-200 text-md md:text-lg">
                                        {project.tech}
                                    </div>
                                </div>
                                {/* links */}
                                <div className="flex justify-start items-baseline gap-2 md:gap-4">
                                    <span className="text-orange-500 font-extrabold text-lg md:text-xl">Links:</span>
                                    <div className="text-slate-200 flex gap-4 md:gap-6 text-md md:text-lg">
                                        {
                                            project.links.map((link, index)=>(
                                                <a key={index} href={link.url} rel="noopener noreferrer" target="_blank" className="hover:text-amber-500 hover:font-bold text-shadow-amber-200 hover:text-shadow-sm">{link.label}</a>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </>
    )
}