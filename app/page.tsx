import Head from "next/head"
import Header from "@/components/header"
import Hero from "@/components/hero"
import About from "@/components/about"
import Examples from "@/components/examples"
import Process from "@/components/process"
import RequestForm from "@/components/request-form"
import Benefits from "@/components/benefits"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Head>
        <title>Fazer Meu MVP | Criação Ágil de MVPs para Startups</title>
        <meta
          name="description"
          content="Transforme sua ideia em um MVP funcional. Desenvolvemos sites e aplicativos para validar seu negócio de forma rápida e eficiente."
        />
      </Head>

      <Header />
      <Hero />
      <About />
      <Examples />
      <Process />
      <RequestForm />
      <Benefits />
      <Footer />
    </div>
  )
}

