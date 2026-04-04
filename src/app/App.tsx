import { Hero } from './components/Hero';
import { HowItWorks } from './components/HowItWorks';
import { WhySevenAM } from './components/WhySevenAM';
import { Mission } from './components/Mission';
import { WaitlistForm } from './components/WaitlistForm';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <WhySevenAM />
      <Mission />
      <WaitlistForm />
    </div>
  );
}
