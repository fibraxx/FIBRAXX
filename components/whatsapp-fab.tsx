"use client"

import { MessageCircle } from "lucide-react"
import { useRegion } from "@/components/region-context"

export function WhatsAppFab() {
  const { whatsapp, label } = useRegion()
  const link = `https://wa.me/${whatsapp}?text=Ol%C3%A1!%20Quero%20assinar%20Fibraxx%20em%20${encodeURIComponent(label)}.`

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-6 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-5 py-3 shadow-2xl bg-[#25D366] text-white hover:bg-[#20BA5A] transition-all hover:scale-105"
      aria-label="Fale no WhatsApp"
    >
      <MessageCircle size={22} />
      <span className="font-medium">Fale no WhatsApp</span>
    </a>
  )
}
