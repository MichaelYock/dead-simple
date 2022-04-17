import React, {FC} from "react"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import Benefits from "../components/Benefits"
import Features from "../components/Features"
import Pricing from "../components/Pricing"
import FAQ from "../components/FAQ"
import KeepItSimple from "../components/KeepItSimple"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"


const IndexPage: FC = () => {
  return (
    <>
      <Hero />
      <Benefits />
      <Features />
      <Pricing />
      <FAQ />
      <KeepItSimple />
      <ContactForm />
      <Footer />
    </>
  )
}

export default IndexPage
