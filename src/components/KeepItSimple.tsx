import React, {FC} from "react";
import CalendlyLink from "./Calendly";

const KeepItSimple:FC = () => {
    return (
        <>
            <section className="container mx-auto min-h-[60vh] mb-40">
                <h2 className="text-8xl md:text-9xl max-w-fit mx-auto"><span>KEEP IT</span><br /><span>SIMPLE</span><br /><span>STUPID</span></h2>
                <div className="w-max mt-16 mx-auto">
                <CalendlyLink text="Book a Free Consultation!" />
                <p className="mt-2 text-teal-500 flex-initial text-center">15 minutes, no commitment</p>
            </div> 
            </section>
        </>
    )
}

export default KeepItSimple