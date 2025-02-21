
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're on the list!", {
        description: "We'll keep you updated on our launch."
      });
      setEmail('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 border-purple-light/20 text-white placeholder:text-purple-light/50"
        required
      />
      <Button type="submit" className="bg-purple-primary hover:bg-purple-primary/80 text-white">
        Notify Me
      </Button>
    </form>
  );
};

export default NewsletterSignup;
