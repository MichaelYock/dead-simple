import React, {FC} from "react";
import FeaturesItem from "./FeaturesItem"

const Features: FC =() => {

    return (
        <>
            <section id="features" className="container mx-auto min-h-[60vh] grid md:grid-cols-2 md:grid-rows-3 mb-40">
                
            
                
                <FeaturesItem >
                    <h3 className="text-2xl py-4">🔍 SEO Friendly</h3>
                    <p className="text-xl">Search engines like Goolge love fast, responsive, semantic websites with original content. We'll set you up for success with code that Googles robots can understand and catalog.</p>
                </FeaturesItem>

                <FeaturesItem >
                    <h3 className="text-2xl py-4">📱 Mobile First Responsive Design</h3>
                    <p className="text-xl">60% of visitors will view your website on mobile, so it makes sense to design for mobile <i>first</i>. We then make the design 'responsive' to other screen sizes, pixel perfect on all devices.</p>
                </FeaturesItem>

                
                <FeaturesItem >
                    <h3 className="text-2xl py-4">🚀 Built For Speed</h3>
                    <p className="text-xl">Faster page loads mean happier users and better conversion rates. Search engines love fast pages too.</p>
                </FeaturesItem>
                <FeaturesItem >
                    <h3 className="text-2xl py-4">📊 Analytics Reports</h3>
                    <p className="text-xl">We'll set up analytics and reports so you can understand your users and track marketing campaigns.</p>
                </FeaturesItem>
                
                <FeaturesItem >
                    <h3 className="text-2xl py-4">🔒 SSL Secure</h3>
                    <p className="text-xl">See the little padlock? Your site is encrypted with SSL, so your users information is secure. This boosts trust with users <i>and</i> with search engines.</p>
                </FeaturesItem>

                <FeaturesItem >
                    <h3 className="text-2xl py-4">📣 Hosting Included</h3>
                    <p className="text-xl">We deploy your website across the web with modern hosting solutions and Content Delivery Networks. For free :)</p>
                </FeaturesItem>
            </section>
        </>
    )
}

export default Features