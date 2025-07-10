'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function PhotoGalleryMobile() {
  return (
    <div className="md:p-4 p-6 bg-white min-h-screen">
      {/* Heading */}
      <div className="flex justify-center mb-8 sm:mb-10">
        <h1 className="relative text-3xl sm:text-6xl font-bold text-black pb-2 text-center">
          College
          <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-24 sm:w-36 h-[3px] sm:h-[3.75px] bg-blue-500" />
        </h1>
      </div>

      {/* Grid 2x2: photo1, photo2, photo3, photo1 */}
      <motion.div
        className="grid grid-cols-2 gap-4 mb-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {['photo1.png', 'photo2.png', 'photo3.png', 'photo1.png'].map((src, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-lg shadow-md border-blue-300 p-1"
          >
            <Image
              src={`/${src}`}
              alt={`Photo ${index + 1}`}
              width={500}
              height={300}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        ))}
      </motion.div>


      {/* Subheading */}
      <div className="flex justify-center my-10">
        <h2 className="relative text-xl sm:text-4xl font-bold text-black text-center">
          Mrs. India International – 2nd Runner Up (2019, Dubai)
          <span className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-56 sm:w-[720px] h-[2px] sm:h-[2.5px] bg-blue-500" />
        </h2>
      </div>

      {/* Photo 4 & 5 side-by-side on ALL screens */}
      <motion.div
        className="grid grid-cols-2 gap-4 mb-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {['photo4.png', 'photo5.png'].map((src, index) => (
          <div key={index} className="w-full">
            <Image
              src={`/${src}`}
              alt={`Photo ${index + 4}`}
              width={600}
              height={270}
              className="w-full h-auto object-cover rounded"
            />
          </div>
        ))}
      </motion.div>
      {/* Grid Layout for Photos 6–10 */}
      {/* Grid Layout for Photos 6–10 */}
      <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-6xl mx-auto p-2 sm:p-4">
        {/* Column 1 - Photo 6 */}
        <motion.div
          className="w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/photo6.png"
            alt="Photo 6"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Column 2 - Photo 8 spans two rows */}
        <motion.div
          className="row-span-2 w-full"
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/photo8.png"
            alt="Photo 8"
            width={600}
            height={800}
            className="rounded-xl w-full h-full object-cover"
          />
        </motion.div>

        {/* Column 3 - Photo 9 */}
        <motion.div
          className="w-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/photo9.png"
            alt="Photo 9"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Column 1 - Photo 7 */}
        <motion.div
          className="w-full"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/photo7.png"
            alt="Photo 7"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Column 3 - Photo 10 */}
        <motion.div
          className="w-full"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/photo11.png"
            alt="Photo 11"
            width={600}
            height={400}
            className="rounded-xl w-full h-auto object-cover"
          />
        </motion.div>
      </div>

    </div>


  );
}
