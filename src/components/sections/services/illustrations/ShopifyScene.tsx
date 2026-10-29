import { ShoppingBag, TrendingUp } from "lucide-react";
import { Layer } from "./Stage";
import { BrowserWindow, Chip, ImageBlock, Line, delay } from "./parts";

const products = ["from-emerald-300 to-teal-500", "from-amber-200 to-orange-400", "from-sky-300 to-indigo-500"];

/** A Shopify storefront whose cart badge pulses as products get added. */
export function ShopifyScene() {
  return (
    <>
      <Layer depth={0.6} className="absolute inset-x-[6%] top-[10%] bottom-[12%]">
        <BrowserWindow url="store.yourbrand.com" className="h-full">
          <div className="flex items-center justify-between">
            <div className="h-2 w-14 rounded-full bg-emerald-500" />
            <div className="relative">
              <ShoppingBag className="size-4 text-foreground" />
              <span className="absolute -top-1.5 -right-2 grid size-3.5 animate-pulse-soft place-items-center rounded-full bg-emerald-500 text-[7px] font-bold text-white">
                3
              </span>
            </div>
          </div>
          <ImageBlock className="mt-4 h-[22%]" gradient="from-emerald-400 via-teal-400 to-cyan-400" />
          <div className="mt-4 grid grid-cols-3 gap-3">
            {products.map((gradient, index) => (
              <div key={gradient} className="animate-bob rounded-xl border border-line p-2" style={delay(index * 0.4)}>
                <ImageBlock className="aspect-square" gradient={gradient} />
                <Line className="mt-2 w-[80%]" />
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] font-semibold text-foreground">₹{(index + 1) * 999}</span>
                  <span className="rounded-md bg-emerald-500 px-1.5 py-0.5 text-[7px] font-semibold text-white">
                    Add
                  </span>
                </div>
              </div>
            ))}
          </div>
        </BrowserWindow>
      </Layer>
      <Layer depth={1.6} className="absolute top-[0%] left-[0%]">
        <Chip icon={TrendingUp} label="Conversion +32%" tone="text-emerald-500" />
      </Layer>
      <Layer depth={1.2} className="absolute right-[0%] bottom-[2%]">
        <Chip icon={ShoppingBag} label="Custom Shopify theme" tone="text-teal-500" delay={1.4} />
      </Layer>
    </>
  );
}
