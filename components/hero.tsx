"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Smartphone, Globe, Sparkles } from "lucide-react"

export default function Hero() {
  const scrollToForm = () => {
    const element = document.getElementById("solicitar")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToExamples = () => {
    const element = document.getElementById("exemplos")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="pt-24 pb-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-indigo-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Transforme ideias em realidade</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 mb-8 leading-tight">
            Crie seu{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">MVP</span> em
            semanas
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
            Validamos sua ideia de negócio criando MVPs de sites e aplicativos mobile.
            <span className="font-medium text-gray-800"> Do conceito ao lançamento de forma rápida e eficiente.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="text-lg px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Meu MVP
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToExamples}
              className="text-lg px-10 py-4 border-2 border-gray-300 hover:border-blue-500 bg-white/60 backdrop-blur-sm hover:bg-white/80 text-gray-700 hover:text-blue-600 rounded-full font-semibold transition-all duration-300"
            >
              Ver Exemplos
            </Button>
          </div>

          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">
              Nossos Serviços
            </h2>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Sites Responsivos</h3>
                  <p className="text-sm text-gray-600">Web Apps modernos</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl px-6 py-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Smartphone className="h-6 w-6 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-gray-800">Apps Mobile</h3>
                  <p className="text-sm text-gray-600">iOS e Android</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
