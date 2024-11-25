import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar.js"
import { Footer } from "@/components/Footer"
import { Raleway } from 'next/font/google'

const raleway_init = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={raleway_init.variable}>
        <nav>
          <Navbar />
        </nav>
        <main>
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

