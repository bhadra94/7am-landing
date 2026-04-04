import { ImageWithFallback } from './figma/ImageWithFallback';

export function Mission() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          {/* Image */}
          <div className="mb-12 rounded-2xl overflow-hidden shadow-xl max-w-2xl mx-auto">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1713207524097-596f3c17afc3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob25lc3QlMjBnZW51aW5lJTIwcG9ydHJhaXQlMjBuYXR1cmFsfGVufDF8fHx8MTc3NTI4MjQwMXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Genuine portrait"
              className="w-full h-auto"
            />
          </div>

          {/* Mission Statement */}
          <h2 className="text-4xl md:text-5xl mb-8">
            The Mission
          </h2>
          <div className="space-y-6 text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
            <p>
              Dating apps have become a performance. <span className="text-black">7am is the exit ramp.</span>
            </p>
            <p>
              We aren't here to help you look perfect; we're here to help you <span className="text-black">be found.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
