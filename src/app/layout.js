import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar.js"
import { Footer } from "@/components/Footer.js"
import { Raleway } from 'next/font/google'
import { Jost } from 'next/font/google'
import { Providers } from '@/components/Providers.js'
import { FooterMobile } from "@/components/FooterMobile.js";
import { BackToTop } from "@/components/BackToTop.js"

const raleway_init = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})

const jost_init = Jost({
  subsets: ['latin'],
  variable: '--font-jost'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway_init.variable}>
        <Providers>
          <nav>
            <Navbar />
          </nav>
          <main>
            {children}
            <BackToTop />
          </main>
          <footer>
            <Footer />
            <FooterMobile />
          </footer>
        </Providers>
      </body>
    </html>
  );
}

