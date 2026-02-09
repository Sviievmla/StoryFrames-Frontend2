export async function generateStaticParams() {
  // For static export, always generate 'us' pages
  // For GitHub Pages, we also have a root page.tsx that will be the entry point
  return [
    { countryCode: 'us' },
  ]
}

export const dynamicParams = false

export default function CountryLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
