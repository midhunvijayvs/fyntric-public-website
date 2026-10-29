import { Gauge, Smartphone } from "lucide-react";
import { Layer } from "./Stage";
import { BrowserWindow, Chip, ImageBlock, Line, delay } from "./parts";

/** A responsive website loading in a browser, with speed and device badges. */
export function WebScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-x-[6%] top-[8%] bottom-[10%]">
        <BrowserWindow url="yourbrand.com" className="h-full">
          <div className="flex items-center justify-between">
            <div className="h-2 w-12 rounded-full bg-brand-500" />
            <div className="flex gap-2">
              <Line className="w-6" />
              <Line className="w-6" />
              <Line className="w-6" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-5 items-center gap-4">
            <div className="col-span-3 space-y-2">
              <Line grow className="h-3 w-[90%] bg-foreground/80" />
              <Line grow delay={0.2} className="h-3 w-[70%] bg-foreground/80" />
              <Line grow delay={0.4} className="mt-3 w-full" />
              <Line grow delay={0.5} className="w-[80%]" />
              <div className="mt-3 h-5 w-20 animate-pulse-soft rounded-full bg-linear-to-r from-brand-500 to-accent-cyan" />
            </div>
            <ImageBlock
              className="col-span-2 aspect-square"
              gradient="from-brand-400 via-accent-cyan to-accent-violet"
            />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="animate-breathe space-y-1.5 rounded-lg bg-tint p-2" style={delay(item * 0.3)}>
                <div className="h-6 rounded-md bg-brand-500/20" />
                <Line className="w-[80%]" />
              </div>
            ))}
          </div>
        </BrowserWindow>
      </Layer>
      <Layer depth={1.4} className="absolute top-[2%] right-[0%]">
        <Chip icon={Gauge} label="98 Page speed" tone="text-emerald-500" />
      </Layer>
      <Layer depth={1.8} className="absolute bottom-[2%] left-[0%]">
        <Chip icon={Smartphone} label="Responsive on every screen" delay={1.2} />
      </Layer>
    </>
  );
}
