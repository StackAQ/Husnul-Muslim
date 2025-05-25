"use client"

import Link from "next/link"
import {homecate} from "../libs/data"

export default function Home() {
  return (
    <main className="w-full space-y-8">
      <div className="grid gap-3 text-cyan-950">
        <h1 className="text-xl text-wrap whitespace-break-spaces font-semibold">
          Assalamu Alaikum! Find authentic Duas for every moment in your daily
          life - Morning, evening, hardship and gratitude.
        </h1>
        <span className="italic">
          Collected from Qu'ran and Hadith. Simple, clear and easy to remember.
        </span>
      </div>

      <div className="grid gap-6">
        <div className="flex items-center justify-between">
          <h1 className="text-cyan-800 font-extrabold text-xl lg:text-2xl">
            CATEGORIES
          </h1>
          <Link href="/categories">
            <button className="flex items-center p-2 border-2 border-cyan-500 text-cyan-800 font-medium rounded-2xl">
              see all
            </button>
          </Link>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {homecate.map((cate) => (
            <Link href={cate.href}>
              <div className="shadow shadow-cyan-500 border border-cyan-500 rounded-2xl grid gap-2 p-3">
                <div className="text-cyan-600">{cate.icon}</div>
                <span className="text-cyan-700 texl-lg font-semibold">
                  {cate.name}
                </span>
                <span className="text-cyan-800">{cate.cap}</span>
              </div>
            </Link>
          ))}
        </div>
        <span className="text-cyan-500 font-medium">
          Looking for something specific?
          <Link className="underline" href={"/search"}>
            Try searching by keyword.
          </Link>
        </span>
      </div>

      <footer>
        Made with love by ▶
        <a
          className="text-base font-bold underline"
          href="https://aq-portfolio-rose.vercel.app/"
        >
          Abdulqudus
        </a>
        ◀ . All duas are from authentic sources.
      </footer>
    </main>
  );
}
