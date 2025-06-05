"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function RequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <section id="solicitar" className="py-16 bg-white" aria-labelledby="form-success-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="text-center p-8">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 id="form-success-heading" className="text-2xl font-bold text-gray-900 mb-2">
                  Solicitação Enviada!
                </h3>
                <p className="text-gray-600 mb-6">
                  Recebemos sua solicitação e entraremos em contato em até 24 horas para discutir seu projeto.
                </p>
                <Button onClick={() => setIsSubmitted(false)}>Enviar Nova Solicitação</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="solicitar" className="py-16 bg-white" aria-labelledby="form-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
          <h2 id="form-heading" className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Solicite Seu MVP
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato para discutir seu projeto
          </p>
        </header>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Informações do Projeto</CardTitle>
              <CardDescription>
                Conte-nos sobre sua ideia e como podemos ajudar a transformá-la em realidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <fieldset className="grid md:grid-cols-2 gap-4">
                  <legend className="sr-only">Informações Pessoais</legend>
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo *</Label>
                    <Input id="nome" name="nome" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>
                </fieldset>

                <fieldset className="grid md:grid-cols-2 gap-4">
                  <legend className="sr-only">Informações de Contato</legend>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" name="telefone" type="tel" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" name="empresa" />
                  </div>
                </fieldset>

                <fieldset className="space-y-6">
                  <legend className="sr-only">Detalhes do Projeto</legend>

                  <div className="space-y-2">
                    <Label htmlFor="tipo-projeto">Tipo de Projeto *</Label>
                    <Select name="tipo-projeto" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione o tipo de projeto" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="site">Site/Landing Page</SelectItem>
                        <SelectItem value="webapp">Aplicação Web</SelectItem>
                        <SelectItem value="mobile">Aplicativo Mobile</SelectItem>
                        <SelectItem value="ecommerce">E-commerce</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="descricao">Descrição da Ideia *</Label>
                    <Textarea
                      id="descricao"
                      name="descricao"
                      placeholder="Descreva sua ideia, o problema que resolve e quem é seu público-alvo..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="funcionalidades">Principais Funcionalidades</Label>
                    <Textarea
                      id="funcionalidades"
                      name="funcionalidades"
                      placeholder="Liste as funcionalidades mais importantes que seu MVP deve ter..."
                      className="min-h-[100px]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="prazo">Prazo Desejado</Label>
                    <Select name="prazo">
                      <SelectTrigger>
                        <SelectValue placeholder="Quando você gostaria de lançar?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-semanas">2 semanas</SelectItem>
                        <SelectItem value="1-mes">1 mês</SelectItem>
                        <SelectItem value="2-meses">2 meses</SelectItem>
                        <SelectItem value="3-meses">3 meses ou mais</SelectItem>
                        <SelectItem value="flexivel">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="orcamento">Orçamento Estimado</Label>
                    <Select name="orcamento">
                      <SelectTrigger>
                        <SelectValue placeholder="Qual seu orçamento para o projeto?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                        <SelectItem value="5k-10k">R$ 5.000 - R$ 10.000</SelectItem>
                        <SelectItem value="10k-20k">R$ 10.000 - R$ 20.000</SelectItem>
                        <SelectItem value="20k-50k">R$ 20.000 - R$ 50.000</SelectItem>
                        <SelectItem value="acima-50k">Acima de R$ 50.000</SelectItem>
                        <SelectItem value="discutir">Prefiro discutir</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </fieldset>

                <fieldset className="space-y-4">
                  <legend className="sr-only">Preferências e Termos</legend>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" name="newsletter" />
                    <Label htmlFor="newsletter" className="text-sm">
                      Quero receber dicas sobre desenvolvimento de produtos e MVPs
                    </Label>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox id="termos" name="termos" required />
                    <Label htmlFor="termos" className="text-sm">
                      Concordo com os termos de uso e política de privacidade *
                    </Label>
                  </div>
                </fieldset>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Solicitar Meu MVP"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
