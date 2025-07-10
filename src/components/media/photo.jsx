'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhotoGallery() {
  return (
    <div className="p-8 bg-white min-h-screen">
      {/* Top Heading */}
      <div className="flex justify-center mb-10">
        <h1 className="relative text-6xl font-bold text-black pb-2">
  College
  <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-34 h-[3.75px] bg-blue-500"></span>
</h1>

      </div>

      {/* Row 1: 3 Images */}
      <motion.div
        className="flex gap-6 mb-8 flex-wrap justify-between"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[1, 2, 3].map((num) => (
          <div key={num} className="flex-1 min-w-[30%] max-w-full">
            <Image
              src={`/photo${num}.png`}
              alt={`Photo ${num}`}
              width={500}
              height={300}
              className="w-full h-auto object-cover block"
            />
          </div>
        ))}
      </motion.div>

      {/* Row 2: 2 Images */}
      <motion.div
        className="flex gap-6 flex-wrap justify-start"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {[4, 5].map((num) => (
          <div
            key={num}
            className={`flex-1 min-w-[30%] gap-6 max-w-full ${num === 5 ? 'ml-auto' : 'ml-7'}`}
          >
            <Image
              src={`/photo${num}.png`}
              alt={`Photo ${num}`}
              width={600}
              height={270}
              className="object-cover block rounded"
            />
          </div>
        ))}
      </motion.div>

      {/* Section Title */}
      <div className="flex justify-center mb-10">
        <h1 className="relative text-4xl font-bold text-black pt-7">
          Mrs. India International – 2nd Runner Up (2019, Dubai)
          <span className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 w-[720px] h-[2.5px] bg-blue-500"></span>
        </h1>
      </div>

      {/* Grid with custom animated images */}
      <div className="grid grid-cols-3 grid-rows-2 auto-rows-fr gap-4 max-w-5xl mx-auto p-4">
        {/* Top Left (photo6) - from left */}
        <motion.img
          src="/photo6.png"
          alt="Photo 6"
          className="rounded-xl w-full h-full object-cover"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Center Large Image (photo8) - from bottom */}
        <motion.div
          className="row-span-2 flex justify-center items-center"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src="/photo8.png"
            alt="Center"
            className="rounded-xl object-cover w-full h-full"
          />
        </motion.div>

        {/* Top Right (photo9) - from right */}
        <motion.img
          src="/photo9.png"
          alt="Photo 9"
          className="rounded-xl w-full h-full object-cover"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Bottom Left (photo7) - from right */}
        <motion.img
          src="/photo7.png"
          alt="Photo 7"
          className="rounded-xl w-full h-full object-cover"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        />

        {/* Bottom Right (photo11) - from left */}
        <motion.img
          src="/photo11.png"
          alt="Photo 11"
          className="rounded-xl w-full h-full object-cover"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        />
      </div>
    </div>
  );
}
