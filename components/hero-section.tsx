"use client"

import { Button } from "@/components/ui/button"
import { Wifi, Zap, Shield, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function HeroSection() {
  const padrePlans = [
    { speed: "60", price: "69,90", popular: false },
    { speed: "100", price: "79,90", popular: false },
    { speed: "400", price: "89,90", popular: false },
    { speed: "600", price: "99,90", popular: true },
    { speed: "750", price: "179,90", popular: false },
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-foreground/10" />

      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-24 h-24 border-2 border-primary rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border-2 border-primary rounded-full animate-pulse delay-500" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6">
              <span className="text-foreground">Fibraxx Internet</span>
              <br />
              <span className="text-primary">Conectando você ao futuro</span>
            </h1>

            <p className="text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
              Internet Fibra Óptica ultrarrápida com estabilidade na sua região. Tecnologia de ponta para sua casa e
              empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" })}
              >
                Confira os Planos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                asChild
              >
                <a href="/atendimento">Verificar Cobertura</a>
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wifi className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">Wi-Fi Dual Band</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">Suporte Ágil</span>
              </div>
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <span className="font-medium">Instalação Rápida</span>
              </div>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/modern-family-using-high-speed-internet-at-home-wi.jpg"
                alt="Família conectada com internet de alta velocidade"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute -top-4 -right-4 w-full h-full bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Destaque <span className="text-primary">Padre Paraíso</span>
          </h2>
          <p className="text-muted-foreground mb-8">Confira nossos planos mais populares na cidade</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {padrePlans.map((plan) => (
              <Card key={plan.speed} className={`relative ${plan.popular ? "border-primary shadow-lg" : ""}`}>
                {plan.popular && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Mais vendido
                    </div>
                  </div>
                )}
                <CardContent className="p-4 text-center">
                  <div className="text-2xl font-bold text-primary mb-1">{plan.speed} Mb</div>
                  <div className="text-lg font-semibold">R$ {plan.price}/mês</div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            onClick={() => window.open("https://wa.me/5533998139965", "_blank")}
          >
            Assinar em Padre Paraíso
          </Button>
        </div>
      </div>
    </section>
  )
}
