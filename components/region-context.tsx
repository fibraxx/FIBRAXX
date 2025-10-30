"use client"

import type React from "react"

import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { DEFAULT_REGION, normalizeCityParam, REGIONS, type RegionKey } from "@/lib/regions"
import { useSearchParams } from "next/navigation"

type RegionContextType = {
  region: RegionKey
  label: string
  whatsapp: string
  phoneHuman: string
  setRegion: (r: RegionKey) => void
}

const RegionContext = createContext<RegionContextType | null>(null)

export function RegionProvider({ children }: { children: React.ReactNode }) {
  const params = useSearchParams()
  const [region, setRegion] = useState<RegionKey>(DEFAULT_REGION)

  useEffect(() => {
    const q = params?.get("cidade") || null
    if (q) {
      const reg = normalizeCityParam(q)
      setRegion(reg)
      document.cookie = `fibraxx_city=${reg};path=/;max-age=7776000`
      return
    }
    const foundCookie = document.cookie
      .split(";")
      .map((c) => c.trim())
      .find((c) => c.startsWith("fibraxx_city="))
    if (foundCookie) {
      const [, val] = foundCookie.split("=")
      setRegion(normalizeCityParam(val))
    }
  }, [params])

  const value = useMemo(() => {
    const r = REGIONS[region] ?? REGIONS[DEFAULT_REGION]
    return {
      region,
      label: r.label,
      whatsapp: r.whatsapp,
      phoneHuman: r.phoneHuman,
      setRegion,
    }
  }, [region])

  return <RegionContext.Provider value={value}>{children}</RegionContext.Provider>
}

export function useRegion() {
  const ctx = useContext(RegionContext)
  if (!ctx) throw new Error("useRegion must be used within RegionProvider")
  return ctx
}
