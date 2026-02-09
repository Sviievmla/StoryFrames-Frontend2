import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Services | Story Frames",
  description: "Our services and offerings",
}

export default function ServicesPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-bold mb-4">Services</h1>
      <p className="text-gray-700">
        Discover the services we offer to make your memories special.
      </p>
    </div>
  )
}
