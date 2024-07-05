"use client";

import Link from "next/link";
import { NavLinks } from "./NavLinks";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const path = usePathname();

  return (
    <nav
      className={cn(
        "p-1 w-full flex justify-between items-center z-30 bg-gray-200/20 backdrop-blur-sm rounded-xl mb-8 h-14",
        {
          hidden: path === "/",
        }
      )}
    >
      <Link href={"/"}>
        <Logo />
      </Link>
      <ul className="flex items-center gap-4 px-3">
        {NavLinks.map((link) => (
          <li key={link.name}>
            <Link href={link.path}>
              <button className="flex gap-2 items-center relative">
                <span className="bg-gradient-to-tr from-white to-gray-200 p-1 rounded-xl lg:w-8 lg:h-8 flex items-center justify-center hover:shadow-md hover:shadow-yellow-600/70">
                  {link.icon}
                </span>

                <span className="hidden md:block font-bold text-white capitalize">
                  {link.name}
                </span>
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
