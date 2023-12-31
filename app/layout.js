'use client'

import Header from '@/components/Header/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/context/AppContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Foodatize',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <AppProvider>
    <html lang="en">
      <body className={`bg-[#F5F5F5] ${inter.className}`}>
        <Header/>
        {children}
      </body>
    </html>
    </AppProvider>
  )
}
