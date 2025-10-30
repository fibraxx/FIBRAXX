import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Phone, User, Clock, ExternalLink } from "lucide-react"

export function SupportSection() {
  const customerPortals = [
    {
      region: "Padre Paraíso",
      url: "https://central.fibranet.hubsoft.com.br",
      description: "2ª via do boleto, atendimento, consumo, nota fiscal",
      whatsapp: "5533998139965",
    },
    {
      region: "Almenara",
      url: "https://central.vitoriatelecom.hubsoft.com.br",
      description: "2ª via do boleto, atendimento, consumo, nota fiscal",
      whatsapp: "5533998139965",
    },
    {
      region: "Zona Rural",
      url: "https://central.conexaonet.hubsoft.com.br",
      description: "2ª via do boleto, atendimento, consumo, nota fiscal",
      whatsapp: "5533998139965",
    },
    {
      region: "Itaobim e Jequitinhonha",
      url: "https://central.interfibra-filial.hubsoft.com.br",
      description: "2ª via do boleto, atendimento, consumo, nota fiscal",
      whatsapp: "5533997032677",
    },
  ]

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Atendimento rápido e direto",
      action: "Falar no WhatsApp",
      highlight: true,
      href: "/atendimento",
    },
    {
      icon: Phone,
      title: "Telefone",
      description: "0800 494 2240",
      action: "Ver Contatos",
      highlight: false,
      href: "/atendimento",
    },
    {
      icon: User,
      title: "Central do Cliente",
      description: "Acesse sua conta online",
      action: "Acessar Portal",
      highlight: false,
      href: "/atendimento",
    },
    {
      icon: Clock,
      title: "Suporte 24h",
      description: "Sempre disponível para você",
      action: "Solicitar Suporte",
      highlight: false,
      href: "/atendimento",
    },
  ]

  return (
    <section id="suporte" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Suporte e Atendimento</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Nossa equipe está sempre pronta para ajudar você. Escolha o canal de atendimento que preferir.
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Central do Assinante</h3>
          <p className="text-center text-muted-foreground mb-8">
            Acesse sua central para tirar 2ª via do boleto, abrir atendimento, ver consumo de internet, nota fiscal e
            serviços contratados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {customerPortals.map((portal, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all">
                <CardContent className="p-4">
                  <h4 className="font-semibold mb-2">{portal.region}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{portal.description}</p>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white"
                      asChild
                    >
                      <a href={`https://wa.me/${portal.whatsapp}`} target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        WhatsApp
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                      <a href={portal.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Acessar Portal
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {supportOptions.map((option, index) => (
            <Card
              key={index}
              className={`text-center transition-all hover:shadow-lg ${option.highlight ? "border-primary bg-primary/5" : "border-border"}`}
            >
              <CardContent className="p-6">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${option.highlight ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"}`}
                >
                  <option.icon className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold mb-2">{option.title}</h3>
                <p className="text-muted-foreground mb-4">{option.description}</p>

                <Button
                  variant={option.highlight ? "default" : "outline"}
                  className={`w-full ${option.highlight ? "bg-primary hover:bg-primary/90" : ""}`}
                  asChild
                >
                  <a href={option.href}>{option.action}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 to-foreground/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Precisa de Ajuda Agora?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Nossa equipe técnica especializada está pronta para resolver qualquer problema e garantir que você tenha a
            melhor experiência com nossa internet.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold" asChild>
            <a href="/atendimento">Fale com Nosso Time Agora Mesmo</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
