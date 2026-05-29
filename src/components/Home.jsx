import { siteconfig } from "../siteconfig"
export default function Home(){
    return(
        <>
            <div className="w-full h-[200vh] bg-black/95 py-32 px-10 flex flex-col gap-20">
                <div className="text-center flex flex-col gap-3 text-gray-200">

                    {/* This is Header/ Hero Title */}
                    <h2 className="text-2xl text-shadow-lg font-extrabold text-shadow-amber-800">"{siteconfig.heroTitle}"</h2>

                    {/* This is Sub Title for jobs describe */}
                    <h3 className="text-lg text-shadow-md font-bold text-shadow-amber-800">{siteconfig.heroSubTitle}</h3>

                    {/* This is short intro for what you offer */}
                    <p className="text-md text-shadow-sm text-shadow-amber-800">"{siteconfig.shortIntro}"</p>

                    {/* This is CTA Button */}
                    <button className="font-bold rounded-lg px-4 py-2 w-fit mx-auto mt-8 shadow-amber-400 text-shadow-md text-shadow-gray-800
             bg-amber-400 transition-all duration-300 ease-in-out
             hover:bg-amber-600 hover:scale-110 hover:shadow-md">{siteconfig.heroBtnText}</button>

                    {/* Social icons */}
                    <ul className="flex gap-2 font-extrabold mx-auto">
                        <li>f</li>
                        <li>i</li>
                        <li>g</li>
                        <li>l</li>
                        <li>f</li>
                        <li>u</li>
                        <li>e</li>
                    </ul>
                </div>
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src="/favicon.svg" alt="profile photo" className="w-full"/>
                </div>
            </div>
        </>
    )
}