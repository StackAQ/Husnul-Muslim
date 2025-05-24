"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Menu, X, Home, Grid, Bookmark, Search, Code } from "lucide-react";

const links = [
  { href: "/", label: "Home", icon: <Home /> },
  { href: "/categories", label: "Categories", icon: <Grid /> },
  { href: "/bookmarks", label: "Bookmarks", icon: <Bookmark /> },
  { href: "/search", label: "Search", icon: <Search /> },
];

export default function Sidebar() {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* mobile sidebar */}
      <div className="lg:hidden grid gap-4 bg-cyan-500 text-white font-semibold px-6 py-4">
        <h1 className="text-lg font-bold">HUSNUL MUSLIM</h1>
        <button onClick={toggleSidebar}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* sidebar for Desktop and slide-in for mobile */}
      <aside
        className={clsx(
          "fixed top-0 left-0 h-full w-64 bg-cyan-500 space-y-4 text-white p-6 z-50 transition-transform",
          "transform lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        <nav className="space-y-10">
          <h1 className="text-lg lg:text-xl font-semibold">HUSNUL MUSLIM</h1>
          <ul className="grid gap-4">
            {links.map((link) => (
              <li className="flex items-center gap-3" key={link.href}>
                {link.icon}
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
            ))}
          </ul>

          <div className="flex items-center gap-2 w-full">
            <Code size={25} />
            <span className="italic uppercase text-sm w-full">
              designed and developed by{" "}
              <a
                className="text-base font-bold underline"
                href="https://aq-portfolio-rose.vercel.app/"
              >
                Abdulqudus
              </a>
            </span>
          </div>
        </nav>
      </aside>
    </>
  );
}
