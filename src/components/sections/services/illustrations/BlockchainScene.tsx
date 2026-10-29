import { Box, ShieldCheck } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, Line, delay } from "./parts";

const blocks = [0, 1, 2, 3];

/** A chain of blocks being verified one after another. */
export function BlockchainScene() {
  return (
    <>
      <Layer depth={0.8} className="absolute inset-x-[4%] top-1/2 -translate-y-1/2">
        <div className="flex items-center justify-between">
          {blocks.map((block) => (
            <div key={block} className="flex flex-1 items-center last:flex-none">
              <div
                className="relative w-[4.5rem] animate-bob space-y-1.5 rounded-xl bg-surface p-2 shadow-xl shadow-ink-950/25 sm:w-24"
                style={{ ...delay(block * 0.6), animationDuration: "4s" }}
              >
                <span
                  className="absolute inset-0 animate-breathe rounded-xl border-2 border-teal-500"
                  style={{ ...delay(block * 0.6), animationDuration: "4s" }}
                />
                <div className="flex items-center gap-1 text-[8px] font-semibold text-foreground">
                  <Box className="size-3 text-teal-500" />#{1024 + block}
                </div>
                <Line className="w-full" />
                <Line className="w-[70%]" />
                <div className="font-mono text-[7px] text-subtle">0x{(0xa3f1 + block * 4371).toString(16)}…</div>
              </div>
              {block < blocks.length - 1 && (
                <div
                  className="mx-1 h-0.5 flex-1 animate-breathe rounded-full bg-white"
                  style={{ ...delay(block * 0.6 + 0.3), animationDuration: "4s" }}
                />
              )}
            </div>
          ))}
        </div>
      </Layer>
      <Layer depth={1.6} className="absolute top-[6%] left-[4%]">
        <Chip icon={ShieldCheck} label="Smart contract deployed" tone="text-teal-500" />
      </Layer>
      <Layer depth={1.2} className="absolute right-[4%] bottom-[8%]">
        <Chip icon={Box} label="Tamper-proof records" tone="text-indigo-500" delay={1.2} />
      </Layer>
    </>
  );
}
