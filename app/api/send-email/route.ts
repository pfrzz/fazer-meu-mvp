import { type NextRequest, NextResponse } from "next/server"
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()

    const nome = formData.get("nome") as string
    const email = formData.get("email") as string
    const telefone = formData.get("telefone") as string
    const empresa = formData.get("empresa") as string
    const tipoProjetoValue = formData.get("tipo-projeto") as string
    const descricao = formData.get("descricao") as string
    const funcionalidades = formData.get("funcionalidades") as string
    const prazo = formData.get("prazo") as string
    const newsletter = formData.get("newsletter") === "on"

    // Validação básica
    if (!nome || !email || !descricao) {
      return NextResponse.json({ success: false, message: "Campos obrigatórios não preenchidos." }, { status: 400 })
    }

    // Mapear o tipo de projeto para um nome mais legível
    const tipoProjetoMap: { [key: string]: string } = {
      site: "Site/Landing Page",
      webapp: "Aplicação Web",
      mobile: "Aplicativo Mobile",
      ecommerce: "E-commerce",
      outro: "Outro",
    }

    const tipoProjetoNome = tipoProjetoMap[tipoProjetoValue] || tipoProjetoValue

    // Mapear o prazo para um nome mais legível
    const prazoMap: { [key: string]: string } = {
      "2-semanas": "2 semanas",
      "1-mes": "1 mês",
      "2-meses": "2 meses",
      "3-meses": "3 meses ou mais",
      flexivel: "Flexível",
    }

    const prazoNome = prazoMap[prazo] || prazo

    // Criar o corpo do email
    const emailBody = `
Nova solicitação de MVP recebida!

INFORMAÇÕES DO CLIENTE:
Nome: ${nome}
Email: ${email}
Telefone: ${telefone || "Não informado"}
Empresa: ${empresa || "Não informada"}

DETALHES DO PROJETO:
Tipo de Projeto: ${tipoProjetoNome}
Prazo Desejado: ${prazoNome || "Não informado"}

DESCRIÇÃO DA IDEIA:
${descricao}

PRINCIPAIS FUNCIONALIDADES:
${funcionalidades || "Não especificadas"}

NEWSLETTER:
${newsletter ? "Cliente deseja receber newsletter" : "Cliente não deseja receber newsletter"}

---
Esta mensagem foi enviada através do formulário do site fazermeumvp.com.br
    `.trim()

    try {
      // Enviar o email usando Resend
      await resend.emails.send({
        from: 'FazerMeuMVP <contato@fazermeumvp.com.br>',
        to: ['contato@fazermeumvp.com.br', 'gmedeirosferraz@me.com'],
        replyTo: email,
        subject: `Nova Solicitação de MVP - ${nome}`,
        text: emailBody,
      });

      // Enviar email de confirmação para o cliente
      await resend.emails.send({
        from: 'FazerMeuMVP <contato@fazermeumvp.com.br>',
        to: [email],
        subject: 'Recebemos sua solicitação de MVP!',
        text: `
Olá ${nome},

Obrigado por entrar em contato com a FazerMeuMVP!

Recebemos sua solicitação e nossa equipe irá analisar os detalhes do seu projeto.
Entraremos em contato em até 24 horas úteis com os próximos passos.

Enquanto isso, você pode ir se preparando para nossa conversa pensando nos seguintes pontos:
- Qual é o principal problema que seu MVP vai resolver?
- Quem é seu público-alvo principal?
- Existe alguma solução similar no mercado?

Caso tenha alguma dúvida urgente, você pode responder diretamente a este email.

Atenciosamente,
Equipe FazerMeuMVP
        `.trim()
      });

      return NextResponse.json({
        success: true,
        message: "Solicitação enviada com sucesso! Entraremos em contato em até 24 horas.",
      })
    } catch (emailError) {
      console.error("Erro ao enviar email:", emailError)
      return NextResponse.json({ 
        success: false, 
        message: "Erro ao enviar email. Por favor, tente novamente ou entre em contato diretamente." 
      }, { status: 500 })
    }
  } catch (error) {
    console.error("Erro ao processar solicitação:", error)
    return NextResponse.json({ success: false, message: "Erro interno do servidor. Tente novamente." }, { status: 500 })
  }
}
