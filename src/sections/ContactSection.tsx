import { Mail, Linkedin, Github, Phone, MapPin, BadgeCheck, Languages } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import ContactButton from '../components/ContactButton';
import { contact, certificates } from '../data';

const links = [
  { Icon: Mail, label: contact.email, href: `mailto:${contact.email}` },
  { Icon: Linkedin, label: 'LinkedIn', href: contact.linkedin },
  { Icon: Github, label: 'GitHub', href: contact.github },
  { Icon: Phone, label: contact.phone, href: contact.phoneHref },
];

export default function ContactSection() {
  return (
    <section id="contact" className="relative z-30 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-10 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 text-center sm:gap-14">
        <FadeIn as="h2" y={40} className="hero-heading font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
          Let&apos;s talk
        </FadeIn>
        <FadeIn as="p" delay={0.1} className="max-w-[620px] font-light leading-relaxed text-[#D7E2EA]" style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}>
          I&apos;m looking for full-time roles in robotics software, perception and sensor fusion, calibration and validation, navigation, manipulation and ML for robotics.
        </FadeIn>
        <FadeIn delay={0.15} className="flex flex-wrap justify-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/85 sm:text-sm">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1.5"><MapPin className="h-4 w-4" aria-hidden="true" />Germany · open to relocation</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1.5"><BadgeCheck className="h-4 w-4" aria-hidden="true" />Full work authorisation, no sponsorship needed</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D7E2EA]/25 px-3 py-1.5"><Languages className="h-4 w-4" aria-hidden="true" />English fluent · German B1 · Marathi native</span>
        </FadeIn>
        <FadeIn delay={0.2}>
          <ContactButton href={`mailto:${contact.email}`} label="Email Me" />
        </FadeIn>
        <FadeIn delay={0.25} className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2">
          {links.map(({ Icon, label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-full border-2 border-[#D7E2EA]/40 px-6 py-4 text-sm font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10 sm:text-base"
              style={{ overflowWrap: 'anywhere' }}
            >
              <Icon className="h-5 w-5 shrink-0" aria-hidden="true" />
              <span className={label.includes('@') ? 'normal-case tracking-wide' : ''}>{label}</span>
            </a>
          ))}
        </FadeIn>
        <FadeIn delay={0.3} className="w-full">
          <h3 className="mb-4 text-sm font-light uppercase tracking-[0.25em] text-[#D7E2EA]/60">Certificates</h3>
          <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {certificates.map((c) => (
              <li key={c} className="rounded-2xl border border-[#D7E2EA]/15 px-5 py-3 text-left text-sm font-light text-[#D7E2EA]/85">{c}</li>
            ))}
          </ul>
        </FadeIn>
      </div>
      <footer className="mt-20 border-t border-[#D7E2EA]/15 pt-6 text-center text-xs font-light uppercase tracking-widest text-[#D7E2EA]/50">
        © {new Date().getFullYear()} Sourav Anil Hawaldar · Weingarten, Germany
      </footer>
    </section>
  );
}
