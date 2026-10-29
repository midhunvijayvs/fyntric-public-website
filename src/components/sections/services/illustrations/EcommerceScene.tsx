import { CreditCard, ShoppingCart, Truck } from "lucide-react";
import { Layer } from "./Stage";
import { Chip, ImageBlock, Line, Panel, delay } from "./parts";

const steps = [
  { icon: ShoppingCart, label: "Cart" },
  { icon: CreditCard, label: "Payment" },
  { icon: Truck, label: "Shipped" },
];

/** A product page and checkout, with cart, payment and shipping steps lighting up in turn. */
export function EcommerceScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute top-[8%] left-[6%] w-[52%]">
        <Panel className="p-3">
          <ImageBlock className="aspect-square" gradient="from-orange-300 via-pink-400 to-rose-500" />
          <Line className="mt-3 h-2.5 w-[75%] bg-foreground/80" />
          <Line className="mt-2 w-[50%]" />
          <div className="mt-3 flex items-center justify-between">
            <span className="font-display text-sm font-semibold text-foreground">₹2,499</span>
            <span className="animate-press rounded-lg bg-linear-to-r from-orange-500 to-pink-500 px-2.5 py-1 text-[9px] font-semibold text-white">
              Buy now
            </span>
          </div>
        </Panel>
      </Layer>
      <Layer depth={1.2} className="absolute top-[22%] right-[4%] w-[40%]">
        <Panel className="space-y-2 p-3">
          <div className="text-[10px] font-semibold text-foreground">Order #2041</div>
          {steps.map((step, index) => (
            <div key={step.label} className="relative flex items-center gap-2 px-2 py-1.5 text-[10px] text-body">
              <span
                className="absolute inset-0 animate-breathe rounded-lg bg-orange-500/15"
                style={{ ...delay(index), animationDuration: "3s" }}
              />
              <step.icon className="relative size-3.5 text-orange-500" />
              <span className="relative">{step.label}</span>
            </div>
          ))}
        </Panel>
      </Layer>
      <Layer depth={1.8} className="absolute right-[6%] bottom-[4%]">
        <Chip icon={CreditCard} label="UPI · Cards · Wallets" tone="text-pink-500" />
      </Layer>
    </>
  );
}
