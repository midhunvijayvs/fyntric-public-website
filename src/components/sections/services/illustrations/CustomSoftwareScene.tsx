import { Cpu, Database, FileText, Users, Workflow } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, delay } from "./parts";

/** Systems around the central workflow, positioned in % of the stage. */
const nodes = [
  { icon: Users, label: "Teams", x: 14, y: 22 },
  { icon: FileText, label: "Requests", x: 14, y: 72 },
  { icon: Database, label: "Data", x: 86, y: 22 },
  { icon: Cpu, label: "Reports", x: 86, y: 72 },
];

const center = { x: 50, y: 50 };

/** A workflow diagram with data flowing along dashed connectors between system nodes. */
export function CustomSoftwareScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-0">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 size-full">
          {nodes.map((node) => (
            <line
              key={node.label}
              x1={node.x}
              y1={node.y}
              x2={center.x}
              y2={center.y}
              className="animate-dash"
              stroke="white"
              strokeOpacity="0.7"
              strokeWidth="0.6"
              strokeDasharray="2 2"
            />
          ))}
        </svg>
        {nodes.map((node, index) => (
          <div
            key={node.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            <div
              className="flex animate-bob flex-col items-center gap-1.5 rounded-xl bg-surface px-3 py-2.5 text-[10px] font-semibold text-foreground shadow-xl shadow-ink-950/25"
              style={delay(index * 0.4)}
            >
              <node.icon className="size-4 text-brand-500" />
              {node.label}
            </div>
          </div>
        ))}
      </Layer>
      <Layer depth={1.4} className="absolute inset-0 grid place-items-center">
        <div className="flex animate-pulse-soft flex-col items-center gap-2 rounded-2xl bg-surface px-5 py-4 text-xs font-semibold text-foreground shadow-2xl shadow-ink-950/30 [animation-duration:3s]">
          <Workflow className="size-6 text-indigo-500" />
          Workflow
        </div>
      </Layer>
      <Layer depth={1.8} className="absolute bottom-[0%] left-1/2 -translate-x-1/2">
        <Chip icon={Workflow} label="Built around your process" tone="text-indigo-500" delay={0.6} />
      </Layer>
    </>
  );
}
