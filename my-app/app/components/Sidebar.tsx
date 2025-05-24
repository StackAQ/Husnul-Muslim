"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const links = [
  { href: "/", label: "Home" },
  { href: "/categories", label: "Categories" },
  { href: "/bookmarks", label: "Bookmarks" },
  { href: "/search", label: "Search" },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* mobile sidebar */}
      <div className="lg:hidden grid gap-4 bg-cyan-600 text-cyan-950 font-semibold px-6 py-4">
        <h1 className="text-lg font-bold">HUSNUL MUSLIM</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* sidebar for Desktop and slide-in for mobile */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-green-600 space-y-4 text-green-950 p-6 z-50 transition-transform",
          "transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <nav>
          <h1 className="text-lg">HUSNUL MUSLIM</h1>
          {links.map((link) => (
            <ul className="grid gap-4">
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={clsx(
                    "block hover:underline",
                    pathname === link.href ? "font-bold underline" : ""
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </aside>
    </>
  );
}
