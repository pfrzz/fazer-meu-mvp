import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Fazer Meu MVP | Criação Ágil de MVPs",
  description:
    "Transforme sua ideia em um MVP funcional. Desenvolvemos sites e aplicativos para validar seu negócio de forma rápida e eficiente.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
