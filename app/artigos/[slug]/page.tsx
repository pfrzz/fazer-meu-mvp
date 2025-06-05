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
  return <ArticlePageClient params={params} />
}
