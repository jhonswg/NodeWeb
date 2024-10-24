import React, { useEffect, useRef, ReactNode, ReactElement } from "react"
import gsap from "gsap"

interface MagneticProps {
  children: ReactElement
}

export default function Magnetic({ children }: MagneticProps) {
  const magnetic = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const currentMagnetic = magnetic.current; // Salin ke variabel lokal

    if (!currentMagnetic) return; // Pastikan elemen ada

    const xTo = gsap.quickTo(currentMagnetic, "x", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    })
    const yTo = gsap.quickTo(currentMagnetic, "y", {
      duration: 1,
      ease: "elastic.out(1, 0.3)",
    })

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { height, width, left, top } =
        currentMagnetic.getBoundingClientRect()
      const x = clientX - (left + width / 2)
      const y = clientY - (top + height / 2)
      xTo(x * 0.35)
      yTo(y * 0.35)
    }

    const handleMouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    // Tambahkan event listener pada currentMagnetic
    currentMagnetic.addEventListener("mousemove", handleMouseMove)
    currentMagnetic.addEventListener("mouseleave", handleMouseLeave)

    // Cleanup function
    return () => {
      currentMagnetic.removeEventListener("mousemove", handleMouseMove)
      currentMagnetic.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [children])

  return React.cloneElement(children, { ref: magnetic })
}
