import { Metadata } from "next"

import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"

export const metadata: Metadata = {
  title: "StoryFrames - Personalized Gifts That Come to Life",
  description:
    "Send us a photo — we transform it into a short video and embed it into your chosen product. A moving memory that feels premium, personal, and unforgettable.",
}

// For static export, we need to mark this as static
export const dynamic = 'force-static'
export const dynamicParams = false

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params

  const { countryCode } = params

  // For static export mode (GitHub Pages), skip backend calls
  const isStaticExport = process.env.GITHUB_PAGES === 'true'

  if (isStaticExport) {
    return <Hero />
  }

  const region = await getRegion(countryCode)

  const { collections } = await listCollections({
    fields: "id, handle, title",
  })

  if (!collections || !region) {
    return null
  }

  return (
    <>
      <Hero />
      <div className="py-12">
        <ul className="flex flex-col gap-x-6">
          <FeaturedProducts collections={collections} region={region} />
        </ul>
      </div>
    </>
  )
}
