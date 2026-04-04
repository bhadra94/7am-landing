import { Video, User, Volume2 } from 'lucide-react';

export function HowItWorks() {
  const clips = [
    {
      icon: User,
      title: 'The Face',
      description: 'A 10-second close-up. No makeup. No digital smoothing. Just your natural skin and real expressions in the light of day.',
    },
    {
      icon: Video,
      title: 'The Silhouette',
      description: 'A 10-second full-body view. To strip away "fashion masking," everyone wears a plain, form-fitting black outfit. We focus on your physical presence, not your wardrobe.',
    },
    {
      icon: Volume2,
      title: 'The Voice',
      description: 'A 10-second clip of you reading a randomly generated script. No rehearsed lines—just the sound of your natural voice and inflection.',
    },
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            How it Works: The 3-Clip Profile
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            To see others, you must be seen. Every profile consists of three raw, 10-second video clips 
            captured in real-time, exclusively within the app.
          </p>
        </div>

        {/* Clips Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {clips.map((clip, index) => {
            const Icon = clip.icon;
            return (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 bg-black rounded-full">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{clip.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {clip.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
