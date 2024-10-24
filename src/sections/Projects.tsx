import { motion } from "framer-motion"
import Image from "next/image"
import CheckCircleIcon from "@/assets/icons/check-circle.svg"
import { Card } from "@/components/Card"
import { SectionHeader } from "@/components/Sectionheader"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Tipe data untuk nilai portofolio
const portfolioValues = [
  {
    title: "High Security",
    results: [
      { title: "Jhonswg Staking Service is highly secure with 24/7 Monitoring" },
    ],
  },
  {
    title: "Low Fees & Commision",
    results: [
      { title: "We offer staking with commissions between 5-10% on all chains" },
    ],
  },
  {
    title: "Community Friendly",
    results: [
      { title: "We actively engage and support our community" },
    ],
  },
  {
    title: "Non-custodial",
    results: [
      { title: "You have full control over your funds" },
    ],
  },
]

// Definisikan tipe untuk props
interface FadeInWhenVisibleProps {
  children: React.ReactNode; // Gunakan React.ReactNode untuk tipe children
  delay?: number; // Delay opsional
}

const FadeInWhenVisible = ({ children, delay = 0 }: FadeInWhenVisibleProps) => {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: isInView ? 1 : 0,
        y: isInView ? 0 : 50
      }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}

export const ValuesSection = () => {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const isHeaderInView = useInView(headerRef, { once: false, margin: "-100px" })

  return (
    <div>
      <section className="pb-16 lg:py-24">
        <div className="container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: isHeaderInView ? 1 : 0,
              y: isHeaderInView ? 0 : 50
            }}
            transition={{ duration: 0.5 }}
          >
            <SectionHeader
              eyebrow="Values"
              title="What We Offer"
              description="See how I transformed concepts into engaging experience."
            />
          </motion.div>

          <div className="mt-10 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-stretch">
            {portfolioValues.map((project, projectIndex) => (
              <FadeInWhenVisible key={project.title} delay={projectIndex * 0.2}>
                <Card
                  className="h-full flex flex-col px-8 pt-8 md:pt-12 md:px-10 lg:pt-10 lg:px-10 font-mono"
                  style={{ 
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    minHeight: '100px' // Tambahkan minimum height
                  }}
                >
                  <div className="flex flex-col flex-grow justify-between">
                    {/* Header Section */}
                    <div className="flex flex-col items-center">
                      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 uppercase tracking-widest text-sm text-transparent bg-clip-text" />
                      <h3 className="font-mono text-xl md:text-2xl text-center">
                        {project.title}
                      </h3>
                      <hr className="w-full border-t border-white/5 my-6" />
                    </div>

                    {/* Content Section - Centered vertically */}
                    <div className="flex-grow flex items-center">
                      <ul className="w-full space-y-4">
                        {project.results.map((result, i) => (
                          <li
                            className="flex items-start gap-3 text-sm md:text-base text-white/50"
                            key={i}
                          >
                            <CheckCircleIcon className="size-5 md:size-6 text-emerald-300 flex-shrink-0 mt-0.5" />
                            <span className="flex-grow">{result.title}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Space */}
                    <div className="h-5" /> {/* Consistent bottom padding */}
                  </div>
                </Card>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
