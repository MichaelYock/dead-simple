import React, {FC} from "react";
import CalendlyLink from "./Calendly";

const Ticksvg: FC =() => {
    return (
        <svg className="mr-2 w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
      </svg>
    )
}

const Pricing: FC =() => {
    return (
        <>
        <section id="pricing" className="container mx-auto mb-40 min-h-[60vh]">
        <div className="grid md:grid-cols-2 gap-12 ">
            <div>
              <h2 className="text-6xl flex flex-col justify-center h-full mb-8"><span>One affordable price.</span><br /><span>No surprises.</span></h2>
            </div>
            
            <div className="flex flex-wrap -mx-4 col-span-1">
        <div className=" px-4">
          <div className="p-8 bg-white shadow-lg rounded">
            <h4 className="mb-2 text-2xl font-bold font-heading">Monthly</h4>
            <span className="text-6xl font-bold">$200</span>
            <span className="text-gray-400 text-xs">/month</span>
            <p className="mt-3 mb-6 text-gray-500 leading-loose">$0 down for a standard 5 page small business website. No minimum contract, no cancelation fees.</p>
            <ul className="mb-6 text-gray-500">
              <li className="mb-2 flex">
              <Ticksvg />
                <span>Up to 5 Pages</span>
              </li>
              <li className="mb-2 flex">
              <Ticksvg />
                <span>Mobile Responsive</span>
              </li>
              <li className="mb-2 flex">
              <Ticksvg />
                <span>Unlimited Content Edits</span>
              </li>
              <li className="mb-2 flex">
              <Ticksvg />
                <span>Hosting Included</span>
              </li>
              <li className="mb-2 flex">
              <Ticksvg />
                <span>Ongoing Support</span>
              </li>
            </ul>
            <CalendlyLink text="Get Started" />
          </div>
        </div>
      </div>
            </div>
            
        </section>
        </>
    )
}

export default Pricing