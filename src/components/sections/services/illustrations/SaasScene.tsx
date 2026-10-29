import { TrendingUp, Users } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, Line, Panel, delay } from "./parts";

const kpis = [
  { label: "MRR", value: "₹8.4L" },
  { label: "Users", value: "12,480" },
  { label: "Churn", value: "1.2%" },
];

/** Bar heights in % of the chart, one per month. */
const bars = [40, 55, 48, 70, 62, 84, 96];

/** A SaaS dashboard with KPI tiles and a revenue chart that grows month over month. */
export function SaasScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-x-[6%] top-[8%] bottom-[12%]">
        <Panel className="flex h-full flex-col p-4">
          <div className="grid grid-cols-3 gap-2">
            {kpis.map((kpi) => (
              <div key={kpi.label} className="rounded-xl bg-tint p-2">
                <div className="text-[8px] text-muted">{kpi.label}</div>
                <div className="font-display text-xs font-semibold text-foreground sm:text-sm">{kpi.value}</div>
              </div>
            ))}
          </div>
          <div className="relative mt-4 flex-1">
            <div className="absolute inset-0 flex items-end gap-2">
              {bars.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 origin-bottom animate-grow-y rounded-t-md bg-linear-to-t from-brand-500 to-accent-cyan"
                  style={{ height: `${height}%`, ...delay(index * 0.12) }}
                />
              ))}
            </div>
          </div>
          <div className="mt-2 flex justify-between">
            {bars.map((_, index) => (
              <Line key={index} className="h-1 w-3" />
            ))}
          </div>
        </Panel>
      </Layer>
      <Layer depth={1.6} className="absolute top-[0%] right-[0%]">
        <Chip icon={TrendingUp} label="Revenue +24% this month" tone="text-emerald-500" />
      </Layer>
      <Layer depth={1.2} className="absolute bottom-[2%] left-[0%]">
        <Chip icon={Users} label="Multi-tenant & subscriptions" tone="text-brand-500" delay={1} />
      </Layer>
    </>
  );
}
