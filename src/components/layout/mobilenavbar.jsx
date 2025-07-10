'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function NavbarMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Media', href: '/media' },
    { name: 'Testimonials', href: '/testimonial' },
  ];

  return (
    <header className="block md:hidden bg-[#2069DE] shadow fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-between items-center px-4 py-3">
        {/* Logo in white circle */}
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={96}
            height={96}
            className="object-contain"
          />
        </div>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={30} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Dropdown that comes from top-right with centered content */}
      {isOpen && (
        <motion.nav
          initial={{ y: -300, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -300, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="absolute top-full right-0 bg-[#77C9FF] border border-gray-300 shadow-xl w-64 p-4 space-y-3 z-50"
        >
          <div className="flex flex-col items-center"> {/* Centering container */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm font-semibold uppercase py-2 px-3 rounded hover:text-blue-600 transition w-full text-center ${
                  pathname === link.href ? '' : 'text-black'
                }`}
              >
                {link.name}
              </Link>
            ))}

            <Link href="/contact" onClick={() => setIsOpen(false)} className="w-full">
              <button className="w-full  text-black py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition duration-300">
                CONTACT US
              </button>
            </Link>
          </div>
        </motion.nav>
      )}
    </header>
  );
}