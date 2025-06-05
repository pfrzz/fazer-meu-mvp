"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const scrollToSection = (sectionId: string) => {
    if (pathname !== "/") {
      // Se não estiver na página inicial, navegar para lá primeiro
      window.location.href = `/#${sectionId}`
      return
    }

    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-white/20 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="Logo" width={40} height={40} className="w-10 h-10" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("sobre")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection("exemplos")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Últimos Projetos
            </button>
            <button
              onClick={() => scrollToSection("processo")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Processo
            </button>
            <button
              onClick={() => scrollToSection("solicitar")}
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Solicitar MVP
            </button>
            <Link href="/artigos" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Artigos
            </Link>
            <Button
              onClick={() => scrollToSection("solicitar")}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Começar Agora
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("sobre")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Sobre
              </button>
              <button
                onClick={() => scrollToSection("exemplos")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Últimos Projetos
              </button>
              <button
                onClick={() => scrollToSection("processo")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Processo
              </button>
              <button
                onClick={() => scrollToSection("solicitar")}
                className="text-gray-600 hover:text-blue-600 transition-colors text-left font-medium"
              >
                Solicitar MVP
              </button>
              <Link
                href="/artigos"
                className="text-gray-600 hover:text-blue-600 transition-colors text-left font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Artigos
              </Link>
              <Button
                onClick={() => scrollToSection("solicitar")}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-medium"
              >
                Começar Agora
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
