import { Shield, Zap, Scale } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WhySevenAM() {
  const reasons = [
    {
      icon: Shield,
      title: 'Zero Catfishing',
      description: 'Our "Live Capture Only" technology means every video you see was filmed that day. No old photos, no AI-enhancements, no surprises.',
    },
    {
      icon: Zap,
      title: 'Chemistry Over Curation',
      description: 'Research shows that 10 seconds of video tells you more about attraction than 1,000 static photos ever could.',
    },
    {
      icon: Scale,
      title: 'Equality in Authenticity',
      description: "We've leveled the playing field. By removing the \"editing arms race,\" we've made space for real human connection to breathe.",
    },
  ];

  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            Why 7am?
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770748034186-6d6e5738cddf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRoZW50aWMlMjBtb3JuaW5nJTIwc2VsZmllJTIwbmF0dXJhbCUyMGxpZ2h0fGVufDF8fHx8MTc3NTI4MjQwMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Authentic morning portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Reasons */}
          <div className="order-1 lg:order-2 space-y-8">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl mb-2">{reason.title}</h3>
                    <p className="text-white/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}