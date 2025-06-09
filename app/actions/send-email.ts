"use server"

export async function sendContactEmail(formData: FormData) {
  const nome = formData.get("nome") as string
  const email = formData.get("email") as string
  const telefone = formData.get("telefone") as string
  const empresa = formData.get("empresa") as string
  const tipoProjetoValue = formData.get("tipo-projeto") as string
  const descricao = formData.get("descricao") as string
  const funcionalidades = formData.get("funcionalidades") as string
  const prazo = formData.get("prazo") as string
  const newsletter = formData.get("newsletter") === "on"

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
    // Simular envio de email (em produção, você usaria um serviço como Resend, SendGrid, etc.)
    console.log("Email enviado para: contato@fazermeumvp.com.br")
    console.log("Assunto: Nova Solicitação de MVP")
    console.log("Corpo do email:")
    console.log(emailBody)

    // Em um ambiente real, você faria algo como:
    // await resend.emails.send({
    //   from: 'noreply@fazermeumvp.com.br',
    //   to: 'contato@fazermeumvp.com.br',
    //   subject: `Nova Solicitação de MVP - ${nome}`,
    //   text: emailBody,
    // })

    // Simular delay de envio
    await new Promise((resolve) => setTimeout(resolve, 1500))

    return {
      success: true,
      message: "Solicitação enviada com sucesso! Entraremos em contato em até 24 horas.",
    }
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return {
      success: false,
      message: "Erro ao enviar solicitação. Tente novamente ou entre em contato diretamente.",
    }
  }
}
