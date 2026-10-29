import { CircleCheck, Image as ImageIcon, Plus, Type } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, ImageBlock, Line, Panel } from "./parts";

/** A block editor where a new section drops in and the page gets published. */
export function WordPressScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-x-[6%] top-[8%] bottom-[12%]">
        <Panel className="flex h-full">
          <div className="flex w-[18%] flex-col items-center gap-3 border-r border-line bg-tint py-4">
            {[Plus, Type, ImageIcon].map((Icon, index) => (
              <div key={index} className="grid size-7 place-items-center rounded-lg bg-surface text-sky-500 shadow-sm">
                <Icon className="size-3.5" />
              </div>
            ))}
          </div>
          <div className="flex-1 space-y-3 p-4">
            <Line className="h-3 w-[60%] bg-foreground/80" />
            <Line className="w-[90%]" />
            <Line className="w-[75%]" />
            <div className="animate-drop-in rounded-xl border-2 border-dashed border-sky-400/70 p-2">
              <div className="flex gap-2">
                <ImageBlock className="aspect-video w-1/2" gradient="from-sky-300 to-indigo-500" />
                <div className="flex-1 space-y-1.5 pt-1">
                  <Line className="w-full" />
                  <Line className="w-[70%]" />
                  <Line className="w-[85%]" />
                </div>
              </div>
            </div>
            <Line className="w-[80%]" />
            <Line className="w-[55%]" />
          </div>
        </Panel>
      </Layer>
      <Layer depth={1.6} className="absolute top-[0%] right-[2%]">
        <div className="animate-pop">
          <Chip icon={CircleCheck} label="Page published" tone="text-emerald-500" />
        </div>
      </Layer>
      <Layer depth={1.2} className="absolute bottom-[2%] left-[2%]">
        <Chip icon={Type} label="Edit content without code" tone="text-sky-500" delay={0.8} />
      </Layer>
    </>
  );
}
