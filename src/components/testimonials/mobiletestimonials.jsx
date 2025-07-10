'use client';
import Image from 'next/image';
import React from 'react';

export default function Testimonials() {
  return (
    <div className="relative w-full h-[300px] md:h-[550px] overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="/test.png" // Replace with your image path
        alt="Background"
        fill
        className="object-cover object-center z-0 filter brightness-60"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg- bg-opacity-50 z-10" />

      {/* Centered Text */}
      <h1 className="relative z-20 text-white text-3xl md:text-[90px] font-bold text-center">
        TESTIMONIALS
      </h1>
    </div>
  );
}
