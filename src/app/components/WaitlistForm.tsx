import { useState } from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';

export function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just show success message
    // This would be connected to a backend/database
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section id="waitlist" className="py-24 px-6 bg-black text-white">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl mb-6">
          Join the Unmasked Waitlist
        </h2>
        <p className="text-xl text-white/80 mb-12">
          Be the first to experience dating without the mask.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/40"
                />
              </div>
              <button
                type="submit"
                className="px-8 py-4 bg-white text-black rounded-full hover:bg-white/90 transition-all shadow-lg whitespace-nowrap"
              >
                Join Waitlist
              </button>
            </div>
            <p className="text-sm text-white/60">
              No spam. Just honest updates about our launch.
            </p>
          </form>
        ) : (
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <CheckCircle2 className="w-8 h-8 text-green-400" />
              <h3 className="text-2xl">You're on the list!</h3>
            </div>
            <p className="text-white/80">
              We'll notify you as soon as 7am launches. Get ready for authentic connections.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm">
            © 2026 7am. Dating without the mask.
          </p>
        </div>
      </div>
    </section>
  );
}
