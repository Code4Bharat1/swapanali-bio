'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home1Mobile() {
  return (
    <div className="block md:hidden bg-[#e8f3ff] p-4 space-y-6 text-gray-800">
      
      {/* Image */}
     <div className="w-full flex justify-center">
  <img
    src="/home3.png"
    alt="Profile"
    className="w-[300px] h-auto rounded-xl object-cover"
  />
</div>


      {/* Intro Text */}
      <p className="text-[16px]  leading-relaxed font-semibold pl-3">
        I'm <strong>Swapnali Patkar</strong>, a passionate teacher since 1994, currently teaching Biology & NEET at Mahesh Tutorials Lakshya. I'm also a Certified Numerologist, Tarot Reader, Reiki Grand Master, and Spiritual Healer.
      </p>

      {/* Education */}
      {/* Education */}
<div className="flex items-start gap-3 font-semibold mb-2 pl-4">
  <Image src="/homeabout1.png" alt="education" width={30} height={30} />
  <span className="text-[15px] leading-tight">
    <strong className="text-[#046BD2]">Education:</strong> M.Sc in Microbiology, B.Ed, DMLT
  </span>
</div>

{/* Experience */}
<div className="flex items-start gap-3 font-semibold mb-2 pl-4">
  <Image src="/homeabout2.png" alt="experience" width={30} height={30} />
  <span className="text-[15px] leading-tight">
    <strong className="text-[#046BD2]">Academic Experience:</strong> 31+ Years
  </span>
</div>


{/* Taught In */}
<div className="flex items-start gap-3 font-semibold mb-1 pl-4">
  <Image src="/homeabout3.png" alt="teach" width={30} height={30} />
  <span className="text-[15px] leading-tight">
    <strong className="text-[#046BD2]">Taught In:</strong> Ramchandras Institute, Brilliance Classes, Abhinandan Classes, Kutty Classes, Mayur Educare
  </span>
</div>

{/* Passion */}
<div className="flex items-start gap-3 font-semibold pl-4">
  <Image src="/homeabout4.png" alt="passion" width={30} height={30} />
  <span className="text-[15px] leading-tight">
    <strong className="text-[#046BD2]">Passion:</strong> Numerologist, Tarot Card Reader, Graphologist, Reiki Grand Master, Vastu Consultant, Spiritual Healer and Guide
  </span>
</div>
    </div>
  );
}
