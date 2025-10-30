import Image from "next/image"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Planos", href: "#planos" },
    { label: "Empresa", href: "#empresa" },
    { label: "Contato", href: "#contato" },
  ]

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/fibraxxinternet/?hl=en", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/fibraxxinternet/?locale=pt_BR", label: "Facebook" },
  ]

  return (
    <footer id="contato" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Fibraxx%20Logo%20Branco%20com%20Laranja-QChCeBCz42lnP8D1EwfuVHrLdJORgY.png"
              alt="Fibraxx Internet"
              width={150}
              height={50}
              className="h-8 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/80 mb-4 leading-relaxed">
              Conectando você ao futuro com internet fibra óptica de alta velocidade, estabilidade e suporte de
              qualidade na sua região.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-primary rounded-full text-primary-foreground hover:bg-primary/80 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-background/80 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-background/80">
                  <p>Rua Presidente Bernardes, 246</p>
                  <p>Centro - Padre Paraíso/MG</p>
                  <p>CEP: 39818-000</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">0800 494 2240</span>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/80">fibranet.pp@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/60 text-sm">© 2024 Fibraxx Internet. Todos os direitos reservados.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
