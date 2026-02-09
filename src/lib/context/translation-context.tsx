"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"

type Translations = {
  [key: string]: any
}

type TranslationContextType = {
  locale: string
  setLocale: (locale: string) => void
  t: (key: string) => string
  translations: Translations
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export function TranslationProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<string>("bg") // Default to Bulgarian
  const [translations, setTranslations] = useState<Translations>({})

  useEffect(() => {
    // Load locale from localStorage
    const savedLocale = localStorage.getItem("locale") || "bg"
    setLocaleState(savedLocale)
  }, [])

  useEffect(() => {
    // Load translations
    const loadTranslations = async () => {
      try {
        const response = await fetch(`/locales/${locale}.json`)
        const data = await response.json()
        setTranslations(data)
      } catch (error) {
        console.error("Failed to load translations:", error)
      }
    }
    loadTranslations()
  }, [locale])

  const setLocale = (newLocale: string) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = translations

    for (const k of keys) {
      if (value && typeof value === "object") {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return (
    <TranslationContext.Provider value={{ locale, setLocale, t, translations }}>
      {children}
    </TranslationContext.Provider>
  )
}

export function useTranslation() {
  const context = useContext(TranslationContext)
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}
