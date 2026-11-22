import { useEffect, useRef, useState } from 'react';
import { marqueeRepos, marqueeHighlights, gh } from '../data';
import RepoTile from '../components/RepoTile';

const tile = 'h-[180px] w-[280px] sm:h-[270px] sm:w-[420px] shrink-0 rounded-2xl overflow-hidden';

export default function MarqueeSection() {
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current;
        if (!el) return;
        const sectionTop = el.getBoundingClientRect().top + window.scrollY;
        setOffset((window.scrollY - sectionTop + window.innerHeight) * 0.3);
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const row1 = [...marqueeRepos, ...marqueeRepos, ...marqueeRepos];
  const row2 = [...marqueeHighlights, ...marqueeHighlights, ...marqueeHighlights];

  return (
    <section ref={ref} className="flex flex-col gap-3 bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40" style={{ overflowX: 'clip' }} aria-label="Project and highlight gallery">
      <div className="flex gap-3" style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform', marginLeft: '-1200px' }}>
        {row1.map((repo, i) => (
          <a key={i} href={gh(repo)} target="_blank" rel="noopener noreferrer" className={`${tile} block border border-[#D7E2EA]/15`} tabIndex={i < marqueeRepos.length ? 0 : -1}>
            <RepoTile repo={repo} />
          </a>
        ))}
      </div>
      <div className="flex gap-3" style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}>
        {row2.map((h, i) => (
          <div
            key={i}
            className={`${tile} relative flex flex-col justify-end p-6 sm:p-8`}
            style={{ background: `radial-gradient(120% 120% at 0% 0%, ${h.hue} 0%, #18011F 55%, #0C0C0C 100%)`, border: '1px solid rgba(215,226,234,0.15)' }}
            aria-hidden={i >= marqueeHighlights.length}
          >
            <div className="hero-heading font-black uppercase leading-none" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.5rem)' }}>{h.big}</div>
            <div className="mt-2 max-w-[90%] text-sm font-light uppercase tracking-wide text-[#D7E2EA] sm:text-base">{h.small}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
