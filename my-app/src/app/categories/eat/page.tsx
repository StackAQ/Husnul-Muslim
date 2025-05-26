"use client";

import { eatingduas } from "@/src/libs/data";

export default function DayDuas() {
  return (
    <main>
      <div className="grid gap-8">
        <h1 className="text-cyan-800 text-xl lg:text-2xl font-extrabold">
          DUAS RELATED TO EATING
        </h1>
        {eatingduas.map((dua) => (
          <div className="grid gap-4 border border-cyan-500 p-3 rounded-xl">
            <h1 className="text-cyan-500 text-xl font-bold">{dua.title}</h1>
            <div className="grid gap-1 text-xl  font-medium">
              <span className="text-cyan-600">Arabic</span>
              <span className="text-cyan-700">{dua.arabic}</span>
            </div>
            <div className="grid gap-1">
              <span className="text-cyan-600 text-xl font-medium">
                Transliteration
              </span>
              <span className="text-cyan-700 text-lg">
                {dua.transliteration}
              </span>
            </div>
            <div className="grid gap-1">
              <span className="text-cyan-600 text-xl font-medium">
                Translation
              </span>
              <span className="text-cyan-700 text-lg">{dua.translation}</span>
            </div>
          </div>
        ))}

        <footer className="text-cyan-800 text-lg">
          Made with love by ▶
          <a
            className="text-base font-bold underline"
            href="https://aq-portfolio-rose.vercel.app/"
          >
            Abdulqudus
          </a>
          ◀ . All duas are from authentic sources.
        </footer>
      </div>
    </main>
  );
}
