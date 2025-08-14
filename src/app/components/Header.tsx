'use client';
import { useState } from 'react';

import NavLink from './NavLink';
import Logo from './Logo';
import { ModeToggle } from './ModeToggle';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/works', label: 'Works' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative">
      <div className="container flex justify-between items-center py-6">
        {/* Logo */}
        <Logo />
        {/* Desktop navigation */}
        <div className="flex gap-2 items-center">
          <nav className="hidden lg:block">
            <ul className="flex gap-8 items-center">
              {navItems.map((item) => (
                <li key={item.href}>
                  <NavLink href={item.href}>{item.label}</NavLink>
                </li>
              ))}
              <ModeToggle />
            </ul>
          </nav>

          {/* Hamburger button */}
          <div className="lg:hidden">
            <ModeToggle />
          </div>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex relative z-50 justify-center items-center w-8 h-8 lg:hidden"
            aria-label="Toggle menu">
            <div className="flex relative flex-col justify-between w-5 h-4">
              <span
                className={`absolute w-5 h-[2px] bg-zinc-900 rounded-full transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'top-0'
                }`}
              />
              <span
                className={`absolute w-5 h-[2px] bg-zinc-900 rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0' : 'top-1/2 -translate-y-1/2'
                }`}
              />
              <span
                className={`absolute w-5 h-[2px] bg-zinc-900 rounded-full transition-all duration-300 ease-in-out origin-center ${
                  isMenuOpen
                    ? 'top-1/2 -rotate-45 -translate-y-1/2'
                    : 'bottom-0'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-white z-40 lg:hidden transition-all duration-300 ${
          isMenuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}>
        <nav className="flex flex-col justify-center items-center -mt-12 space-y-12 h-full">
          <ul className="flex flex-col gap-8 items-center text-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <NavLink
                  href={item.href}
                  className="heading-3"
                  onClick={() => setIsMenuOpen(false)}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
