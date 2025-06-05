import { Card, CardContent } from "@/components/ui/card"
import { Clock, DollarSign, Users, TrendingUp, Shield, Headphones } from "lucide-react"

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: "Entrega Rápida",
      description: "Seu MVP pronto em 2-8 semanas, dependendo da complexidade",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: DollarSign,
      title: "Custo-Benefício",
      description: "Investimento muito menor que um desenvolvimento completo",
      gradient: "from-green-500 to-green-600",
    },
    {
      icon: Users,
      title: "Feedback Real",
      description: "Colete feedback de usuários reais antes de investir mais",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      icon: TrendingUp,
      title: "Validação de Mercado",
      description: "Descubra se há demanda real para sua solução",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Redução de Riscos",
      description: "Minimize riscos testando sua ideia com baixo investimento",
      gradient: "from-red-500 to-red-600",
    },
    {
      icon: Headphones,
      title: "Suporte Contínuo",
      description: "Acompanhamento e suporte após o lançamento do MVP",
      gradient: "from-cyan-500 to-cyan-600",
    },
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden" aria-labelledby="benefits-heading">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-br from-blue-400/5 to-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-72 h-72 bg-gradient-to-tr from-indigo-400/5 to-pink-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16">
          <h2
            id="benefits-heading"
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6"
          >
            Por que Escolher Nossos MVPs?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos muito mais que apenas desenvolvimento - somos seus parceiros na validação da sua ideia
          </p>
        </header>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <li key={index}>
              <Card className="group relative overflow-hidden border-0 bg-gradient-to-br from-gray-50 to-blue-50 hover:from-gray-100 hover:to-blue-100 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent"></div>
                <CardContent className="relative p-8">
                  <div
                    className={`w-12 h-12 bg-gradient-to-br ${benefit.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </CardContent>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
