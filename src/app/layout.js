import './globals.css'
import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Naveenkumar Ramkumar',
  description: `Hello there! I'm NaveenKumar, a passionate software developer with a dedication to crafting digital solutions that make a difference. Here, you'll find a glimpse into my journey, expertise, and insights into the ever-evolving world of software development.`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        </body>
    </html>
  )
}
