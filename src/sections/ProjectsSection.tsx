import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef } from 'react';
import FadeIn from '../components/FadeIn';
import LiveProjectButton from '../components/LiveProjectButton';
import { projects, gh, openSource, type Project } from '../data';
import RepoTile from '../components/RepoTile';

const radius = 'rounded-[28px] sm:rounded-[40px] md:rounded-[50px]';

function Card({ p, index, total, progress }: { p: Project; index: number; total: number; progress: MotionValue<number> }) {
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(progress, [index / total, 1], [1, targetScale]);
  return (
    <div className="sticky top-20 flex h-[96svh] items-start justify-center sm:top-24 sm:h-[88svh] md:h-[85vh] lg:top-28">
      <motion.article
        style={{ scale, top: `${index * 28}px`, transformOrigin: 'top center' }}
        className="relative flex w-full max-w-6xl flex-col gap-4 rounded-[32px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:gap-6 sm:rounded-[50px] sm:p-6 md:rounded-[60px] md:p-8"
      >
        {/* Top row */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:flex-nowrap sm:gap-8">
          <span className="hero-heading shrink-0 font-black leading-none" style={{ fontSize: 'clamp(2.6rem, 8vw, 120px)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-[0.7rem] font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60 sm:text-sm">{p.category}</span>
            <h3 className="font-medium uppercase leading-tight text-[#D7E2EA]" style={{ fontSize: 'clamp(1.15rem, 2.6vw, 2.4rem)' }}>{p.name}</h3>
          </div>
          {p.repo && (
            <div className="w-full sm:w-auto">
              <LiveProjectButton href={gh(p.repo)} />
            </div>
          )}
        </div>

        {/* Bottom row: 40% / 60% grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-[2fr_3fr] sm:gap-4">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className={`${radius} overflow-hidden border border-[#D7E2EA]/15`} style={{ height: 'clamp(120px, min(16vw, 20vh), 230px)' }}>
              {p.repo ? (
                <RepoTile repo={p.repo} compact />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-6xl" style={{ background: 'linear-gradient(135deg, #7621B0, #18011F)' }} aria-hidden="true">{p.icon}</div>
              )}
            </div>
            <div
              className={`${radius} hidden flex-col justify-end p-6 sm:flex md:p-8`}
              style={{ height: 'clamp(150px, min(22vw, 26vh), 340px)', background: 'linear-gradient(123deg, #18011F 7%, #B600A8 60%, #7621B0 100%)' }}
            >
              <div className="font-black uppercase leading-none text-white" style={{ fontSize: 'clamp(2rem, 4.6vw, 4.2rem)' }}>{p.metric.big}</div>
              <div className="mt-2 text-sm font-light uppercase tracking-wide text-white/80 md:text-base">{p.metric.small}</div>
            </div>
          </div>
          <div className={`${radius} flex flex-col justify-between gap-4 border border-[#D7E2EA]/15 bg-[#141414] p-5 sm:p-8 md:p-10`}>
            <div className="sm:hidden">
              <span className="font-black uppercase text-white" style={{ fontSize: '1.6rem' }}>{p.metric.big}</span>
              <span className="ml-2 text-xs font-light uppercase tracking-wide text-[#D7E2EA]/70">{p.metric.small}</span>
            </div>
            <p className="font-light leading-relaxed text-[#D7E2EA]/85" style={{ fontSize: 'clamp(0.88rem, 1.45vw, 1.2rem)' }}>
              {p.summary.split('`').map((part, i) => (i % 2 ? <code key={i} className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em]">{part}</code> : part))}
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full border border-[#D7E2EA]/30 px-3 py-1 text-[0.7rem] uppercase tracking-wider text-[#D7E2EA] sm:text-xs">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  return (
    <section id="projects" className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-4 pb-24 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pt-32">
      <FadeIn as="h2" y={40} className="hero-heading mb-10 text-center font-black uppercase leading-none tracking-tight sm:mb-14" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Projects
      </FadeIn>
      <div ref={ref}>
        {projects.map((p, i) => (
          <Card key={p.name} p={p} index={i} total={projects.length} progress={scrollYProgress} />
        ))}
      </div>
      <FadeIn className="mx-auto mt-10 flex max-w-6xl flex-col items-start gap-4 rounded-[32px] border border-[#D7E2EA]/20 p-6 sm:flex-row sm:items-center sm:justify-between sm:rounded-[50px] sm:p-8">
        <div>
          <span className="text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/60 sm:text-sm">ROS 2 Community</span>
          <h3 className="text-lg font-medium uppercase text-[#D7E2EA] sm:text-2xl">{openSource.title}</h3>
          <p className="mt-1 max-w-xl font-light text-[#D7E2EA]/75">{openSource.text}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          {openSource.links.map((l) => (
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" className="rounded-full border-2 border-[#D7E2EA] px-4 py-2 text-xs font-medium uppercase tracking-widest text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10">
              {l.label}
            </a>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
