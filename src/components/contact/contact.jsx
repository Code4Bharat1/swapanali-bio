'use client';
import Image from 'next/image';
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react'; // Don't forget to import icons

export default function Contact() {
  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6 text-white" />,
      title: 'Location',
      description: 'Seawoods, Navi Mumbai,\nMaharashtra - 400706',
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      title: 'Contact',
      description: '+91 9820268079',
    },
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      title: 'Email',
      description: 'biologywithswapnali@gmail.com',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full h-[550px] overflow-hidden flex items-center justify-center">
        <Image
          src="/contact.png"
          alt="Background"
          fill
          className="object-cover z-0 filter brightness-60"
        />
        <div className="absolute inset-0  bg-opacity-50 z-10" />
        <h1 className="relative z-20 text-white text-4xl md:text-[80px] font-bold text-center">
          Contact Us
        </h1>
      </div>

      {/* Contact Cards */}
<section className="bg-sky-300 py-12 px-6">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
    {contactInfo.map((item, index) => (
      <div
        key={index}
        className="bg-white rounded-[20px] ml-3.5 shadow-2xs p-8 w-[280px] h-[290px] flex flex-col items-center text-center"
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
      </div>
    ))}
  </div>
</section>

    </>
  );
}
