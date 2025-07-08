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
    <div className="max-w-[1440px] mx-auto w-full">
      <header className="flex items-center h-[84px] justify-between lg:justify-around px-8 w-full">
        <div className="flex items-center">
          <Image
            width={112}
            height={32}
            src={"/img/abstractly.png"}
            alt="logo"
          />
        </div>

        {/* navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
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

        <div className="items-center gap-4 hidden lg:flex">
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

        <button className="cursor-pointer">
          <Image
            src={"/img/hamburger.png"}
            width={20}
            height={20}
            className="w-5 h-5"
            alt="Hamburger menu"
          />
        </button>
      </header>
    </div>
  );
}
