import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Clock, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Articles() {
  const articles = [
    {
      title: "Por que lançar um MVP pode salvar sua ideia de negócio",
      content:
        "Muitas boas ideias morrem antes mesmo de chegar ao mercado. Isso acontece porque seus criadores gastam tempo e dinheiro desenvolvendo um produto completo, sem saber se existe demanda real. Um MVP (Produto Mínimo Viável) muda esse cenário. Ele permite validar sua ideia com o menor investimento possível, evitando frustrações e desperdício. Negócios que testam suas hipóteses com um MVP conseguem se adaptar rapidamente, corrigir falhas e entender o que o mercado realmente quer.",
      readTime: "3 min",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      title: "MVP: a chave para evitar desperdício de tempo e dinheiro",
      content:
        "Desenvolver um produto completo antes de testá-lo é como apostar no escuro. Com um MVP, você direciona seus esforços para o que realmente importa: entender o usuário e entregar valor. Muitas empresas gastam meses desenvolvendo funcionalidades que ninguém usa. O MVP ajuda a evitar isso, permitindo que você valide o essencial primeiro, economize recursos e tome decisões com base em dados reais, não suposições.",
      readTime: "4 min",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      title: "Empresas que ignoraram o MVP e falharam: o que aprender com elas",
      content:
        "Diversas startups investiram pesado em produtos completos antes de validar sua proposta — e falharam. Startups como Webvan e Juicero são exemplos clássicos: grandes ideias, execução cara e falta de validação de mercado. O MVP teria permitido testar suas hipóteses, descobrir falhas e adaptar a solução. Ignorar o MVP é como construir uma casa sem saber se alguém quer morar nela.",
      readTime: "5 min",
      gradient: "from-indigo-500 to-indigo-600",
    },
    {
      title: "Como o MVP pode gerar resultados reais para o seu negócio em semanas",
      content:
        "Empreendedores que adotam a estratégia de MVP veem resultados em tempo recorde. Ao lançar uma versão enxuta, é possível obter feedback direto dos usuários, entender padrões de comportamento e ajustar o produto com base em evidências. Em poucos dias ou semanas, já é possível saber se sua ideia tem potencial, enquanto produtos completos levam meses para revelar esse mesmo dado — às vezes tarde demais.",
      readTime: "4 min",
      gradient: "from-green-500 to-green-600",
    },
    {
      title: "O MVP como arma para startups se destacarem no mercado",
      content:
        "Num cenário altamente competitivo, sair na frente é essencial. Startups que lançam um MVP conseguem chegar ao mercado antes da concorrência, aprendem mais rápido e ganham tempo para evoluir. Enquanto outras empresas ainda estão desenvolvendo suas soluções em ambientes fechados, quem trabalha com MVP já está em contato com os usuários, ajustando o produto e construindo uma base sólida de clientes.",
      readTime: "3 min",
      gradient: "from-cyan-500 to-cyan-600",
    },
    {
      title: "Inovação real começa com validação: o papel do MVP nesse processo",
      content:
        "Inovar não é apenas ter uma boa ideia — é transformar essa ideia em algo que as pessoas realmente usam. O MVP é o primeiro passo nessa jornada. Ele tira a ideia do papel, coloca em teste, e revela se há aderência com o mercado. Sem validação, a inovação é apenas um risco. Com um MVP, você reduz esse risco e transforma suposições em dados concretos, com agilidade e foco no cliente.",
      readTime: "4 min",
      gradient: "from-pink-500 to-pink-600",
    },
    {
      title: "Como o MVP pode ajudar você a entender seu cliente de verdade",
      content:
        "Nenhuma pesquisa substitui a experiência real do usuário com seu produto. O MVP proporciona exatamente isso: interação verdadeira com o público, desde o primeiro momento. A partir dessas interações, é possível descobrir o que realmente importa para o cliente, quais dores precisam ser resolvidas e o que deve ser priorizado. Isso muda completamente a forma de desenvolver e vender um produto digital.",
      readTime: "5 min",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      title: "Investidores querem resultados — e o MVP pode entregá-los rápido",
      content:
        "Para investidores, ideias são importantes — mas o que realmente importa são resultados. Um MVP é a forma mais rápida de mostrar que sua ideia tem valor de mercado. Com um produto mínimo funcional, você pode apresentar dados reais: número de usuários, taxa de retenção, engajamento e feedback. Esses indicadores aumentam drasticamente suas chances de conseguir investimento, pois demonstram tração e foco estratégico.",
      readTime: "4 min",
      gradient: "from-red-500 to-red-600",
    },
    {
      title: "Transforme intuição em estratégia com o MVP",
      content:
        "Todo empreendedor começa com uma ideia e uma intuição forte de que ela pode funcionar. Mas o mercado é imprevisível. O MVP é o caminho para transformar intuição em estratégia. Ele permite testar ideias com clientes reais, descobrir se o problema que você quer resolver realmente existe e adaptar sua proposta de valor. Isso transforma uma aposta em um plano validado, com base em dados reais.",
      readTime: "3 min",
      gradient: "from-teal-500 to-teal-600",
    },
    {
      title: "O MVP como motor de aprendizado contínuo no seu negócio",
      content:
        "Empresas que aprendem mais rápido crescem mais rápido. O MVP cria um ciclo de aprendizado contínuo: você lança, mede, aprende e ajusta. Esse processo constante de melhoria evita a estagnação e garante que seu produto evolua com base nas necessidades reais do mercado. Em vez de adivinhar o que funciona, você desenvolve com base em evidências. Isso é fundamental para se manter relevante e competitivo.",
      readTime: "4 min",
      gradient: "from-violet-500 to-violet-600",
    },
  ]

  return (
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
              <article key={index}>
                <Card className="group relative overflow-hidden border-0 bg-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-500 hover:scale-105 hover:shadow-2xl h-full">
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
                      {index + 1}. {article.title}
                    </h3>

                    <p className="text-gray-600 leading-relaxed flex-grow">{article.content}</p>

                    <div className="mt-6 pt-4 border-t border-gray-200/50">
                      <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm group-hover:gap-2 transition-all duration-300 flex items-center gap-1">
                        Ler mais
                        <svg
                          className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  </CardContent>
                </Card>
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
  )
}
