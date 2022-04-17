import React, {FC} from "react";
import { StaticImage } from "gatsby-plugin-image"
import BenefitsItem from "./BenefitsItem";

const Benefits: FC = () => {
    return (
        <>
            <section className="container mx-auto min-h-[60vh] grid md:grid-cols-2 mb-40">
                
                <div className="flex flex-col algn-center">
                <BenefitsItem >
                    <h3 className="text-4xl py-4">Simple is <span className="text-teal-500">Fast ⚡</span></h3>
                    <p className="text-xl">We're not here to waste your time. We work quickly to get your website up and running with minimum fuss.</p>
                </BenefitsItem>
                <BenefitsItem >
                    <h3 className="text-4xl py-4">Simple is <span className="text-teal-500">Reliable 👍</span></h3>
                    <p className="text-xl">Rest easy with 99% uptime and secure SSL encryption. Our websites dont break and dont need constant updates.</p>
                </BenefitsItem>
                <BenefitsItem >
                    <h3 className="text-4xl py-4">Simple is <span className="text-teal-500">Affordable 💸</span></h3>
                    <p className="text-xl">Fair and transparent pricing designed for small business; no hidden fees, one flat price.</p>
                </BenefitsItem>
                </div>
                <div className="flex place-content-center order-first mb-20 md:order-last md:mb-0">
                <StaticImage objectFit="contain" src="../images/website-design.svg" alt="Designing Websites" />
                </div>
            </section>
        </>
    )
}

export default Benefits
