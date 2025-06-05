import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Palette, Code, Rocket } from "lucide-react"

export default function Process() {
  const steps = [
    {
      icon: MessageSquare,
      title: "1. Descoberta",
      description: "Conversamos sobre sua ideia, objetivos e público-alvo para entender exatamente o que você precisa.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: Palette,
      title: "2. Planejamento",
      description:
        "Definimos as funcionalidades essenciais, criamos wireframes e estabelecemos o cronograma do projeto.",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: Code,
      title: "3. Desenvolvimento",
      description:
        "Nossa equipe desenvolve seu MVP usando as melhores tecnologias, mantendo você informado sobre o progresso.",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Rocket,
      title: "4. Lançamento",
      description: "Entregamos seu MVP pronto para uso, com suporte para ajustes baseados no feedback dos usuários.",
      gradient: "from-green-500 to-green-600",
    },
  ]

  return (
    <section id="processo" className="py-20 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6">
            Nosso Processo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um processo simples e transparente para transformar sua ideia em realidade
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden border-0 bg-white/60 backdrop-blur-xl hover:bg-white/80 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
              <CardContent className="relative p-8 text-center">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
