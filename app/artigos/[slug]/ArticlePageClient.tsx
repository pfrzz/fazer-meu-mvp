"use client"

import { getArticleBySlug } from "@/lib/articles"
import { notFound } from "next/navigation"

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
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{article.title} | fazermeumvp</title>
        <meta name="description" content={article.description} />
        <meta name="keywords" content={article.keywords} />
        <meta name="author" content="fazermeumvp" />
        <link rel="canonical" href={`https://fazermeumvp.com.br/artigos/${article.slug}`} />
      </head>
      <body>
        <header>
          <nav>
            <a href="/">Início</a> |<a href="/artigos">Todos os Artigos</a>
          </nav>
        </header>

        <main>
          <article>
            <h1>{article.title}</h1>

            <section>
              <p dangerouslySetInnerHTML={{ __html: article.content.introduction }} />
            </section>

            {article.content.sections.map((section, index) => (
              <section key={index}>
                <h2>{section.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: section.content }} />
              </section>
            ))}

            <section>
              <h2>Conclusão</h2>
              <p dangerouslySetInnerHTML={{ __html: article.content.conclusion }} />
              <p>
                Quer ajuda para criar o seu MVP?{" "}
                <a href="https://fazermeumvp.com.br">Clique aqui e solicite o seu agora mesmo</a>.
              </p>
            </section>

            <footer>
              {article.reference && (
                <p>
                  <strong>Referência:</strong>{" "}
                  <a href={article.reference} target="_blank" rel="noreferrer noopener">
                    {article.reference.includes("fireworkweb") && "FireworkWeb"}
                    {article.reference.includes("endeavor") && "Endeavor"}
                    {article.reference.includes("notion") && "Notion"}
                    {article.reference.includes("lean.org") && "Lean.org"}
                    {article.reference.includes("startse") && "StartSe"}
                    {article.reference.includes("rockcontent") && "Rock Content"}
                    {article.reference.includes("resulttado") && "Resulttado"}
                    {article.reference.includes("sebrae") && "Sebrae"}
                  </a>
                </p>
              )}
              {nextArticle && (
                <p>
                  <a href={`/artigos/${nextArticle.slug}`}>Próximo artigo: {nextArticle.title}</a>
                </p>
              )}
            </footer>
          </article>
        </main>

        <style jsx>{`
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            color: #333;
          }
          
          header {
            border-bottom: 1px solid #ddd;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          
          nav a {
            color: #0066cc;
            text-decoration: none;
            margin: 0 10px;
          }
          
          nav a:hover {
            text-decoration: underline;
          }
          
          h1 {
            color: #2c3e50;
            font-size: 2.2em;
            margin-bottom: 30px;
            line-height: 1.3;
          }
          
          h2 {
            color: #34495e;
            font-size: 1.5em;
            margin-top: 30px;
            margin-bottom: 15px;
            border-left: 4px solid #3498db;
            padding-left: 15px;
          }
          
          section {
            margin-bottom: 30px;
          }
          
          p {
            margin-bottom: 15px;
            text-align: justify;
          }
          
          ul {
            margin: 15px 0;
            padding-left: 30px;
          }
          
          li {
            margin-bottom: 8px;
          }
          
          strong {
            color: #2c3e50;
          }
          
          a {
            color: #3498db;
            text-decoration: none;
          }
          
          a:hover {
            text-decoration: underline;
          }
          
          footer {
            border-top: 1px solid #ddd;
            padding-top: 20px;
            margin-top: 40px;
            font-size: 0.9em;
            color: #666;
          }
          
          footer p {
            margin-bottom: 10px;
          }
        `}</style>
      </body>
    </html>
  )
}
