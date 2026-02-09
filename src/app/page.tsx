import { Metadata } from "next"
import Hero from "@modules/home/components/hero"

export const metadata: Metadata = {
  title: "StoryFrames - Personalized Gifts That Come to Life",
  description:
    "Send us a photo — we transform it into a short video and embed it into your chosen product. A moving memory that feels premium, personal, and unforgettable.",
}

export default function StaticHome() {
  return (
    <>
      <Hero />
    </>
  )
}
