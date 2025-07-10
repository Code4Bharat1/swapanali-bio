'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function FooterMobile() {
  return (
    <footer className="bg-white border-t border-gray-300 px-4 py-6 text-sm text-gray-800">
      {/* Main Column Layout */}
      <div className="flex flex-col items-center text-center gap-6">

  {/* Logo - Top */}
  <div className="flex justify-center">
    <Image
      src="/logo1.png"
      alt="Logo"
      width={80}
      height={80}
      className="w-auto h-auto"
    />
  </div>

  {/* Get To Know - Middle */}
  <div className="flex flex-col items-center">
    <h3 className="font-semibold text-black mb-2">Get To Know</h3>
    <ul className="space-y-1">
      <li><Link href="#">HOME</Link></li>
      <li><Link href="#">ABOUT ME</Link></li>
      <li><Link href="#">MEDIA</Link></li>
      <li><Link href="#">GET IN TOUCH</Link></li>
      <li><Link href="#">TESTIMONIALS</Link></li>
    </ul>
  </div>

  {/* Get In Touch - Bottom */}
  <div className="flex flex-col items-center space-y-2">
    <h3 className="font-semibold text-black mb-2">Get In Touch</h3>
    <p className="flex items-center gap-2">
      <MdEmail className="text-lg" />
      <span>biologywithswapnali@gmail.com</span>
    </p>
    <p className="flex items-center gap-2">
      <MdPhone className="text-lg" />
      <span>+91 9820268079</span>
    </p>

    {/* Social Icons */}
    <div className="flex space-x-4 text-xl pt-1">
      <a href="#"><FaYoutube className="text-red-600" /></a>
      <a href="#"><FaLinkedin className="text-blue-700" /></a>
      <a href="#"><FaFacebook className="text-blue-600" /></a>
      <a href="#"><FaInstagram className="text-pink-500" /></a>
    </div>
  </div>

</div>


      {/* Footer Credits */}
      <div className="text-xs text-gray-600 pt-4 border-t border-gray-300 mt-6 text-center">
        ©2025 | Developed By{' '}
        <a href="https://code4bharat.org" className="text-blue-600 font-semibold hover:underline">
          Code4Bharat
        </a>{' '}
        | All Rights Reserved.
      </div>
    </footer>
  );
}
