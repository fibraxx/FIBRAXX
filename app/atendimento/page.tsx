import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, MessageCircle, Phone, MapPin, Clock } from "lucide-react"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function AtendimentoPage() {
  const contacts = [
    {
      city: "Padre Paraíso",
      whatsapp: "5533998139965",
      whatsappDisplay: "(33) 99813-9965",
      phone: "0800 494 2240",
      phoneLink: "08004942240",
      portal: "https://central.fibranet.hubsoft.com.br",
      address: "Rua Presidente Bernardes, 246 - Centro - Padre Paraíso, MG",
    },
    {
      city: "Almenara",
      whatsapp: "5533998139965",
      whatsappDisplay: "(33) 99813-9965",
      phone: "0800 494 2240",
      phoneLink: "08004942240",
      portal: "https://central.vitoriatelecom.hubsoft.com.br",
      address: "Praça Dr. Hélio Rocha Guimarães, 144 - Centro, Almenara - MG, 39900-000",
    },
    {
      city: "Itaobim",
      whatsapp: "5533997032677",
      whatsappDisplay: "(33) 99703-2677",
      phone: "0800 494 2240",
      phoneLink: "08004942240",
      portal: "https://central.interfibra-filial.hubsoft.com.br",
      address: "Rua Amazonas, nº 177A - Centro - Itaobim, MG",
    },
    {
      city: "Jequitinhonha",
      whatsapp: "5533997032677",
      whatsappDisplay: "(33) 99703-2677",
      phone: "(33) 2101-0600",
      phoneLink: "3321010600",
      portal: "https://central.interfibra-filial.hubsoft.com.br",
      address: "Avenida Doutor Franco Duarte, n°199, Centro - Jequitinhonha, MG",
      hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
    },
    {
      city: "Mucuri",
      whatsapp: "5533998139965",
      whatsappDisplay: "(33) 99813-9965",
      phone: "0800 494 2240",
      phoneLink: "08004942240",
      portal: "https://central.fibranet.hubsoft.com.br",
      address: "Av. Manoel Nelson da Fonseca, n°296 - Centro - Mucuri, MG",
    },
    {
      city: "Zonas Rurais",
      whatsapp: "5533998139965",
      whatsappDisplay: "(33) 99813-9965",
      phone: "0800 494 2240",
      phoneLink: "08004942240",
      portal: "https://central.conexaonet.hubsoft.com.br",
      address: "Atendimento para todas as zonas rurais",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Central de Atendimento</h1>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Escolha sua cidade e entre em contato conosco ou acesse o portal do cliente
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {contacts.map((contact, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-primary">{contact.city}</h3>

                {/* Address */}
                <div className="flex items-start gap-2 mb-4 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{contact.address}</span>
                </div>

                {/* Business Hours */}
                {contact.hours && (
                  <div className="flex items-start gap-2 mb-4 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{contact.hours}</span>
                  </div>
                )}

                {/* WhatsApp */}
                <Button className="w-full mb-3 bg-[#25D366] hover:bg-[#20BA5A] text-white" asChild>
                  <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp: {contact.whatsappDisplay}
                  </a>
                </Button>

                {/* Phone */}
                <Button variant="outline" className="w-full mb-3 bg-transparent" asChild>
                  <a href={`tel:${contact.phoneLink}`}>
                    <Phone className="w-4 h-4 mr-2" />
                    {contact.phone}
                  </a>
                </Button>

                {/* Portal */}
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href={contact.portal} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Acessar Portal do Cliente
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">O que você pode fazer no Portal do Cliente?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl mb-2">📄</div>
                <p className="font-semibold">2ª Via do Boleto</p>
              </div>
              <div>
                <div className="text-3xl mb-2">💬</div>
                <p className="font-semibold">Abrir Atendimento</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📊</div>
                <p className="font-semibold">Ver Consumo</p>
              </div>
              <div>
                <div className="text-3xl mb-2">📋</div>
                <p className="font-semibold">Nota Fiscal</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
      {/* WhatsApp FAB */}
      <WhatsAppFab />
    </div>
  )
}
