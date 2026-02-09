import { Github } from "@medusajs/icons"
import { Button, Heading } from "@medusajs/ui"
import { GITHUB_REPO_URL } from "@lib/constants"

const Hero = () => {
  return (
    <div className="h-[75vh] w-full border-b border-ui-border-base relative bg-gradient-to-b from-mauve/95 to-mauve overflow-hidden">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(180deg, rgba(131,100,117,.95) 0%, rgba(131,100,117,.98) 100%),
          url(/images/storyframes/gallery-1.jpeg),
          radial-gradient(900px 520px at 12% -8%, rgba(255,77,125,.26), transparent 60%),
          radial-gradient(900px 520px at 88% 0%, rgba(193, 166, 113, 0.18), transparent 55%),
          radial-gradient(900px 640px at 50% 115%, rgba(255,134,173,.12), transparent 62%)
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}></div>
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:p-32 gap-6 px-6">
        <span>
          <Heading
            level="h1"
            className="text-4xl leading-tight text-white font-serif font-semibold mb-3"
          >
            Personalized gifts that come to life.
          </Heading>
          <p
            className="text-lg leading-relaxed text-white/90 max-w-2xl mx-auto font-normal"
          >
            Send us a photo — we transform it into a short video and embed it into your chosen product. A moving memory that feels premium, personal, and unforgettable.
          </p>
        </span>
        <a
          href={GITHUB_REPO_URL}
          target="_blank"
        >
          <Button 
            variant="secondary"
            className="rounded-full border-2 border-white/30 bg-gradient-to-br from-white/10 to-transparent hover:from-white/20 hover:to-white/5 text-white backdrop-blur-sm shadow-lg"
          >
            View on GitHub
            <Github />
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Hero
