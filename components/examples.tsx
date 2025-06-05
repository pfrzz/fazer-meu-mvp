import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Smartphone, Activity, Share2 } from "lucide-react"

export default function Examples() {
  const projects = [
    {
      name: "Sequel",
      description:
        "Aplicativo de saúde e longevidade que utiliza inteligência artificial para fornecer recomendações personalizadas baseadas em dados de saúde do usuário.",
      features: [
        "Análise de exames laboratoriais",
        "Processamento local de dados",
        "Recomendações de terapias",
        "Privacidade garantida",
      ],
      url: "https://www.withsequel.com/",
      icon: Activity,
      gradient: "from-green-500 to-emerald-600",
    },
    {
      name: "RunnerAI",
      description:
        "Aplicativo multiplataforma de corrida que utiliza inteligência artificial para oferecer planos de treinamento personalizados e análises avançadas.",
      features: [
        "Planos de treinamento IA",
        "Orientações em tempo real",
        "Análises de desempenho",
        "Para todos os níveis",
      ],
      url: "https://apps.apple.com/us/app/runnerai-achieve-your-goals/id6670146562",
      icon: Smartphone,
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      name: "FitStories",
      description:
        "Aplicativo que transforma seus treinos em conteúdos visuais prontos para serem compartilhados nas redes sociais, especialmente no Instagram.",
      features: ["Importação de atividades", "Resumos semanais", "Sobreposições personalizadas", "Design criativo"],
      url: "https://apps.apple.com/us/app/fitstories/id6742423401",
      icon: Share2,
      gradient: "from-purple-500 to-pink-600",
    },
  ]

  return (
    <section
      id="exemplos"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
      aria-labelledby="examples-heading"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <header className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
            <ExternalLink className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Projetos Reais</span>
          </div>
          <h2
            id="examples-heading"
            className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 mb-6"
          >
            Exemplos de MVPs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns projetos que desenvolvemos e que estão fazendo a diferença no mercado
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <article key={index}>
              <Card className="group relative overflow-hidden border-0 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                <CardContent className="relative p-8">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <project.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>

                  <ul className="space-y-2 mb-8">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                        <span className="text-sm text-gray-600 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:gap-3 transition-all duration-300"
                  >
                    Ver Projeto
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </CardContent>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
