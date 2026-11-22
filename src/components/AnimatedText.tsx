import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { useRef, type CSSProperties } from 'react';

function Char({ char, progress, range }: { char: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative">
      <span className="invisible">{char}</span>
      <motion.span className="absolute left-0 top-0" style={{ opacity }}>{char}</motion.span>
    </span>
  );
}

export default function AnimatedText({ text, className, style }: { text: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const words = text.split(' ');
  const total = text.length;
  let index = 0;
  return (
    <p ref={ref} className={className} style={style} aria-label={text}>
      {words.map((word, wi) => {
        const chars = word.split('');
        const node = (
          // Keep each word unbreakable so characters never wrap mid-word.
          <span key={wi} className="inline-block whitespace-nowrap" aria-hidden="true">
            {chars.map((c, ci) => {
              const start = (index + ci) / total;
              return <Char key={ci} char={c} progress={scrollYProgress} range={[start, start + 1 / total]} />;
            })}
          </span>
        );
        index += word.length + 1;
        return <span key={wi}>{node}{wi < words.length - 1 ? ' ' : ''}</span>;
      })}
    </p>
  );
}
