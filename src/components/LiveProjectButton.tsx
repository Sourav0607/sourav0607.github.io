import { Github } from 'lucide-react';

export default function LiveProjectButton({ href, label = 'View on GitHub' }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA] px-6 py-2.5 sm:px-10 sm:py-3.5 text-xs sm:text-base font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap"
    >
      <Github className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
      {label}
    </a>
  );
}
