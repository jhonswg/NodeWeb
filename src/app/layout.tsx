import type { Metadata } from "next"
import { Inter, Calistoga, JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { twMerge } from "tailwind-merge"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
})
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
})

export const metadata: Metadata = {
  title: "Jhonswg - Stake and Earn with Us",
  description: "PoS Node Validator",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* Tambahkan favicon di sini */}
        <link rel="icon" href="assets/images/profile/logo.png" type="image/png" />
        {/* Jika menggunakan format lain seperti PNG */}
        {/* <link rel="icon" href="/favicon.png" type="image/png" /> */}
      </head>
      <body
        className={twMerge(
          inter.variable,
          calistoga.variable,
          jetbrainsMono.variable,
          "bg-gray-900 text-white antialiased font-sans"
        )}
      >
        {children}
      </body>
    </html>
  )
}
