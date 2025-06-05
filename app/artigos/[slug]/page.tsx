import Header from "@/components/header"
import Footer from "@/components/footer"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const articles = getAllArticles()
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Artigo não encontrado | fazermeumvp",
      icons: {
        icon: [
          { url: "/logo.png", sizes: "32x32", type: "image/png" },
          { url: "/logo.png", sizes: "16x16", type: "image/png" },
        ],
        apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
        shortcut: "/logo.png",
      },
    }
  }

  return {
    title: `${article.title} | fazermeumvp`,
    description: article.description,
    keywords: article.keywords,
    authors: [{ name: "fazermeumvp" }],
    alternates: {
      canonical: `https://fazermeumvp.com.br/artigos/${article.slug}`,
    },
    icons: {
      icon: [
        { url: "/logo.png", sizes: "32x32", type: "image/png" },
        { url: "/logo.png", sizes: "16x16", type: "image/png" },
      ],
      apple: [{ url: "/logo.png", sizes: "180x180", type: "image/png" }],
      shortcut: "/logo.png",
    },
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const nextArticle = article.nextArticle ? getArticleBySlug(article.nextArticle) : null

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <article className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Link href="/artigos">
                <Button
                  variant="outline"
                  className="bg-white/60 backdrop-blur-sm border-white/20 hover:bg-white/80 text-gray-700 hover:text-blue-600"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar aos Artigos
                </Button>
              </Link>
            </div>

            <header className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${article.gradient} rounded-xl flex items-center justify-center`}
                >
                  <div className="text-white font-bold text-sm">MVP</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Clock className="h-4 w-4" />
                  <span>{article.readTime}</span>
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{article.title}</h1>
              <p className="text-xl text-gray-600">{article.description}</p>
            </header>

            <div className="prose prose-lg max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: article.content.introduction }}
                className="mb-6 text-lg leading-relaxed"
              />

              {article.content.sections.map((section, index) => (
                <section key={index} className="mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">
                    {section.title}
                  </h2>
                  <div dangerouslySetInnerHTML={{ __html: section.content }} className="leading-relaxed" />
                </section>
              ))}

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-4">Conclusão</h2>
                <div dangerouslySetInnerHTML={{ __html: article.content.conclusion }} className="leading-relaxed" />
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              {article.reference && (
                <p className="text-sm text-gray-500 mb-4">
                  <strong>Referência:</strong>{" "}
                  <a
                    href={article.reference}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-blue-600 hover:underline"
                  >
                    {article.reference.replace(/https?:\/\/(www\.)?/, "").split("/")[0]}
                  </a>
                </p>
              )}

              <div className="bg-white/60 backdrop-blur-sm border border-white/20 rounded-2xl p-6 mt-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Pronto para criar seu MVP?</h3>
                <p className="text-gray-600 mb-4">
                  Transforme sua ideia em um produto real e validado com nosso serviço de criação de MVPs.
                </p>
                <Link href="/#solicitar">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300">
                    Solicitar Meu MVP
                  </Button>
                </Link>
              </div>

              {nextArticle && (
                <div className="mt-8 bg-gray-50 p-6 rounded-lg">
                  <p className="text-sm text-gray-500 mb-2">Próximo artigo</p>
                  <Link href={`/artigos/${nextArticle.slug}`} className="group">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {nextArticle.title}
                    </h3>
                  </Link>
                </div>
              )}
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  )
}
