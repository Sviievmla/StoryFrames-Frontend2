import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Story Frames",
  description: "Learn more about Story Frames",
}

export default function AboutPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-bold mb-4">About Us</h1>
      <p className="text-gray-700">
        Welcome to Story Frames - where memories come to life.
      </p>
    </div>
  )
}
