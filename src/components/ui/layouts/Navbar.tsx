"use client";

import Image from "next/image";
import Link from "next/link";

interface NavItemsData {
  title: string;
  href: string;
}

const navItemsData: NavItemsData[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Features",
    href: "/features",
  },
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "About us",
    href: "/about-us",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];
export default function Navbar() {
  return (
    <header className="flex items-center h-[84px] justify-around">
      <div className="flex items-center">
        <Image width={112} height={32} src={"/img/abstractly.png"} alt="logo" />
      </div>

      {/* navigation */}
      <nav>
        <ul className="flex gap-8 ">
          {navItemsData.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className="font-medium text-neutral-600 text-base hover:text-indigo-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        <Link
          href={"/learn-more"}
          className="py-2.5 px-4 bg-white text-neutral-900 rounded border-[0.5px] border-solid border-neutral-200 shadow-sm font-medium text-base"
        >
          Learn more
        </Link>
        <Link
          href={"/learn-more"}
          className="py-2.5 px-4 bg-indigo-700 text-white rounded border-[0.5px] border-solid border-neutral-200 shadow-sm font-medium text-base"
        >
          See pricing
        </Link>
      </div>
    </header>
  );
}
