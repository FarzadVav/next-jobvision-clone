import type { Metadata } from "next"

import Header from "@/components/Header"
import "./globals.css"
import addInitialDatasToDB from "./actions/addInitialDatasToDB"

export const metadata: Metadata = {
  title: "Jobvision Clone",
  description: "Generated by create next app",
}

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  await addInitialDatasToDB()

  return (
    <html lang="fa" dir="rtl">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}