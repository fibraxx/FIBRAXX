import { Button } from "@/components/ui/button"
import { MapPin, CheckCircle } from "lucide-react"

export function CoverageSection() {
  const cities = ["Padre Paraíso", "Almenara", "Itaobim", "Jequitinhonha", "Mucuri"]
  const ruralAreas = [
    "Córrego de Bengo",
    "Córrego do Gato",
    "Córrego São João",
    "Cruzetas",
    "Encachoeirado e Choro",
    "Entrada da Pioneira",
    "Gameleira",
    "Lajinha",
    "Morais e Região",
  ]

  return (
    <section id="cobertura" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Mapa de Cobertura</h2>
          <p className="text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Nossa rede de fibra óptica já conecta milhares de famílias e empresas na região de Minas Gerais.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* Cities List */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-primary" />
              Cidades Principais
            </h3>

            <div className="grid grid-cols-1 gap-3 mb-8">
              {cities.map((city) => (
                <div key={city} className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="font-medium">{city}</span>
                </div>
              ))}
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <h4 className="font-bold text-lg mb-3">Também presentes nas zonas rurais:</h4>
              <p className="text-sm text-muted-foreground mb-3">
                {ruralAreas.slice(0, 5).join(", ")} e outras localidades.
              </p>
              <p className="text-xs text-muted-foreground">
                Estamos sempre expandindo nossa rede para levar internet de qualidade para mais famílias e empresas da
                região.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
              asChild
            >
              <a href="/atendimento">Verificar Disponibilidade no Meu Endereço</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
