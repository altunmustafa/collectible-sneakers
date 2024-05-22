"use client";
import NavItem from "@/components/NavItem";
import navItems from "@/data/navItems";
import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex gap-4 max-md:flex-wrap">
        {navItems.map((item, index) => (
          <NavItem key={item.text} navItem={item} />
        ))}
      </nav>
      <Bars3Icon className="md:hidden w-6 h-6" onClick={() => setIsMenuOpen(!isMenuOpen)} />
    </>
  )
}

export default NavBar;