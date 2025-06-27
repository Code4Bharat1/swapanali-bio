'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Me', href: '/about' },
    { name: 'Media', href: '/media' },
    { name: 'Testimonials', href: '/testimonial' },
  ];

  return (
    <header className="bg-white shadow-2xs fixed top-0 left-0 right-0 z-50 h-[77px] w-full">
      <div className="max-w-[1728px] mx-auto h-full flex items-center justify-between px-12 lg:px-20">
        
        {/* Logo */}
        <div className="flex-shrink-0 flex items-center h-full relative top-[3px]">
          <img 
            src="/logo1.png" 
            alt="Logo" 
            className="object-contain h-[90px] w-[124px]" 
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex gap-8 lg:gap-10 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-Inter text-[10px] lg:text-[20px] font-semibold uppercase transition duration-500 hover:text-blue-600 ${
                pathname === link.href ? 'text-[#046BD2]' : 'text-black'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Button */}
        <div>
          <Link href="/contact">
            <button className="bg-[#046BD2] w-[206px] text-white px-6 py-3 rounded-[15.95px] text-base lg:text-lg font-semibold hover:bg-blue-700 transition duration-300">
              GET IN TOUCH
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}
