"use client"
import Layout from "@/components/Layout"

export const metadata = {
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <Layout>
      {children}
    </Layout>
  )
}
