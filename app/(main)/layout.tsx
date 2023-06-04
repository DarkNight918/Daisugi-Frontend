"use client"
import MainLayout from "@/components/MainLayout"

// export const metadata = {
//   title: 'Main Daisugi Dashboard',
//   description: 'Analyze your Blockchain data Today',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <MainLayout>
      {children}
    </MainLayout>
  )
}
