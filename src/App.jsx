import { useState } from "react";

export default function App() {
  const [flour, setFlour] = useState(500);
  const hydration = 70;
  const saltPercent = 2;

  const water = Math.round((flour * hydration) / 100);
  const salt = Math.round((flour * saltPercent) / 100);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Crumbly</h1>
        <p className="text-center text-sm text-stone-500">
          Simple sourdough calculator
        </p>

        <div>
          <label className="block text-sm font-medium mb-1">
            Flour (grams)
          </label>
          <input
            type="number"
            value={flour}
            onChange={(e) => setFlour(Number(e.target.value))}
            className="w-full rounded-md border border-stone-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-400"
          />
        </div>

        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Water ({hydration}%)</span>
            <span>{water} g</span>
          </div>
          <div className="flex justify-between">
            <span>Salt ({saltPercent}%)</span>
            <span>{salt} g</span>
          </div>
        </div>

        <div className="text-xs text-center text-ston
