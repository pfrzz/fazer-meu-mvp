import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, Zap, Target } from "lucide-react"

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white relative overflow-hidden" aria-labelledby="about-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-tr from-indigo-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16">
          <h2
            id="about-heading"
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6"
          >
            O que é um MVP?
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            MVP (Minimum Viable Product) é a versão mais simples do seu produto que permite validar sua ideia com
            usuários reais, coletando feedback valioso antes de investir em desenvolvimento completo.
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-blue-50 to-indigo-50 hover:from-blue-100 hover:to-indigo-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            <CardContent className="relative p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Validação Rápida</h3>
              <p className="text-gray-600 leading-relaxed">
                Teste sua ideia no mercado real sem grandes investimentos. Descubra se há demanda antes de construir o
                produto completo.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            <CardContent className="relative p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Desenvolvimento Ágil</h3>
              <p className="text-gray-600 leading-relaxed">
                Entregamos seu MVP em semanas, focando nas funcionalidades essenciais que realmente importam para seus
                usuários.
              </p>
            </CardContent>
          </Card>

          <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-indigo-50 to-cyan-50 hover:from-indigo-100 hover:to-cyan-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
            <CardContent className="relative p-8 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-900">Foco no Essencial</h3>
              <p className="text-gray-600 leading-relaxed">
                Identificamos e desenvolvemos apenas as funcionalidades core que resolvem o problema principal dos seus
                usuários.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
