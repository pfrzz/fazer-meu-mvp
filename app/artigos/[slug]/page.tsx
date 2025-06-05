import Header from "@/components/header"
import Footer from "@/components/footer"
import { getArticleBySlug, getAllArticles } from "@/lib/articles"
import type { Metadata } from "next"
import ArticlePageClient from "./ArticlePageClient"

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
  }
}

export default function ArticlePage({ params }: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-24 pb-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <ArticlePageClient params={params} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
