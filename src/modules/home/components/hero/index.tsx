const Hero = () => {
  return (
    <div className="w-full border-b border-ui-border-base relative bg-storyframes-bg py-16 small:py-24">
      <div className="content-container">
        <div className="grid grid-cols-1 small:grid-cols-2 gap-8 small:gap-12 items-start">
          {/* Hero Text */}
          <div className="flex flex-col gap-6">
            <h1 className="font-serif text-4xl small:text-5xl leading-tight text-storyframes-text">
              Personalized gifts that come to life.
            </h1>
            <p className="text-lg text-storyframes-muted leading-relaxed">
              Send us a photo — we transform it into a short video and embed it into your chosen product. 
              A moving memory that feels premium, personal, and unforgettable.
            </p>
            <div className="flex flex-col small:flex-row gap-3 small:gap-4 mt-2">
              <a 
                href="#products" 
                className="storyframes-btn-primary border rounded-full px-6 py-3 text-center font-black text-storyframes-text hover:-translate-y-0.5 transition-transform"
              >
                View products
              </a>
              <a 
                href="mailto:Sviievmla@gmail.com?subject=Story%20Frames%20Order%20Inquiry" 
                className="storyframes-btn-gold border rounded-full px-6 py-3 text-center font-black text-storyframes-text hover:-translate-y-0.5 transition-transform"
              >
                Order by email
              </a>
              <a 
                href="https://facebook.com/Storyframesvarna/" 
                target="_blank"
                rel="noopener noreferrer"
                className="border border-storyframes-line bg-storyframes-panel rounded-full px-6 py-3 text-center font-black text-storyframes-text hover:-translate-y-0.5 transition-transform"
              >
                Message on Facebook
              </a>
            </div>
          </div>

          {/* How Ordering Works Card */}
          <div className="border border-storyframes-line rounded-2xl p-6 bg-storyframes-panel2 shadow-lg">
            <h3 className="font-black text-xl text-storyframes-text mb-4">How ordering works</h3>
            <ul className="space-y-3 text-storyframes-muted list-disc pl-5">
              <li>You send us your photo (even an old paper photo).</li>
              <li>We turn it into a short "magic" video story.</li>
              <li>We deliver it inside your selected product.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
