import fs from "fs"
import path from "path"

type Translations = {
  [key: string]: any
}

let translationsCache: { [locale: string]: Translations } = {}

export async function getTranslations(locale: string = "bg"): Promise<Translations> {
  // Return cached translations if available
  if (translationsCache[locale]) {
    return translationsCache[locale]
  }

  try {
    const filePath = path.join(process.cwd(), "public", "locales", `${locale}.json`)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const translations = JSON.parse(fileContents)
    
    // Cache the translations
    translationsCache[locale] = translations
    
    return translations
  } catch (error) {
    console.error(`Failed to load translations for locale ${locale}:`, error)
    return {}
  }
}

export function getTranslation(translations: Translations, key: string): string {
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
