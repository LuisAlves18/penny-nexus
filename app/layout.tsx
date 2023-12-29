import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { SliderChartProvider } from './contexts/SliderChartContext'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Penny Nexus - Dashboard'
}


import React from 'react'

const RootLayout = ({
  children,
}: {
  children: React.ReactNode
}) => {
  return (
    <html lang="en">
      <body>
          <SliderChartProvider>
            {children}
          </SliderChartProvider>
      </body>
    </html>
  )
}

export default RootLayout