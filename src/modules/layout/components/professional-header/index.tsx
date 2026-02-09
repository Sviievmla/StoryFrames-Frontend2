"use client"

import { Suspense } from "react"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/layout/components/cart-button"
import { useTranslation } from "@lib/context/translation-context"

export default function ProfessionalHeader() {
  const { t, locale, setLocale } = useTranslation()

  const menuItems = [
    { key: "about", href: "/about" },
    { key: "gallery", href: "/gallery" },
    { key: "services", href: "/services" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <nav className="content-container mx-auto">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <LocalizedClientLink
              href="/"
              className="text-xl font-semibold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Story Frames
            </LocalizedClientLink>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <LocalizedClientLink
                key={item.key}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                {t(`header.${item.key}`)}
              </LocalizedClientLink>
            ))}
            
            {/* Cart */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                  href="/cart"
                >
                  {t("header.cart")} (0)
                </LocalizedClientLink>
              }
            >
              <div className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                <CartButton />
              </div>
            </Suspense>

            {/* Contact */}
            <LocalizedClientLink
              href="/contact"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {t("header.contact")}
            </LocalizedClientLink>

            {/* Language Switcher */}
            <div className="flex items-center space-x-1 text-sm font-medium border-l border-gray-300 pl-6 ml-2">
              <button
                onClick={() => setLocale("bg")}
                className={`px-2 py-1 transition-colors ${
                  locale === "bg"
                    ? "text-gray-900 font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                BG
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`px-2 py-1 transition-colors ${
                  locale === "en"
                    ? "text-gray-900 font-bold"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Language Switcher Mobile */}
            <div className="flex items-center space-x-1 text-xs font-medium">
              <button
                onClick={() => setLocale("bg")}
                className={`px-1 transition-colors ${
                  locale === "bg"
                    ? "text-gray-900 font-bold"
                    : "text-gray-500"
                }`}
              >
                BG
              </button>
              <span className="text-gray-400">|</span>
              <button
                onClick={() => setLocale("en")}
                className={`px-1 transition-colors ${
                  locale === "en"
                    ? "text-gray-900 font-bold"
                    : "text-gray-500"
                }`}
              >
                EN
              </button>
            </div>
            
            {/* Cart Mobile */}
            <Suspense
              fallback={
                <LocalizedClientLink
                  className="text-sm font-medium text-gray-700"
                  href="/cart"
                >
                  🛒
                </LocalizedClientLink>
              }
            >
              <div className="text-sm font-medium text-gray-700">
                <CartButton />
              </div>
            </Suspense>
          </div>
        </div>
      </nav>
    </header>
  )
}
