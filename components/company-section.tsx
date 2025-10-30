import { Users, Award, Clock, Heart } from "lucide-react"

export function CompanySection() {
  const stats = [
    {
      icon: Users,
      number: "10.000+",
      label: "Clientes Conectados",
    },
    {
      icon: Award,
      number: "5+",
      label: "Anos de Experiência",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Suporte Disponível",
    },
    {
      icon: Heart,
      number: "99%",
      label: "Satisfação dos Clientes",
    },
  ]

  return (
    <section id="empresa" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">Sobre a Fibraxx</h2>

            <div className="space-y-4 text-lg leading-relaxed mb-8">
              <p>
                A <strong className="text-primary">Fibraxx</strong> é um provedor regional de Internet via Fibra Óptica,
                levando alta velocidade, estabilidade e suporte de qualidade para milhares de clientes.
              </p>

              <p className="text-muted-foreground">
                Nossa missão é conectar pessoas e empresas com a melhor tecnologia disponível, oferecendo não apenas
                internet rápida, mas uma experiência completa de conectividade.
              </p>

              <p className="text-muted-foreground">
                Com uma equipe especializada e infraestrutura moderna, garantimos que nossos clientes tenham acesso à
                internet de qualidade que merecem, com suporte técnico sempre disponível.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                    <stat.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="/professional-team-working-with-fiber-optic-technol.jpg"
                alt="Equipe Fibraxx trabalhando com tecnologia"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
            {/* Decorative background */}
            <div className="absolute -bottom-4 -left-4 w-full h-full bg-primary/20 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
