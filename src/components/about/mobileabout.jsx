'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// ProfileCard Component (Mobile Responsive)
function ProfileCardMobile() {
  return (
    <div
      className="relative w-full py-10 px-4"
      style={{
        background: 'linear-gradient(180deg, #58AAFF 0%, #007DFF 100%)',
        borderLeft: '5px solid #FFEA00',
        borderRight: '5px solid #FFEA00',
        borderBottom: '5px solid #FFEA00',
      }}
    >
      <>
  <motion.div
  initial={{ y: -100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="w-[240px] h-[240px] max-w-sm mx-auto bg-white rounded-t-[40px] shadow-lg overflow-hidden"
>
  <img
    src="/about1.png"
    alt="Swapnali Patkar"
    className="w-full h-full object-cover"
  />
</motion.div>


  <h2 className="text-center text-2xl font-semibold mt-2 text-black">
    Swapnali Patkar
  </h2>
</>

      <motion.p
  initial={{ y: 100, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="text-white mt-4 text-base leading-relaxed text-start mx-auto max-w-2xl px-2"
>
  I am a passionate teacher by heart and profession, shaping young minds since 1994. With a Master's degree in Microbiology, along with B.Ed and DMLT qualifications, I began my journey as a tuition teacher. Over the years, I have evolved into a highly experienced Biology teacher and NEET trainer.
</motion.p>
    </div>
  );
}

// About Section Mobile
export default function AboutMobile() {
  return (
    <>
      {/* Top Section */}
      <section className="relative w-full h-[300px] flex items-center justify-center text-white">
        <Image
          src="/about.png"
          alt="About Background"
          fill
          className="object-cover z-0 brightness-50"
        />
        <h1 className="relative z-10 text-3xl font-bold">ABOUT ME</h1>
      </section>

      {/* Profile Card */}
      <ProfileCardMobile />

      {/* Bottom Section */}
     {/* Bottom Section */}
<div
  className="w-full py-10 px-4"
  style={{
    background: 'linear-gradient(72.09deg, #A8D3FF -13.21%, #4EA5FF 84.04%)',
  }}
>
  {/* IMAGE FIRST */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="mb-8"
  >
    <Image
      src="/about2.png"
      alt="Profile"
      width={300}
      height={300}
      className="rounded-xl mx-auto shadow-lg"
    />
  </motion.div>

  {/* TEXT AFTER IMAGE */}
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-black text-sm space-y-4"
  >
    <p className="text-base md:text-lg font-medium">
      Currently teaching at <strong className="font-semibold">Mahesh Tutorials Lakshya</strong>, while also offering private tuitions (Online & Offline) for <strong className="font-semibold">NEET aspirants</strong> and <strong className="font-semibold">State Board students</strong>.
      Since 1998, I have had the privilege of teaching at some of Mumbai’s most reputed coaching classes including:
    </p>
    <ul className="list-disc list-inside text-base md:text-lg font-bold space-y-1 pl-2">
      <li>Ramchandars Institute</li>
      <li>Brilliance Classes</li>
      <li>Abhinandan Classes</li>
      <li>Kutty Classes</li>
      <li>Mayur Educare</li>
    </ul>
  </motion.div>
</div>
    </>
  );
}
