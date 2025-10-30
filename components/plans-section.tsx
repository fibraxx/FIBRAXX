"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MapPin, Phone, MessageCircle, Clock, Wifi, Film } from "lucide-react"

export function PlansSection() {
  const locations = [
    {
      name: "Padre Paraíso",
      plans: [
        { speed: "60", price: "69,90", popular: false, wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        {
          speed: "100",
          price: "79,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "400",
          price: "89,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "600",
          price: "99,90",
          popular: true,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "750",
          price: "179,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
      ],
      contact: {
        address: "Rua Presidente Bernardes, nº 246, Centro",
        phone: "0800 494 2240",
        whatsapp: "(33) 99813-9965",
        whatsappLink: "https://wa.me/5533998139965",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      },
    },
    {
      name: "Almenara",
      plans: [
        { speed: "60", price: "69,90", popular: false, wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        {
          speed: "100",
          price: "79,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "400",
          price: "89,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "600",
          price: "99,90",
          popular: true,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "750",
          price: "129,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
      ],
      contact: {
        address: "Praça Dr. Hélio Rocha Guimarães, 144 - Centro, Almenara - MG, 39900-000",
        phone: "0800 245 100",
        whatsapp: "(33) 99813-9965",
        whatsappLink: "https://wa.me/5533998139965",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      },
    },
    {
      name: "Mucuri",
      plans: [
        {
          speed: "100",
          price: "79,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "200",
          price: "89,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "300",
          price: "99,90",
          popular: true,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "400",
          price: "109,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        {
          speed: "500",
          price: "129,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
      ],
      contact: {
        address: "Av. Manoel Nelson da Fonseca, nº 296, Centro",
        phone: "0800 494 2240",
        whatsapp: "(33) 99813-9965",
        whatsappLink: "https://wa.me/5533998139965",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      },
    },
    {
      name: "Itaobim",
      plans: [
        {
          speed: "100",
          price: "79,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "200",
          price: "89,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "600",
          price: "99,90",
          popular: true,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "800",
          price: "129,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "1000",
          price: "149,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
      ],
      contact: {
        address: "Rua Amazonas, nº 177A, Centro",
        phone: "(31) 2101-0600",
        whatsapp: "(33) 99703-2677",
        whatsappLink: "https://wa.me/5533997032677",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      },
    },
    {
      name: "Jequitinhonha",
      plans: [
        {
          speed: "100",
          price: "79,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "200",
          price: "89,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "600",
          price: "99,90",
          popular: true,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "800",
          price: "129,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
        {
          speed: "1000",
          price: "149,90",
          popular: false,
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes", "Deezer"],
        },
      ],
      contact: {
        address: "Avenida Doutor Franco Duarte, nº 33, Centro",
        phone: "(31) 2101-0600",
        whatsapp: "(33) 99703-2677",
        whatsappLink: "https://wa.me/5533997032677",
        hours: "Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h",
      },
    },
  ]

  const ruralWhatsappLinks: Record<string, string> = {
    "Padre Paraíso": "https://wa.me/5533998139965",
    Mucuri: "https://wa.me/5533998139965",
  }

  const ruralAreas = [
    {
      name: "Serra do Honório",
      plans: [
        { speed: "30", price: "99,90", type: "Residencial", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "50", price: "129,90", type: "Residencial", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        {
          speed: "100",
          price: "149,90",
          type: "Residencial",
          wifi: "DualBand 2.4/5G",
          includes: ["FibraxxTV", "FibraxxFilmes"],
        },
        { speed: "25", price: "79,90", type: "Comercial", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "50", price: "99,90", type: "Comercial", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Verificar com atendimento",
      contact: "Mucuri",
    },
    {
      name: "Encachoeirado e Choro",
      plans: [
        { speed: "30", price: "79,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "50", price: "89,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "90", price: "109,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "200", price: "129,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Verificar com atendimento",
      contact: "Padre Paraíso",
    },
    {
      name: "Morais e Região",
      plans: [
        { speed: "50", price: "79,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "89,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "200", price: "99,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Grátis",
      contact: "Padre Paraíso",
    },
    {
      name: "Posseiros e Região",
      plans: [
        { speed: "50", price: "79,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "89,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "200", price: "99,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Grátis",
      contact: "Padre Paraíso",
    },
    {
      name: "Cruzetas e Região",
      plans: [
        { speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "129,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Verificar com atendimento",
      contact: "Padre Paraíso",
    },
    {
      name: "Córrego São João (Beira da BR Sentido Morais)",
      plans: [
        { speed: "50", price: "79,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "89,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "200", price: "99,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "Necessário orçamento presencial do técnico",
      contact: "Padre Paraíso",
    },
    {
      name: "Córrego São João (Cachoeira do Arraial)",
      plans: [
        { speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "129,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "R$ 500,00",
      contact: "Padre Paraíso",
    },
    {
      name: "Córrego de Bengo",
      plans: [
        { speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "129,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "R$ 500,00 (R$ 300,00 com antena de recepção ou roteador próprio)",
      contact: "Padre Paraíso",
    },
    {
      name: "Curva de Valdo Silva",
      plans: [
        { speed: "100", price: "79,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "400", price: "89,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "600", price: "99,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "R$ 300,00 a R$ 500,00 (orçamento presencial do técnico)",
      contact: "Padre Paraíso",
    },
    {
      name: "São Joanico Cristalino",
      plans: [
        { speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "149,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "R$ 1.400,00",
      contact: "Padre Paraíso",
    },
    {
      name: "Comunidade da Brejauba e Córrego do Cedro",
      plans: [
        { speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] },
        { speed: "100", price: "149,90", wifi: "DualBand 2.4/5G", includes: ["FibraxxTV", "FibraxxFilmes"] },
      ],
      installation: "R$ 1.800,00",
      contact: "Padre Paraíso",
    },
    {
      name: "Córrego do Gato (Córrego São Joãozinho)",
      plans: [{ speed: "50", price: "99,90", wifi: "2.4G", includes: ["FibraxxTV", "FibraxxFilmes"] }],
      installation: "R$ 500,00",
      contact: "Padre Paraíso",
    },
  ]

  return (
    <section id="planos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Planos por Região</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Escolha o plano ideal para sua cidade. Todos com fibra óptica 100% e velocidade garantida.
          </p>
        </div>

        <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg p-6 mb-16 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-2">🎬 FibraXX Filmes</h3>
            <p className="text-muted-foreground">
              Mais de <strong>3.000 títulos</strong> inclusos! Filmes, séries, documentários e muito mais.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Planos acima de 100MB incluem Wi-Fi DualBand 2.4/5G + FibraxxTV (150+ canais) + FibraxxFilmes
            </p>
            <p className="text-sm font-semibold text-primary mt-3">
              💳 Todas as taxas de instalação podem ser parceladas
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Cidades (Escritórios + Atendimento)</h3>
          <Accordion type="single" collapsible className="max-w-4xl mx-auto">
            {locations.map((location) => (
              <AccordionItem key={location.name} value={location.name}>
                <AccordionTrigger className="text-lg font-semibold">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    {location.name}
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Plans */}
                    <div>
                      <h4 className="font-semibold mb-4">Planos Disponíveis</h4>
                      <div className="grid grid-cols-1 gap-3">
                        {location.plans.map((plan) => (
                          <Card key={plan.speed} className={`${plan.popular ? "border-primary" : ""}`}>
                            {plan.popular && (
                              <div className="bg-primary text-primary-foreground text-xs px-2 py-1 text-center">
                                Mais vendido
                              </div>
                            )}
                            <CardContent className="p-4">
                              <div className="flex justify-between items-start mb-2">
                                <div>
                                  <div className="text-xl font-bold text-primary">{plan.speed} Mb</div>
                                  <div className="text-lg font-semibold">R$ {plan.price}/mês</div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                    <Wifi className="w-3 h-3" />
                                    Wi-Fi {plan.wifi}
                                  </div>
                                </div>
                              </div>
                              <div className="flex flex-wrap gap-2 mt-2">
                                {plan.includes.map((service) => (
                                  <span
                                    key={service}
                                    className="text-xs bg-muted px-2 py-1 rounded flex items-center gap-1"
                                  >
                                    {service === "FibraxxTV" && (
                                      <img src="/images/fibraxx-tv-logo.png" alt="FibraxxTV" className="w-6 h-6" />
                                    )}
                                    {service === "FibraxxFilmes" && (
                                      <img
                                        src="/images/fibraxx-filmes-logo.png"
                                        alt="FibraxxFilmes"
                                        className="w-6 h-6"
                                      />
                                    )}
                                    {service !== "FibraxxTV" && service !== "FibraxxFilmes" && (
                                      <>
                                        {service === "Deezer" && <Film className="w-3 h-3" />}
                                        {service}
                                      </>
                                    )}
                                  </span>
                                ))}
                              </div>
                              <div className="text-xs text-muted-foreground mt-2">100% Fibra Óptica</div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                      <h4 className="font-semibold mb-4">Escritório / Atendimento</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{location.contact.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{location.contact.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MessageCircle className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{location.contact.whatsapp}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm">{location.contact.hours}</span>
                        </div>
                      </div>
                      <Button
                        className="w-full mt-4 bg-primary hover:bg-primary/90"
                        onClick={() => window.open(location.contact.whatsappLink, "_blank")}
                      >
                        Assinar em {location.name}
                      </Button>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Zonas Rurais</h3>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-amber-800 text-sm text-center">
              <strong>Importante:</strong> Verificar com atendimento. Planos e valores podem variar por viabilidade
              técnica e distância. Consulte disponibilidade pelo WhatsApp.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {ruralAreas.map((area) => (
              <Card key={area.name} className="border-border">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{area.name}</CardTitle>
                  <p className="text-xs text-muted-foreground">Instalação: {area.installation}</p>
                  <p className="text-xs text-primary">Atendimento: {area.contact}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {area.plans.map((plan, index) => (
                      <div key={index} className="border rounded p-2">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">
                            {plan.speed} Mb
                            {plan.type && <span className="text-xs text-muted-foreground ml-1">({plan.type})</span>}
                          </span>
                          <span className="font-semibold">R$ {plan.price}/mês</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-muted-foreground flex items-center gap-1">
                            <Wifi className="w-3 h-3" />
                            Wi-Fi {plan.wifi}
                          </span>
                          <div className="flex gap-1">
                            {plan.includes.map((service) => (
                              <div
                                key={service}
                                className="text-xs bg-muted px-1 py-0.5 rounded flex items-center gap-1"
                              >
                                {service === "FibraxxTV" && (
                                  <img src="/images/fibraxx-tv-logo.png" alt="FibraxxTV" className="w-6 h-6" />
                                )}
                                {service === "FibraxxFilmes" && (
                                  <img src="/images/fibraxx-filmes-logo.png" alt="FibraxxFilmes" className="w-6 h-6" />
                                )}
                                {service !== "FibraxxTV" && service !== "FibraxxFilmes" && service}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => window.open(ruralWhatsappLinks[area.contact], "_blank")}
                  >
                    Consultar Disponibilidade
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 max-w-4xl mx-auto bg-muted/50 rounded-lg p-6">
            <h4 className="font-semibold mb-4">Observações para Zonas Rurais:</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                • <strong>Todas as taxas de instalação podem ser parceladas</strong>
              </li>
              <li>• Taxa de instalação varia por região e distância</li>
              <li>• Roteador Wi-Fi incluso em comodato</li>
              <li>• Todos os planos incluem FibraXX TV com mais de 150 canais</li>
              <li>• FibraXX Filmes: acesso a mais de 3.000 títulos (filmes, séries e documentários)</li>
              <li>• Planos acima de 100MB incluem Wi-Fi DualBand 2.4/5G</li>
              <li>• Planos de Itaobim e Jequitinhonha incluem Deezer Premium</li>
              <li>• 100% Fibra Óptica garantida</li>
              <li>• Suporte técnico especializado</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
