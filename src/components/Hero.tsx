import React, {FC} from "react";
import CalendlyLink from "./Calendly";

const Hero: FC = () => {
    return (
        <>
        <section className="container mx-auto min-h-screen flex flex-col justify-center -mt-14">
            <h2 className="text-7xl md:text-9xl"><span>Need a website,</span><br /><span>not a headache?</span></h2>
            <h3 className="text-3xl md:text-4xl mt-8">We make no-nonsense websites for small businesses.</h3>
            
            
            <div className="w-max mt-16">
            <CalendlyLink text="Book a Free Consultation!" />
                <p className="mt-2 text-teal-500 flex-initial text-center">15 minutes, no commitment</p>
                
            </div> 
           
        </section>
        </>
    )
}

export default Hero