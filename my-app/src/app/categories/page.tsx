"use client";

import { categories } from "@/src/libs/data";
import Link from "next/link"

export default function Categories() {
  return (
    <main className="space-y-8">
      <div className="grid gap-4">
        <h1 className="text-cyan-800 font-extrabold text-xl lg:text-2xl">
          CATEGORIES
        </h1>
        <p className="text-gray-700 font-medium">
          Explore Duas grouped by life's moments and needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cate) => (
          <Link href={cate.href}>
            <div className="shadow shadow-cyan-500 border border-cyan-500 rounded-2xl grid gap-2 p-3">
              <div className="text-cyan-600">{cate.icon}</div>
              <span className="text-cyan-700 texl-lg font-semibold">{cate.name}</span>
              <span className="text-cyan-800">{ cate.cap}</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
