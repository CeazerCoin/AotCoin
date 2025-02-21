
import CountdownTimer from '@/components/CountdownTimer';
import NewsletterSignup from '@/components/NewsletterSignup';
import SocialLinks from '@/components/SocialLinks';
import { Sword } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-theme-dark p-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(234,56,76,0.15)_0%,rgba(34,34,34,0.4)_100%)]" />
      <div className="absolute inset-0 bg-[url('/wall-pattern.png')] opacity-5" />

      <main className="container max-w-4xl mx-auto text-center z-10 animate-fade-up space-y-12">
        {/* Logo */}
        <div className="mb-8 inline-block p-4 rounded-full bg-theme-gold/10 animate-float">
          <Sword size={48} className="text-theme-red" />
        </div>

        {/* Header */}
        <div className="space-y-4">
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-theme-red">
            The Battle for Financial{' '}
            <span className="text-theme-gold">Freedom Begins</span>
          </h1>
          <p className="text-lg md:text-xl text-theme-darkGold max-w-2xl mx-auto font-cinzel">
            Join the revolution. Like the walls that protected humanity, our cryptocurrency will protect your wealth.
          </p>
        </div>

        {/* Countdown Timer */}
        <div className="py-8">
          <CountdownTimer />
        </div>

        {/* Newsletter Signup */}
        <div className="space-y-4">
          <p className="text-theme-gold font-cinzel">Join the Survey Corps of early adopters.</p>
          <NewsletterSignup />
        </div>

        {/* Social Links */}
        <div className="pt-8">
          <SocialLinks />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-theme-red/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-32 h-32 bg-theme-gold/5 blur-3xl" />
      </main>
    </div>
  );
};

export default Index;
