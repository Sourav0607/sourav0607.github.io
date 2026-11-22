import FadeIn from '../components/FadeIn';
import { expertise, skills } from '../data';

export default function ServicesSection() {
  return (
    <section id="expertise" className="rounded-t-[40px] bg-white px-5 py-20 pb-28 text-[#0C0C0C] sm:rounded-t-[50px] sm:px-8 sm:py-24 sm:pb-32 md:rounded-t-[60px] md:px-10 md:py-32 md:pb-40">
      <FadeIn as="h2" y={40} className="mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Expertise
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {expertise.map((s, i) => (
          <FadeIn
            key={s.name}
            delay={i * 0.1}
            className="flex items-start gap-5 py-8 sm:items-center sm:gap-10 sm:py-10 md:gap-14 md:py-12"
            style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}
          >
            <span className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
              {String(i + 1).padStart(2, '0')}
            </span>
            <div className="flex flex-col gap-2">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>{s.name}</h3>
              <p className="max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>{s.desc}</p>
            </div>
          </FadeIn>
        ))}
        <FadeIn className="mt-10 flex flex-wrap justify-center gap-2 border-t pt-10" style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}>
          {skills.map((s) => (
            <span key={s} className="rounded-full border border-[#0C0C0C]/20 px-3 py-1 text-xs uppercase tracking-wider sm:text-sm">{s}</span>
          ))}
        </FadeIn>
      </div>
    </section>
  );
}
