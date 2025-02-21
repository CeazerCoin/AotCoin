
import { Twitter, Github, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  const links = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'Github' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <div className="flex gap-6 items-center justify-center">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          className="text-purple-light hover:text-purple-primary transition-colors duration-200"
        >
          <Icon size={24} />
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
