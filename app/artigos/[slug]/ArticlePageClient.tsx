"use client"

import { getArticleBySlug } from "@/lib/articles"
import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ArticlePageProps {
  params: {
    slug: string
  }
}

export default function ArticlePageClient({ params }: ArticlePageProps) {
  const article = getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  const nextArticle = article.nextArticle ? getArticleBySlug(article.nextArticle) : null

  return (
    <article className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
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
            <div className="text-white font-bold">MVP</div>
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
        <div dangerouslySetInnerHTML={{ __html: article.content.introduction }} className="mb-6 text-lg" />

        {article.content.sections.map((section, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: section.content }} />
          </section>
        ))}

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusão</h2>
          <div dangerouslySetInnerHTML={{ __html: article.content.conclusion }} />
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

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Pronto para criar seu MVP?</h3>
          <p className="text-gray-600 mb-4">
            Transforme sua ideia em um produto real e validado com nosso serviço de criação de MVPs.
          </p>
          <Link href="/#solicitar">
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-full font-semibold">
              Solicitar Meu MVP
            </Button>
          </Link>
        </div>

        {nextArticle && (
          <div className="mt-8">
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
  )
}
