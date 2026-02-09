import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Gallery | Story Frames",
  description: "View our gallery of personalized frames",
}

export default function GalleryPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-bold mb-4">Gallery</h1>
      <p className="text-gray-700">
        Explore our collection of personalized video frames.
      </p>
    </div>
  )
}
