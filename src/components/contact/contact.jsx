'use client';
import Image from 'next/image';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin />,
      title: 'Location',
      description: 'Seawoods, Navi Mumbai,\nMaharashtra - 400706',
      animation: { x: -100, opacity: 0 }, // from left
    },
    {
      icon: <Phone />,
      title: 'Contact',
      description: '+91 9820268079',
      animation: { y: -100, opacity: 0 }, // from top
    },
    {
      icon: <Mail />,
      title: 'Email',
      description: 'biologywithswapnali@gmail.com',
      animation: { x: 100, opacity: 0 }, // from right
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[400px] overflow-hidden flex items-center justify-center mt-[77px]">
        <Image
          src="/contact.png"
          alt="Background"
          fill
          className="object-cover z-0 filter brightness-60"
        />
        <div className="absolute inset-0 bg-opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-4xl md:text-[80px] font-bold text-center">
          Contact Us
        </h1>
      </div>

      {/* Contact Cards */}
      <section className="bg-sky-300 py-12 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-[20px] ml-3.5 shadow-2xs p-8 w-[280px] h-[290px] flex flex-col items-center text-center"
              initial={item.animation}
              whileInView={{ x: 0, y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              viewport={{ once: true, amount: 0.5 }}
            >
              {/* Icon Circle */}
              <div className="bg-blue-700 w-[60px] h-[60px] flex items-center justify-center rounded-full mb-4">
                {React.cloneElement(item.icon, { className: 'w-7 h-7 text-black' })}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-xl mb-4">{item.title}</h3>

              {/* Description */}
              <p className="text-bold text-[15px] leading-tight mt-2 whitespace-pre-line">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
