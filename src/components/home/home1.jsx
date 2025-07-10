'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

export default function Home1() {
  return (
    <div className="bg-[#e8f3ff] flex flex-wrap justify-start p-6 border-b border-[#00F6FFE5]">
      {/* Left Section - Image */}
      <div className="w-full md:w-[390px] ml-0 md:ml-9 self-start">
        <img
          src="/home3.png"
          alt="Profile"
          className="rounded-xl object-cover mt-4 w-full h-auto"
        />
      </div>

      {/* Right Section - Main Text + Info */}
      <div className="flex-1 mt-8 md:mt-7 ml-0 md:ml-7 space-y-6 text-gray-800">
        <p className="font-semibold text-[17px] md:text-[36px] leading-[110%] tracking-tight">
          I'm Swapnali Patkar, a Passionate Teacher since 1994, currently teaching Biology & NEET at Mahesh Tutorials Lakshya. Alongside teaching, I'm a Certified Numerologist, Tarot Reader, Reiki Grand Master, and Spiritual Healer.
        </p>

        <div className="space-y-4">
          {/* Education */}
          <div className="text-[20px] font-medium font-sans flex items-start gap-3">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image src="/homeabout1.png" alt="education" width={40} height={40} />
            </motion.div>
            <span>
              <strong>Education :</strong> M.Sc in Microbiology, B.Ed, DMLT
            </span>
          </div>

          {/* Academic Experience */}
          <div className="text-[20px] font-medium font-sans flex items-start gap-3">
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Image src="/homeabout2.png" alt="experience" width={40} height={40} />
            </motion.div>
            <span>
              <strong>Academic Experience :</strong> 31+ Years
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-6 space-y-4 ml-19">
        {/* Taught In */}
        <div className="text-[20px] font-medium font-sans flex items-start gap-3">
          <Image src="/homeabout3.png" alt="teach" width={40} height={40} />
          <span>
            <strong>Taught In :</strong> Ramchandras institute, Brilliance classes, Abhinandan classes, Kutty classes, Mayur Educare as Biology Teacher and NEET trainer
          </span>
        </div>

        {/* Passion */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[20px] font-medium font-sans flex items-start gap-3"
        >
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image src="/homeabout4.png" alt="passion" width={40} height={40} />
          </motion.div>
          <span>
            <strong>Passion :</strong> Numerologist, Tarot card reader, Graphologist, Reiki Grand Master, Vastu consultant, Spiritual Healer and Guide.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
