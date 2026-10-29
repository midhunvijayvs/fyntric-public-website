import { MessageCircle, Users } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, Line, Panel } from "./parts";

const columns = ["New lead", "Follow-up", "Won"];

/** A sales pipeline board where a lead card moves from new to won. */
export function CrmScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-x-[5%] top-[10%] bottom-[14%]">
        <Panel className="h-full p-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-[10px] font-semibold text-foreground">
              <Users className="size-3.5 text-brand-500" />
              Sales pipeline
            </div>
            <Line className="w-12" />
          </div>
          <div className="relative mt-3 grid h-[82%] grid-cols-3 gap-2">
            {columns.map((column) => (
              <div key={column} className="rounded-xl bg-tint p-2">
                <div className="text-[9px] font-semibold text-muted">{column}</div>
                <div className="mt-2 space-y-2">
                  {[0, 1].map((card) => (
                    <div key={card} className="space-y-1 rounded-lg bg-surface p-2 shadow-sm">
                      <Line className="w-[80%]" />
                      <Line className="h-1 w-[50%]" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="absolute top-[52%] left-[2%] w-[30%] animate-pipeline space-y-1 rounded-lg border border-brand-500/40 bg-surface p-2 shadow-xl shadow-brand-500/20">
              <div className="flex items-center gap-1.5">
                <div className="size-3 rounded-full bg-linear-to-br from-brand-400 to-accent-violet" />
                <span className="text-[8px] font-semibold text-foreground">Arjun · Kochi</span>
              </div>
              <div className="text-[8px] text-muted">₹1.2L deal</div>
            </div>
          </div>
        </Panel>
      </Layer>
      <Layer depth={1.6} className="absolute right-[0%] bottom-[2%]">
        <Chip icon={MessageCircle} label="WhatsApp follow-up sent" tone="text-emerald-500" />
      </Layer>
    </>
  );
}
