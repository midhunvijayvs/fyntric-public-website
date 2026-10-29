import { Bot, Sparkles } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, Panel, delay } from "./parts";

/** An AI assistant chatting with a customer, typing, then qualifying the lead. */
export function AiScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute top-[8%] left-[10%] w-[66%]">
        <Panel className="space-y-2.5 p-4">
          <div className="flex items-center gap-2 border-b border-line pb-2.5">
            <div className="grid size-6 place-items-center rounded-full bg-linear-to-br from-accent-violet to-fuchsia-500">
              <Bot className="size-3.5 text-white" />
            </div>
            <div>
              <div className="text-[10px] font-semibold text-foreground">Fyntric AI Assistant</div>
              <div className="text-[8px] text-emerald-500">Online</div>
            </div>
          </div>
          <div className="ml-auto w-fit max-w-[80%] rounded-2xl rounded-br-sm bg-brand-500 px-3 py-2 text-[9px] text-white">
            Do you build CRM for real estate?
          </div>
          <div className="w-fit max-w-[85%] rounded-2xl rounded-bl-sm bg-tint-strong px-3 py-2 text-[9px] text-body">
            Yes! We can track leads, site visits and follow-ups. What’s your team size?
          </div>
          <div className="ml-auto w-fit rounded-2xl rounded-br-sm bg-brand-500 px-3 py-2 text-[9px] text-white">
            About 25 agents
          </div>
          <div className="flex w-fit gap-1 rounded-2xl rounded-bl-sm bg-tint-strong px-3 py-2.5">
            {[0, 1, 2].map((dot) => (
              <span key={dot} className="size-1.5 animate-typing rounded-full bg-muted" style={delay(dot * 0.15)} />
            ))}
          </div>
        </Panel>
      </Layer>
      <Layer depth={1.6} className="absolute right-[2%] bottom-[14%]">
        <div className="animate-pop">
          <Chip icon={Sparkles} label="Lead qualified · sent to CRM" tone="text-fuchsia-500" />
        </div>
      </Layer>
      <Layer depth={2} className="absolute top-[4%] right-[6%]">
        <div className="grid size-14 animate-wiggle place-items-center rounded-2xl bg-surface shadow-2xl shadow-ink-950/30">
          <Sparkles className="size-7 text-accent-violet" />
        </div>
      </Layer>
    </>
  );
}
