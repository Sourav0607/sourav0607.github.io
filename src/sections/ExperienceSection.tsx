import FadeIn from '../components/FadeIn';
import { experience, education } from '../data';

const h2 = 'mb-14 text-center font-black uppercase leading-none tracking-tight sm:mb-20';

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-20 -mt-10 rounded-t-[40px] bg-white px-5 pb-28 pt-20 text-[#0C0C0C] sm:-mt-12 sm:rounded-t-[50px] sm:px-8 sm:pt-24 md:-mt-14 md:rounded-t-[60px] md:px-10 md:pb-40 md:pt-32">
      <FadeIn as="h2" y={40} className={h2} style={{ fontSize: 'clamp(2.6rem, 10vw, 140px)' }}>
        Experience
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {experience.map((job, i) => (
          <FadeIn key={job.company} delay={i * 0.1} className="py-8 sm:py-10" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1.15rem, 2.4vw, 2.1rem)' }}>{job.company}</h3>
              <span className="shrink-0 text-sm font-light uppercase tracking-wider opacity-60 sm:text-base">{job.period}</span>
            </div>
            <div className="text-sm font-light uppercase tracking-wider opacity-60">{job.place}</div>
            {job.roles.map((r) => (
              <div key={r.title} className="mt-5">
                <div className="flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <span className="font-medium" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)', color: '#7621B0' }}>{r.title}</span>
                  {r.period && <span className="shrink-0 text-xs font-light uppercase tracking-wider opacity-50 sm:text-sm">{r.period}</span>}
                </div>
                <ul className="mt-2 flex flex-col gap-1.5">
                  {r.points.map((pt) => (
                    <li key={pt} className="relative pl-5 font-light leading-relaxed opacity-75" style={{ fontSize: 'clamp(0.88rem, 1.3vw, 1.05rem)' }}>
                      <span className="absolute left-0 top-[0.7em] h-1.5 w-1.5 rounded-full bg-[#B600A8]" aria-hidden="true" />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </FadeIn>
        ))}
      </div>

      <FadeIn as="h2" y={40} className={`${h2} mt-20 sm:mt-28`} style={{ fontSize: 'clamp(2.6rem, 10vw, 140px)' }}>
        Education
      </FadeIn>
      <div className="mx-auto max-w-5xl">
        {education.map((e, i) => (
          <FadeIn key={e.degree} delay={i * 0.1} className="flex items-start gap-5 py-8 sm:gap-10 sm:py-10" style={{ borderTop: i === 0 ? 'none' : '1px solid rgba(12, 12, 12, 0.15)' }}>
            <span className="shrink-0 font-black leading-none" style={{ fontSize: 'clamp(2.6rem, 8vw, 110px)' }}>{String(i + 1).padStart(2, '0')}</span>
            <div className="flex flex-col gap-1">
              <h3 className="font-medium uppercase leading-tight" style={{ fontSize: 'clamp(1rem, 2.2vw, 2rem)' }}>
                {e.degree} <span style={{ color: '#7621B0' }}>· {e.grade}</span>
              </h3>
              <div className="font-light" style={{ fontSize: 'clamp(0.9rem, 1.4vw, 1.15rem)' }}>{e.school}</div>
              <div className="text-sm font-light uppercase tracking-wider opacity-50">{e.period}</div>
              <p className="mt-1 max-w-2xl font-light leading-relaxed opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.3vw, 1.05rem)' }}>{e.note}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
