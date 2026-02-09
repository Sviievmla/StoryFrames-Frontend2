import { getBaseURL } from "@lib/util/env"
import { Metadata } from "next"
import "styles/globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(getBaseURL()),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light">
      <body 
        className="min-h-screen"
        style={{
          background: `
            linear-gradient(180deg, rgba(131,100,117,.95) 0%, rgba(131,100,117,.98) 100%),
            url(/images/storyframes/gallery-1.jpeg),
            radial-gradient(900px 520px at 12% -8%, rgba(255,77,125,.26), transparent 60%),
            radial-gradient(900px 520px at 88% 0%, rgba(193, 166, 113, 0.18), transparent 55%),
            radial-gradient(900px 640px at 50% 115%, rgba(255,134,173,.12), transparent 62%),
            #836475
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
