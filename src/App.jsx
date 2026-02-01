import { useMemo, useState } from "react";

export default function App() {
  const [flour, setFlour] = useState(500);
  const [hydration, setHydration] = useState(70);
  const [saltPercent, setSaltPercent] = useState(2);

  const { water, salt, totalDough } = useMemo(() => {
    const w = Math.round((flour * hydration) / 100);
    const s = Math.round((flour * saltPercent) / 100);
    return { water: w, salt: s, totalDough: flour + w + s };
  }, [flour, hydration, saltPercent]);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
        <header className="space-y-1">
          <h1 className="text-2xl font-bold text-center">Crumbly</h1>
          <p className="text-center text-sm text-stone-500">
            Simple sourdough calculator
          </p>
        </header>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Flour (grams)
            </label>
            <input
              type="number"
              min="0"
              value={flour}
              onChange={(e) => setFlour(Number(e.target.value || 0))}
              className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Hydration (%)
            </label>
            <input
              type="number"
              min="0"
              value={hydration}
              onChange={(e) => setHydration(Number(e.target.value || 0))}
              className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Salt (% of flour)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={saltPercent}
              onChange={(e) => setSaltPercent(Number(e.target.value || 0))}
              className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />
          </div>
        </div>

        <div className="rounded-lg border border-stone-200 bg-stone-50 p-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Water ({hydration}%)</span>
            <span className="font-semibold">{water} g</span>
          </div>
          <div className="flex justify-between">
            <span>Salt ({saltPercent}%)</span>
            <span className="font-semibold">{salt} g</span>
          </div>
          <div className="flex justify-between border-t border-stone-200 pt-2">
            <span>Total dough</span>
            <span className="font-semibold">{totalDough} g</span>
          </div>
        </div>

        <p className="text-xs text-center text-stone-500">
          Tip: Keep hydration between 60 and 80 for most doughs.
        </p>
      </div>
    </div>
  );
}
