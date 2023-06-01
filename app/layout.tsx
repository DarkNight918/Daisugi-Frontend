"use client"
import './globals.css'

export const metadata = {
  title: 'Welcome to Daisugi',
  description: 'Analyze your Blockchain data Today',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
