import { Github, Activity, Map, MessageSquareText, ScanEye, Bot, PersonStanding, Code2, Truck, Layers, type LucideIcon } from 'lucide-react';

// Self-contained "repository card" artwork, so the site never depends on an external image host.
export const repoMeta: Record<string, { Icon: LucideIcon; lang: string; hue: string; line: string }> = {
  'ROS2-STUDIO': { Icon: Activity, lang: 'Python', hue: '#B600A8', line: 'ROS2 monitoring, bag tools & dashboard' },
  'AMR_V1.0': { Icon: Truck, lang: 'Python', hue: '#BE4C00', line: 'Differential-drive AMR with warehouse tasks' },
  VLN_BOT: { Icon: MessageSquareText, lang: 'Python', hue: '#7621B0', line: 'Natural-language navigation on Jetson' },
  Stereo_Vision_ROS2: { Icon: ScanEye, lang: 'Python', hue: '#0F8F7E', line: 'Stereo depth & 3D reconstruction' },
  'Kuka-Moveit2': { Icon: Bot, lang: 'C++', hue: '#2F6FB0', line: 'KUKA KR10 with MoveIt2 pick & place' },
  Humanoid: { Icon: PersonStanding, lang: 'Python', hue: '#B600A8', line: 'STAR1 humanoid URDF for RViz & Gazebo' },
  ROS2_CPP: { Icon: Code2, lang: 'C++', hue: '#7621B0', line: 'ROS2 middleware in modern C++' },
  Bumperbot: { Icon: Map, lang: 'Python', hue: '#BE4C00', line: 'Diff-drive robot simulation & control' },
};

const langColor: Record<string, string> = { Python: '#3572A5', 'C++': '#f34b7d' };

export default function RepoTile({ repo, compact = false }: { repo: string; compact?: boolean }) {
  const m = repoMeta[repo] ?? { Icon: Layers, lang: '', hue: '#7621B0', line: '' };
  const { Icon } = m;
  return (
    <div
      className="relative flex h-full w-full flex-col justify-between overflow-hidden p-5 sm:p-7"
      style={{ background: `radial-gradient(130% 130% at 100% 0%, ${m.hue} 0%, #18011F 50%, #0C0C0C 100%)` }}
      role="img"
      aria-label={`${repo} repository on GitHub`}
    >
      <Icon
        className="absolute -right-4 -top-4 text-white/15"
        style={{ width: compact ? '45%' : '55%', height: 'auto' }}
        strokeWidth={1.2}
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-2 text-xs font-light uppercase tracking-[0.2em] text-[#D7E2EA]/70 sm:text-sm">
        <Github className="h-4 w-4" aria-hidden="true" />
        Sourav0607 /
      </div>
      <div className="relative">
        <div className="break-all font-black uppercase leading-none text-white" style={{ fontSize: compact ? 'clamp(1.2rem, 2.4vw, 2.1rem)' : 'clamp(1.6rem, 3vw, 2.6rem)' }}>
          {repo}
        </div>
        {m.line && !compact && <div className="mt-2 text-sm font-light text-[#D7E2EA]/80 sm:text-base">{m.line}</div>}
        {m.lang && (
          <div className="mt-2 flex items-center gap-2 text-xs uppercase tracking-wider text-[#D7E2EA]/70">
            <span className="h-2.5 w-2.5 rounded-full" style={{ background: langColor[m.lang] ?? '#D7E2EA' }} aria-hidden="true" />
            {m.lang}
          </div>
        )}
      </div>
    </div>
  );
}
