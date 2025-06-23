'use client';
import Image from 'next/image';
import Link from 'next/link';
import { FaYoutube, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        
        {/* Logo and Socials */}
        <div className="flex flex-col items-start gap-4">
          <Image src="/logo1.png" alt="Logo" width={220} height={220} />
          <div className="flex space-x-4 t-5 text-xl text-gray-700">
            <a href="#"><FaYoutube className="text-red-600" /></a>
            <a href="#"><FaLinkedin className="text-blue-700" /></a>
            <a href="#"><FaFacebook className="text-blue-600" /></a>
            <a href="#"><FaInstagram className="text-pink-500" /></a>
          </div>
        </div>

        {/* Get In Touch */}
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-lg mb-2">Get In Touch</h3>
          <p className="flex items-center gap-2 text-sm">
            <MdEmail className="text-lg" /> biologywithswapnali@gmail.com
          </p>
          <p className="flex items-center gap-2 text-sm">
            <MdPhone className="text-lg" /> +91 9820268079
          </p>
        </div>

        {/* Get To Know */}
        <div className="flex flex-col gap-1 text-sm">
          <h3 className="font-semibold text-lg mb-2">Get To Know</h3>
          <Link href="#" className="hover:underline">HOME</Link>
          <Link href="#" className="hover:underline">ABOUT ME</Link>
          <Link href="#" className="hover:underline">MEDIA</Link>
          <Link href="#" className="hover:underline">GET IN TOUCH</Link>
          <Link href="#" className="hover:underline">TESTIMONIALS</Link>
        </div>

        {/* Illustration */}
        <div>
          <Image src="/footer.png" alt="Illustration"  width={280} height={180}     className="relative top-1"/>
        </div>
      </div>

     
     <div className="text-sm pt-4">
  <div className="border-t-[2px] border-gray-300 w-[1250px] ml-[10px]"></div>
  <div className="text-center mt-4">
    ©2025 | Developed By 
    <a href="https://code4bharat.org" className="text-blue-600 font-semibold hover:underline">
      Code4Bharat
    </a> 
    | All Rights Reserved.
  </div>
</div>

    </footer>
  );
}
