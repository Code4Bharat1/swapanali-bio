'use client';
import Image from 'next/image';
import React from 'react';

export default function HeroSectionMobile() {
  return (
    <div className="relative w-full h-[250px] overflow-hidden md:hidden mt-[77px]">
      {/* Background Image */}
      <Image
        src="/media.png"
        alt="Background"
        fill
        className="object-cover brightness-50"
      />

      {/* Overlapping Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/mediatext.png"
          alt="Overlapping"
          className="w-[180px] h-[80px] object-contain"
        />
      </div>
    </div>
  );
}
