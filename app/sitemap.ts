import type { MetadataRoute } from 'next'
import { getAllArticles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles()
  
  const baseUrls: MetadataRoute.Sitemap = [
    {
      url: 'https://fazermeumvp.com.br',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://fazermeumvp.com.br/artigos',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
  ]

  // Generate article URLs with medium-high priority
  const articleUrls: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `https://fazermeumvp.com.br/artigos/${article.slug}`,
    lastModified: new Date(article.publishedAt),
    changeFrequency: 'weekly',
    priority: 0.8,
  }))

  return [...baseUrls, ...articleUrls]
}