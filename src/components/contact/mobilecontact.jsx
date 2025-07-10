'use client';
import Image from 'next/image';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactMobile() {
  const contactInfo = [
    {
      icon: <MapPin />,
      title: 'Location',
      description: 'Seawoods, Navi Mumbai,\nMaharashtra - 400706',
      animation: { x: -100, opacity: 0 },
    },
    {
      icon: <Phone />,
      title: 'Contact',
      description: '+91 9820268079',
      animation: { y: -100, opacity: 0 },
    },
    {
      icon: <Mail />,
      title: 'Email',
      description: 'biologywithswapnali@gmail.com',
      animation: { x: 100, opacity: 0 },
    },
  ];

  return (
    <>
      {/* Hero Section - Mobile Optimized */}
      <div className="relative w-full h-[250px] sm:h-[400px] overflow-hidden flex items-center justify-center mt-[77px]">
        <Image
          src="/contact.png"
          alt="Background"
          fill
          className="object-cover z-0 filter brightness-60"
          priority
        />
        <div className="absolute inset-0 bg-opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-3xl sm:text-5xl font-bold text-center px-4">
          Contact Us
        </h1>
      </div>

      {/* Contact Cards - Mobile Optimized */}
      <section className="bg-white py-8 px-20">
        <div className="max-w-md mx-auto grid grid-cols-1 gap-6 sm:gap-8">
          {contactInfo.map((item, index) => (
            <motion.div
  key={index}
  className="bg-white rounded-2xl shadow-[1px_1px_10px_rgba(0,0,0,0.15)] p-6 w-[220px] max-w-xs mx-auto sm:w-full sm:max-w-none flex flex-col items-center text-center min-h-[220px]"
  initial={{ opacity: 0, y: 50 }} // 👈 Start 50px lower and invisible
  whileInView={{ opacity: 1, y: 0 }} // 👈 Animate to visible and in place
  transition={{ duration: 0.6, delay: 0.1 * index }}
  viewport={{ once: true, amount: 0.3 }} // 👈 Trigger when 30% in view
>


              {/* Icon Circle - Smaller on mobile */}
              <div className="bg-blue-700 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full mb-5 sm:mb-4">
                {React.cloneElement(item.icon, { className: 'w-5 h-5 sm:w-6 sm:h-6 text-black' })}
              </div>

              {/* Title - Smaller font on mobile */}
              <h3 className="font-semibold text-lg sm:text-xl mb-5 sm:mb-4">{item.title}</h3>

              {/* Description - Smaller font and better spacing */}
              <p className="text-sm sm:text-[15px] leading-snug sm:leading-tight whitespace-pre-line mb-5">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}