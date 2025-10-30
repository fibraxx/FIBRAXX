export type RegionKey = "padre-paraiso" | "itaobim" | "jequitinhonha" | "almenara" | "mucuri" | "zona-rural"

export const REGIONS: Record<RegionKey, { label: string; whatsapp: string; phoneHuman: string }> = {
  "padre-paraiso": {
    label: "Padre Paraíso",
    whatsapp: "5533998139965",
    phoneHuman: "(33) 99813-9965",
  },
  itaobim: {
    label: "Itaobim",
    whatsapp: "5533997032677",
    phoneHuman: "(33) 99703-2677",
  },
  jequitinhonha: {
    label: "Jequitinhonha",
    whatsapp: "5533997032677",
    phoneHuman: "(33) 99703-2677",
  },
  almenara: {
    label: "Almenara",
    whatsapp: "5533998139965",
    phoneHuman: "(33) 99813-9965",
  },
  mucuri: {
    label: "Mucuri",
    whatsapp: "5533998139965",
    phoneHuman: "(33) 99813-9965",
  },
  "zona-rural": {
    label: "Zona Rural",
    whatsapp: "5533998139965",
    phoneHuman: "(33) 99813-9965",
  },
}

export const DEFAULT_REGION: RegionKey = "padre-paraiso"

export function normalizeCityParam(value: string | null): RegionKey {
  if (!value) return DEFAULT_REGION
  const v = value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  if (v.includes("paraiso") || v.includes("padre")) return "padre-paraiso"
  if (v.includes("itaobim")) return "itaobim"
  if (v.includes("jequit")) return "jequitinhonha"
  if (v.includes("almenara")) return "almenara"
  if (v.includes("mucuri")) return "mucuri"
  if (v.includes("rural") || v.includes("zona")) return "zona-rural"

  return DEFAULT_REGION
}
