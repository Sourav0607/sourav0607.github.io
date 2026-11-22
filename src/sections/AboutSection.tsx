import { Bot, Radar, Cpu, Cog, type LucideIcon } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AnimatedText from '../components/AnimatedText';
import ContactButton from '../components/ContactButton';
import { aboutText, roles } from '../data';

// Glossy "3D" badge used for the corner decorations.
function Orb({ Icon, from, to, rotate }: { Icon: LucideIcon; from: string; to: string; rotate: number }) {
  return (
    <div
      className="flex aspect-square w-full items-center justify-center rounded-[28%]"
      style={{
        background: `linear-gradient(145deg, ${from} 0%, ${to} 100%)`,
        boxShadow: `inset 6px 6px 18px rgba(255,255,255,0.25), inset -10px -12px 24px rgba(0,0,0,0.45), 0 24px 50px -12px ${from}88`,
        transform: `rotate(${rotate}deg)`,
      }}
    >
      <Icon className="h-1/2 w-1/2 text-white drop-shadow-[0_6px_10px_rgba(0,0,0,0.35)]" strokeWidth={1.6} aria-hidden="true" />
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-5 py-28 sm:px-8 sm:py-20 md:px-10">
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute left-[1%] top-[4%] w-[72px] sm:left-[2%] sm:w-[120px] md:left-[4%] md:w-[160px]">
        <Orb Icon={Bot} from="#B600A8" to="#18011F" rotate={-12} />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[4%] left-[3%] w-[60px] sm:bottom-[8%] sm:left-[6%] sm:w-[100px] md:left-[10%] md:w-[130px]">
        <Orb Icon={Cpu} from="#7621B0" to="#0C0C0C" rotate={10} />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute right-[1%] top-[4%] w-[72px] sm:right-[2%] sm:w-[120px] md:right-[4%] md:w-[160px]">
        <Orb Icon={Radar} from="#BE4C00" to="#18011F" rotate={12} />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[4%] right-[3%] w-[64px] sm:bottom-[8%] sm:right-[6%] sm:w-[110px] md:right-[10%] md:w-[150px]">
        <Orb Icon={Cog} from="#2F6FB0" to="#0C0C0C" rotate={-8} />
      </FadeIn>

      <div className="relative z-10 flex flex-col items-center gap-16 sm:gap-20 md:gap-24">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn as="h2" delay={0} y={40} className="hero-heading text-center font-black uppercase leading-none tracking-tight" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
            About me
          </FadeIn>
          <AnimatedText
            text={aboutText}
            className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
          <FadeIn delay={0.1} className="flex max-w-[620px] flex-wrap justify-center gap-2">
            <span className="w-full pb-1 text-center text-xs font-light uppercase tracking-[0.25em] text-[#D7E2EA]/60">Open to full-time roles in</span>
            {roles.map((r) => (
              <span key={r} className="rounded-full border border-[#D7E2EA]/25 px-3 py-1 text-xs uppercase tracking-wider text-[#D7E2EA]/85 sm:text-sm">
                {r}
              </span>
            ))}
          </FadeIn>
        </div>
        <FadeIn delay={0.1}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
}
