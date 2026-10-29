import { Megaphone, Search, Target } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, Panel, delay } from "./parts";

const funnel = [
  { label: "Reach", width: "100%" },
  { label: "Clicks", width: "74%" },
  { label: "Leads", width: "50%" },
  { label: "Customers", width: "30%" },
];

/** A growth chart drawing itself next to a marketing funnel. */
export function MarketingScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute top-[10%] left-[5%] w-[58%]">
        <Panel className="p-4">
          <div className="text-[10px] font-semibold text-foreground">Organic traffic</div>
          <div className="font-display text-lg font-semibold text-foreground">+186%</div>
          <svg viewBox="0 0 120 60" className="mt-2 h-auto w-full">
            <defs>
              <linearGradient id="marketing-line" x1="0" x2="1">
                <stop offset="0%" stopColor="#ec4899" />
                <stop offset="100%" stopColor="#f97316" />
              </linearGradient>
            </defs>
            <path
              d="M2 52 C 20 48, 28 40, 40 42 S 62 30, 74 26 S 98 14, 118 6"
              pathLength={1}
              strokeDasharray={1}
              className="animate-draw"
              fill="none"
              stroke="url(#marketing-line)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Panel>
      </Layer>
      <Layer depth={1.1} className="absolute right-[4%] bottom-[12%] w-[42%]">
        <Panel className="space-y-1.5 p-3">
          {funnel.map((stage, index) => (
            <div
              key={stage.label}
              className="mx-auto animate-breathe rounded-md bg-linear-to-r from-pink-500 to-orange-400 px-2 py-1 text-center text-[8px] font-semibold text-white"
              style={{ width: stage.width, ...delay(index * 0.3) }}
            >
              {stage.label}
            </div>
          ))}
        </Panel>
      </Layer>
      <Layer depth={1.8} className="absolute top-[4%] right-[4%]">
        <Chip icon={Search} label="#1 on Google" tone="text-pink-500" />
      </Layer>
      <Layer depth={1.4} className="absolute bottom-[2%] left-[4%]">
        <Chip icon={Target} label="Meta & Google Ads" tone="text-orange-500" delay={1} />
      </Layer>
      <Layer depth={2} className="absolute top-[52%] left-[48%]">
        <div className="grid size-11 animate-wiggle place-items-center rounded-full bg-surface shadow-xl shadow-ink-950/30 [animation-duration:4s]">
          <Megaphone className="size-5 text-pink-500" />
        </div>
      </Layer>
    </>
  );
}
