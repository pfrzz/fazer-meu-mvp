import Header from "@/components/header"
import Footer from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getAllArticles } from "@/lib/articles"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Artigos sobre MVP | Fazer Meu MVP",
  description:
    "Aprenda tudo sobre MVPs com nossos artigos especializados. Dicas práticas para transformar sua ideia em um negócio de sucesso.",
  icons: {
    icon: [
      { url: "/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/logo.png",
  },
}

export default function ArticlesPage() {
  const articles = getAllArticles()

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Navigation back to home */}
          <div className="mb-8">
            <Link href="/">
              <Button
                variant="outline"
                className="bg-white/60 backdrop-blur-sm border-white/20 hover:bg-white/80 text-gray-700 hover:text-blue-600"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Início
              </Button>
            </Link>
          </div>

          <header className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <BookOpen className="h-4 w-4 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Conhecimento MVP</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6">
              Artigos sobre MVP
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Aprenda tudo sobre MVPs e como eles podem transformar sua ideia em um negócio de sucesso.
              <span className="font-medium text-gray-800"> Conhecimento prático para empreendedores.</span>
            </p>
          </header>

          <section aria-labelledby="articles-list-heading">
            <h2 id="articles-list-heading" className="sr-only">
              Lista de Artigos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article, index) => (
                <article key={article.id}>
                  <Link href={`/artigos/${article.slug}`}>
                    <Card className="group relative overflow-hidden border-0 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full cursor-pointer">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                      <CardContent className="relative p-8 flex flex-col h-full">
                        <div className="flex items-center gap-3 mb-6">
                          <div
                            className={`w-12 h-12 bg-gradient-to-br ${article.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                          >
                            <BookOpen className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Clock className="h-4 w-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed flex-grow">{article.description}</p>

                        <div className="mt-6 pt-4 border-t border-gray-200/50">
                          <span className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
                            Ler artigo completo
                            <svg
                              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </article>
              ))}
            </div>
          </section>

          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pronto para criar seu MVP?</h3>
              <p className="text-gray-600 mb-6">
                Agora que você conhece a importância dos MVPs, que tal transformar sua ideia em realidade?
              </p>
              <Link href="/#solicitar">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                  Solicitar Meu MVP
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
