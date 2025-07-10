'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 pt-10 pb-6 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo and Socials */}
        <div className="flex flex-col items-start gap-4">
          <Image
            src="/logo1.png"
            alt="Logo"
            width={420}
            height={420}
            className="w-[280px] sm:w-[280px] h-auto"
          />
          <div className="flex space-x-4 text-3xl text-gray-700 ml-17">
            <a href="#"><FaYoutube className="text-red-600" /></a>
            <a href="#"><FaLinkedin className="text-blue-700" /></a>
            <a href="#"><FaFacebook className="text-blue-600" /></a>
            <a href="#"><FaInstagram className="text-pink-500" /></a>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Get In Touch</h3>

          {/* Animate only this email line */}
          <motion.p
            className="flex items-center gap-2 text-sm md:text-base"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <MdEmail className="text-lg" /> biologywithswapnali@gmail.com
          </motion.p>

          {/* Phone stays static */}
          <p className="flex items-center gap-2 text-sm md:text-base">
            <MdPhone className="text-lg" /> +91 9820268079
          </p>
        </div>

        {/* Get To Know */}
        <div className="flex flex-col gap-1 text-sm md:text-base">
          <h3 className="font-semibold text-lg mb-2">Get To Know</h3>
          <Link href="/" className="hover:underline">HOME</Link>
<Link href="/about" className="hover:underline">ABOUT ME</Link>
<Link href="/media" className="hover:underline">MEDIA</Link>
<Link href="/contact" className="hover:underline">GET IN TOUCH</Link>
<Link href="/testimonial" className="hover:underline">TESTIMONIALS</Link>

        </div>

        {/* Illustration */}
        <div className="max-w-[80%] sm:max-w-xs mx-auto md:mx-0">
          <Image
            src="/footer.png"
            alt="Illustration"
            width={280}
            height={180}
            className="w-full h-auto relative top-1"
          />
        </div>
      </div>

      {/* Bottom Line and Credit */}
      <div className="text-sm pt-6 w-full">
        <div className="border-t-[2px] border-gray-300 w-full max-w-7xl mx-auto" />
        <div className="text-center mt-4 px-2 text-xs md:text-sm">
          ©2025 | Developed By{' '}
          <a href="https://code4bharat.org" className="text-blue-600 font-semibold hover:underline">
            Code4Bharat
          </a>{' '}
          | All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
