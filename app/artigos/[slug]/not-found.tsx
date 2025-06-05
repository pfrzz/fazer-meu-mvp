import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen } from "lucide-react"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Artigo não encontrado</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6">
              Ops! Artigo não encontrado
            </h1>

            <p className="text-xl text-gray-600 mb-8">
              O artigo que você está procurando não existe ou foi removido. Que tal explorar outros artigos sobre MVP?
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/artigos">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Ver Todos os Artigos
                </Button>
              </Link>
              <Link href="/">
                <Button
                  variant="outline"
                  className="bg-white/60 backdrop-blur-sm border-white/20 hover:bg-white/80 text-gray-700 hover:text-blue-600 px-8 py-3 rounded-full font-semibold"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Início
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
