"use client";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_ITEMS = ["home", "about", "contact", "projects"];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex-center container sticky top-10 mx-auto h-[80px] px-4 max-md:top-0 max-md:justify-between">
      <Link
        href="#home"
        className="focus-within:gradient-text focus:gradient-text inline-block text-3xl font-bold max-md:text-2xl md:hidden"
      >
        Xenos
      </Link>
      <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
        <Menu size={30} />
      </button>
      <div
        className={`gradient-background relative space-x-10 rounded-full bg-black px-8 py-4 duration-300 max-md:fixed max-md:left-0 max-md:top-0 max-md:h-full max-md:w-3/4 max-md:space-x-0 max-md:space-y-16 max-md:rounded-none ${isOpen || "max-md:-translate-x-full max-md:opacity-0"}`}
      >
        {NAV_ITEMS.map((item) => (
          <Link
            href={`#${item}`}
            key={item}
            className="focus-within:gradient-text focus:gradient-text inline-block capitalize duration-300 focus-within:scale-110 focus-within:outline-none hover:scale-110 max-md:block max-md:text-3xl max-md:font-semibold"
          >
            {item}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Navbar;
