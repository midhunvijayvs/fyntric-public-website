import { Bell, Star } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, ImageBlock, Line, Phone } from "./parts";

/** Two phones showing an app, with a push notification sliding in. */
export function MobileScene() {
  return (
    <>
      <Layer depth={0.5} className="absolute top-[12%] left-[10%] w-[34%] -rotate-6">
        <Phone>
          <ImageBlock className="aspect-[4/3]" gradient="from-accent-violet to-brand-400" />
          <div className="mt-2 space-y-1.5">
            <Line className="w-[80%] bg-foreground/70" />
            <Line className="w-[60%]" />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-1.5">
            <div className="aspect-square rounded-md bg-tint-strong" />
            <div className="aspect-square rounded-md bg-tint-strong" />
          </div>
        </Phone>
      </Layer>
      <Layer depth={1} className="absolute top-[4%] right-[12%] w-[38%] rotate-3">
        <Phone>
          <div className="flex items-center justify-between">
            <Line className="w-10 bg-foreground/70" />
            <div className="size-4 rounded-full bg-brand-500" />
          </div>
          <div className="mt-3 rounded-xl bg-linear-to-br from-brand-500 to-accent-violet p-3 text-white">
            <div className="text-[8px] opacity-80">Today</div>
            <div className="font-display text-sm font-semibold">₹ 48,250</div>
            <svg viewBox="0 0 100 30" className="mt-1 h-6 w-full">
              <path
                d="M0 25 L20 18 L40 21 L60 10 L80 13 L100 3"
                pathLength={1}
                strokeDasharray={1}
                className="animate-draw"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <div className="mt-3 space-y-2">
            {[0, 1, 2].map((row) => (
              <div key={row} className="flex items-center gap-2">
                <div className="size-5 rounded-md bg-tint-strong" />
                <div className="flex-1 space-y-1">
                  <Line className="w-[70%]" />
                  <Line className="h-1 w-[40%]" />
                </div>
              </div>
            ))}
          </div>
        </Phone>
      </Layer>
      <Layer depth={1.8} className="absolute bottom-[10%] left-[22%]">
        <div className="animate-slide-in">
          <Chip icon={Bell} label="New order received" tone="text-accent-violet" />
        </div>
      </Layer>
      <Layer depth={1.4} className="absolute right-[2%] bottom-[4%]">
        <Chip icon={Star} label="4.9 on Play Store & App Store" tone="text-amber-500" delay={1} />
      </Layer>
    </>
  );
}
