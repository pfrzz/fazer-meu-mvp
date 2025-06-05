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
