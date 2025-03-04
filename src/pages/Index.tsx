import CountdownTimer from '@/components/CountdownTimer';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialLinks from '@/components/SocialLinks';
import { Sword } from 'lucide-react';
import logo from '@/files/logoAot.png';
import BG from '@/files/Untitled design.png';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center p-4 relative overflow-hidden">
      {/* Icon on top-left corner */}
      <img
        src={logo}
        alt="AOT Logo"
        className="absolute top-4 left-[-30px] w-[200px]"  // Adjust size using w-20 (20px wide)
      />

      {/* SocialLinks in the top-right corner */}
      <div className="absolute top-8 right-10">
        <SocialLinks />
      </div>

      <main className="container max-w-4xl mx-auto text-center z-10 animate-fade-up space-y-[400px]">
        {/* Logo */}
        {/* <div className="inline-block animate-float">
          <img
            src={logo}
            alt="AOT Logo"
            className="max-w-full h-auto"
          />
        </div> */}

        {/* Header */}
        <div className="space-y-4">
          <h1
            className="font-cinzel text-4xl md:text-6xl font-bold text-theme-red"
            style={{ textShadow: '2px 8px 8px rgba(0, 0, 0, 0.5)' }}
          >
            The Battle for Financial{' '}
            <span className="text-theme-gold">Freedom Begins</span>
          </h1>
          {/* <p
            className="text-4xl md:text-2xl text-theme-black max-w-2xl mx-auto font-cinzel"
            style={{ textShadow: '1px 4px 4px rgba(0, 0, 0, 0.5)' }}
          >
            Join the revolution. Like the walls that protected humanity, our cryptocurrency will protect your wealth.
          </p> */}
        </div>
        <div></div>
      </main>

      {/* Decorative elements */}
    </div>
  );
};

export default Index;
