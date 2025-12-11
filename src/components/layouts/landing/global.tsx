import AboutUs from "./about_us";
import LandingHome from "./home";


export default function GlobalLandingResource () {
    return (
        <>
            <div className="w-full p-6 md:px-16 md:py-8 relative">
                <div>
                    <LandingHome />
                </div>
                <div>
                    <AboutUs />
                </div>
            </div>
        </>
    )
}