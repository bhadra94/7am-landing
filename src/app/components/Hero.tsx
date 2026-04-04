import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1722156855407-2775911d0174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdW5yaXNlJTIwZ29sZGVuJTIwaG91ciUyMGF1dGhlbnRpY3xlbnwxfHx8fDE3NzUyODI0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Golden hour sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
            <span className="text-white text-2xl font-medium">7am</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl text-white mb-6 tracking-tight">
          The Morning After, First.
        </h1>

        {/* Hook */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-xl md:text-2xl text-white/90 mb-4">
            Stop swiping on the version of people that doesn't exist.
          </p>
          <p className="text-lg md:text-xl text-white/80">
            <span className="text-white">7am</span> is the first dating app designed for radical honesty. 
            We've removed the filters, the ring lights, and the curated galleries to make room for 
            the one thing missing from digital dating: <span className="text-white">The Truth.</span>
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#waitlist" 
            className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg"
          >
            Join the Waitlist
          </a>
          <a 
            href="#how-it-works" 
            className="px-8 py-4 bg-transparent text-white border-2 border-white/30 rounded-full hover:bg-white/10 transition-all"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
        </div>
      </div>
    </section>
  );
}
