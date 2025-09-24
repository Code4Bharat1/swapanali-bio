'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';


// ProfileCard Component
function ProfileCard() {
  return (
    <div
      className="relative w-full h-auto flex items-center justify-center gap-12 px-12 py-12"
      style={{
        background: 'linear-gradient(180deg, #58AAFF 0%, #007DFF 100%)',
        border: '5px solid #FFEA00',
      }}
    >
      {/* Left Card */}
      <motion.div
        initial={{ x: -150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative w-[400px] h-[370px] bg-white"
        style={{
          borderTopLeftRadius: '80px',
          borderTopRightRadius: '80px',
          boxShadow: '9px -8px 4px 0px #00000040, 0px 4px 4px 0px #00000040',
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ x: -150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="h-[370px] w-full flex justify-center items-start"
        >
          <img
            src="/about1.png"
            alt="Profile"
            style={{
              width: '290px',
              height: '370px',
              objectFit: 'fill',
              marginTop: '-60px',
            }}
          />
        </motion.div>

        {/* Name */}
        <h2 className="absolute bottom-4 left-1/2 -translate-x-1/2 text-black font-semibold text-2xl text-center">
          Swapnali Patkar
        </h2>
      </motion.div>

      {/* Right Text */}
      <motion.p
        initial={{ x: 150, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="text-black max-w-3xl text-3xl leading-relaxed"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        I am a passionate teacher by heart and profession, shaping young minds
        since 1994. With a Master's degree in Microbiology, along with B.Ed and
        DMLT qualifications, I began my journey as a tuition teacher, guiding
        school students with dedication and care. Over the years, I have evolved
        into a highly experienced Biology teacher and NEET trainer.
      </motion.p>
    </div>
  );
}

// About Section
export default function About() {
  return (
    <>
      {/* Top Section */}
      <section className="relative w-full h-[400px] flex items-center justify-center text-white overflow-hidden mt-[77px]">
        <Image
          src="/about.png"
          alt="About Me Background"
          fill
          className="object-cover z-0 brightness-50"
        />
        <div className="absolute inset-0 bg-opacity-50 z-10"></div>
        <h1 className="relative z-20 text-4xl md:text-6xl font-bold">ABOUT ME</h1>
      </section>

      {/* Profile Card */}
      <ProfileCard />

      {/* Bottom Section */}
      <div
        className="w-full h-[543px] border-[10px] border-white flex items-center px-12"
        style={{
          background: 'linear-gradient(72.09deg, #A8D3FF -13.21%, #4EA5FF 84.04%)',
        }}
      >
       {/* Left - Text with animation */}
<motion.div
  initial={{ x: -150, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="w-1/2 text-[23px] text-black pr-8"
>
  <p className="mb-4">
    Currently teaching at <strong>Mahesh Tutorials Lakshya</strong>, while also offering private tuitions (online & offline) for{' '}
    <strong>NEET aspirants</strong> and <strong>State Board students</strong>.
  </p>
  <p className="mb-4">
    Since 1998, I have had the privilege of teaching at some of Mumbai’s most reputed coaching classes including:
  </p>
  <ul className="list-disc list-inside space-y-2 font-bold">
  <li>Ramchandars Institute</li>
  <li>Brilliance Classes</li>
  <li>Abhinandan Classes</li>
  <li>Kutty Classes</li>
  <li>Mayur Educare</li>
</ul>

</motion.div>

        {/* Right - Image with animation */}
<motion.div
  initial={{ x: 150, opacity: 0 }}
  whileInView={{ x: 0, opacity: 1 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  viewport={{ once: true }}
  className="w-1/2 flex justify-center"
>
  <Image
    src="/about2.png"
    alt="Profile"
    width={1200}
    height={1500}
    className="rounded-xl shadow-lg object-cover"
  />
</motion.div>

      </div>
    </>
  );
}
