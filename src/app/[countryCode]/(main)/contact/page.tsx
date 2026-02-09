import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Story Frames",
  description: "Get in touch with Story Frames",
}

export default function ContactPage() {
  return (
    <div className="content-container py-12">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Get in touch with us for orders or questions.
      </p>
      <div className="space-y-2">
        <p><strong>Email:</strong> Sviievmla@gmail.com</p>
        <p><strong>Facebook:</strong> <a href="https://facebook.com/Storyframesvarna/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Story Frames Varna</a></p>
      </div>
    </div>
  )
}
