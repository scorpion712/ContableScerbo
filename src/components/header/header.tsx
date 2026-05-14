'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { NAV_ITEMS } from '@/lib/services';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#8acce8]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 text-xl font-semibold text-[#2e2e74] hover:text-[#2e2e74] transition-colors group"
          >
            {/* Local Logo Image - High Quality */}
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                alt="Estudio Scerbo Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="hidden lg:block text-sm font-normal text-[#2e2e74] leading-none">Estudio Contable</span>
              <span className="hidden lg:block font-bold text-[#2e2e74] leading-none">Paula Scerbo</span>
              <span className="lg:hidden font-semibold text-[#2e2e74]">Estudio Scerbo</span>
            </div>
          </Link>

          {/* Desktop Navigation with hover animation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onMouseEnter={() => setHoveredItem(item.href)}
                onMouseLeave={() => setHoveredItem(null)}
                className={cn(
                  'relative px-4 py-2 text-sm font-medium transition-all duration-300',
                  item.href === '#'
                    ? 'text-gray-400 cursor-not-allowed'
                    : 'text-[#2e2e74] hover:text-[#2e2e74]',
                  hoveredItem === item.href && item.href !== '#' && 'text-[#2e2e74]'
                )}
              >
                {item.label}
                {/* Animated underline on hover */}
                {item.href !== '#' && (
                  <span
                    className={cn(
                      'absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#2e2e74] transition-all duration-300',
                      hoveredItem === item.href ? 'w-full' : 'w-0'
                    )}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-[#2e2e74] hover:text-[#2e2e74] transition-colors"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'lg:hidden bg-white border-t border-[#8acce8]/20 overflow-hidden transition-all duration-300',
          isMenuOpen ? 'max-h-96' : 'max-h-0'
        )}
      >
        <nav className="px-4 py-4 space-y-2">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={cn(
                'block py-3 px-4 text-base font-medium rounded-lg transition-colors',
                item.href === '#'
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-[#2e2e74] hover:bg-[#8acce8]/10 hover:text-[#2e2e74]'
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}