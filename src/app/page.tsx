"use client"
import Preloader from "@/components/Preloader"
// import { AboutSection } from "@/sections/About"
// import { ContactSection } from "@/sections/Contact"
import { Footer } from "@/sections/Footer"
import { Header } from "@/sections/Header"
import { HeroSection } from "@/sections/Hero"
import { HomePage } from "@/components/HomePage"
import { ValuesSection } from "@/sections/Projects"
import { TapeSection } from "@/sections/Tape"
import { TestimonialsSection } from "@/sections/Testimonials"
import { AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
        window.scrollTo(0, 0)
      }, 2000)
    })()
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Header />
      <HeroSection />
      <HomePage
        title={"Node Validator"}
        subtitle1={"Hello I'm"}
        subtitle2={"Jhonswg"}
        description={
          "A trusted validator and inter-chain utility provider, we provide easy steps to delegate funds or explore our services."
        }
        usePhoto
      />
      <div id="values" className="pt-14 md:pt-0">
        <ValuesSection />
      </div>
      <TapeSection />
      <div id="project" className="pt-14 md:pt-0">
        < TestimonialsSection/>
      </div>
      <div id="contact" className="pt-14 md:pt-0">
        <Footer />
      </div>
      {/* <div id="explorer" className="pt-14 md:pt-0">
      </div>
      <div id="Services" className="pt-14 md:pt-0">
      </div> */}
    </>
  )
}
