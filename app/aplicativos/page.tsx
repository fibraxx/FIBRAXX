import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Smartphone, Tv, Download, CheckCircle2, Globe, Monitor } from "lucide-react"
import { WhatsAppFab } from "@/components/whatsapp-fab"

export default function AplicativosPage() {
  const apps = [
    {
      name: "FibraxxTV",
      platform: "iOS (iPhone/iPad)",
      icon: "/images/fibraxx-tv-logo.png",
      url: "https://apps.apple.com/br/app/fibraxx-tv/id1587756868",
      description: "Assista FibraxxTV no seu iPhone ou iPad",
      features: ["150+ canais ao vivo", "Compatível com AirPlay", "Interface otimizada"],
    },
    {
      name: "FibraxxTV",
      platform: "Android (Celulares e Tablets)",
      icon: "/images/fibraxx-tv-logo.png",
      url: "https://play.google.com/store/apps/details?id=br.com.fibraxx.tv.mobile1",
      description: "Assista mais de 150 canais ao vivo no seu celular ou tablet Android",
      features: ["150+ canais ao vivo", "Programação completa", "Interface intuitiva"],
    },
    {
      name: "FibraxxTV",
      platform: "Android TV e TV Box",
      icon: "/images/fibraxx-tv-logo.png",
      url: "https://play.google.com/store/apps/details?id=br.com.fibraxx.tv.stb2",
      description: "Transforme sua Smart TV em uma central de entretenimento",
      features: ["Otimizado para TV", "Controle remoto", "Qualidade HD"],
    },
    {
      name: "FIBRAXX",
      platform: "Android (Portal do Cliente)",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fibraxx%20Logo%20Original-Ys3yGEQYLahX2gJnyVdnJr4NMbwUnD.png",
      url: "https://play.google.com/store/apps/details?id=com.hubsoft_client_app.fibraxx&pcampaignid=web_share",
      description: "Gerencie sua conta Fibraxx pelo celular",
      features: ["2ª via de boleto", "Consumo de internet", "Abrir chamados", "Notas fiscais"],
    },
    {
      name: "FIBRAXX",
      platform: "iOS (Portal do Cliente)",
      icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fibraxx%20Logo%20Original-Ys3yGEQYLahX2gJnyVdnJr4NMbwUnD.png",
      url: "https://apps.apple.com/br/app/fibraxx-telecom/id1559245408",
      description: "Portal do cliente para iPhone e iPad",
      features: ["2ª via de boleto", "Consumo de internet", "Abrir chamados", "Notas fiscais"],
    },
  ]

  const additionalAccess = [
    {
      title: "Smart TVs",
      icon: Monitor,
      app: "CDNTV",
      domain: "tv.fibraxx.com.br",
      description: "Para Smart TVs, utilize o aplicativo CDNTV com o domínio tv.fibraxx.com.br",
    },
    {
      title: "Acesso pelo Navegador",
      icon: Globe,
      url: "http://tv.fibraxx.com.br/",
      login: "Solicitar à atendente",
      password: "1234",
      description: "Assista FibraxxTV direto do navegador em qualquer dispositivo",
    },
  ]

  const benefits = [
    {
      title: "FibraxxTV",
      description: "Mais de 150 canais ao vivo inclusos em todos os planos",
      icon: Tv,
    },
    {
      title: "FibraxxFilmes",
      description: "Acesso a mais de 3.000 títulos: filmes, séries e documentários",
      icon: Tv,
    },
    {
      title: "Portal do Cliente",
      description: "Gerencie sua conta, boletos, consumo e suporte pelo app",
      icon: Smartphone,
    },
    {
      title: "Multiplataforma",
      description: "Disponível para Android, iOS, Smart TVs e navegador",
      icon: Download,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-balance mb-4">Aplicativos Fibraxx</h1>
            <p className="text-xl text-muted-foreground text-pretty max-w-3xl mx-auto">
              Baixe nossos aplicativos e aproveite todos os benefícios da sua internet Fibraxx. Entretenimento e gestão
              da sua conta na palma da mão. Assista de qualquer lugar do mundo, basta ter acesso à internet e ser
              cliente Fibraxx.
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit) => (
              <Card key={benefit.title} className="border-border">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Apps Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Baixe Nossos Aplicativos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {apps.map((app, index) => (
                <Card key={index} className="border-border hover:border-primary transition-colors">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-2">
                      <img src={app.icon || "/placeholder.svg"} alt={app.name} className="w-12 h-12 object-contain" />
                      <div>
                        <CardTitle className="text-lg">{app.name}</CardTitle>
                        <p className="text-xs text-muted-foreground">{app.platform}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{app.description}</p>
                    <ul className="space-y-2 mb-4">
                      {app.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <a href={app.url} target="_blank" rel="noopener noreferrer">
                        <Download className="w-4 h-4 mr-2" />
                        Baixar App
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Outras Formas de Acesso</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {additionalAccess.map((access, index) => (
                <Card key={index} className="border-border">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <access.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{access.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{access.description}</p>
                    <div className="space-y-2 text-sm">
                      {access.app && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Aplicativo:</span>
                          <span className="font-medium">{access.app}</span>
                        </div>
                      )}
                      {access.domain && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Domínio:</span>
                          <span className="font-medium">{access.domain}</span>
                        </div>
                      )}
                      {access.url && (
                        <div className="flex flex-col gap-1">
                          <span className="text-muted-foreground">URL:</span>
                          <a
                            href={access.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline break-all"
                          >
                            {access.url}
                          </a>
                        </div>
                      )}
                      {access.login && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Login:</span>
                          <span className="font-medium">{access.login}</span>
                        </div>
                      )}
                      {access.password && (
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Senha:</span>
                          <span className="font-medium">{access.password}</span>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-gradient-to-r from-primary/10 to-orange-500/10 rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-center">Entretenimento Completo Incluso</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <img src="/images/fibraxx-tv-logo.png" alt="FibraxxTV" className="w-16 h-16 object-contain" />
                <div>
                  <h4 className="font-semibold mb-2">FibraxxTV</h4>
                  <p className="text-sm text-muted-foreground">
                    Mais de 150 canais ao vivo inclusos em todos os planos. Assista no celular, tablet, Smart TV ou
                    computador de qualquer lugar do mundo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src="/images/fibraxx-filmes-logo.png" alt="FibraxxFilmes" className="w-16 h-16 object-contain" />
                <div>
                  <h4 className="font-semibold mb-2">FibraxxFilmes</h4>
                  <p className="text-sm text-muted-foreground">
                    Acesso a mais de 3.000 títulos: filmes, séries, documentários e muito mais. Entretenimento ilimitado
                    para toda família.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
