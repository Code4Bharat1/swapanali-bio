'use client';
import Image from 'next/image';
import React from 'react';

export default function HeroSection() {
  return (
    <div className="relative w-full h-[400px] overflow-hidden mt-[77px]">
      {/* Background Image */}
      <Image
        src="/media.png" // Replace with your image path
        alt="Background"
        fill
        
        className="object-cover z-0 filter brightness-50"
      />

      {/* Overlapping Text */}
     <div className="absolute inset-0 flex items-center justify-center z-10">
  <img
    src="/mediatext1.png" // 🔁 Replace with your image
    alt="Overlapping"
    className="absolute w-[250px] h-[120px] object-fit  z-0"
  />
</div>

    </div>
  );
}
