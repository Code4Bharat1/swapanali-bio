'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Homepage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[480px] flex items-center px-6 md:px-16"
        style={{ backgroundImage: "url('/home2.png')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-4 mt-22">
            <motion.h1
              className="text-5xl font-bold leading-snug text-white"
              style={{ textShadow: '2px 2px 5px white' }}
              initial={{ x: -100, opacity: 0 }}
              animate={isMounted ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
            >
              Biology Expert<br />and NEET Trainer
            </motion.h1>

            <motion.div className="text-white">
              <motion.p
                className="text-[35px] font-semibold leading-tight"
                style={{ textShadow: '1px 1px 3px white' }}
                initial={{ x: -100, opacity: 0 }}
                animate={isMounted ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Swapnali Patkar
              </motion.p>

              <motion.p
                className="text-xl mt-0 leading-tight"
                style={{ textShadow: '1px 1px 3px white' }}
                initial={{ x: -100, opacity: 0 }}
                animate={isMounted ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Teacher by profession since 1994 <br />
                Completed M.Sc in Microbiology, B.Ed, DMLT
              </motion.p>
            </motion.div>

            <motion.button
              className="mt-2 bg-white text-blue-700 text-xl font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition"
              initial={{ x: -100, opacity: 0 }}
              animate={isMounted ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Explore Research
            </motion.button>
          </div>

          {/* Right Image */}
          <div className="flex justify-end -mt-8">
            <motion.div 
              className="relative w-[850px] pl-32 h-[750px]"
              initial={{ x: 100, opacity: 0 }}
              animate={isMounted ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <Image
                src="/home1.png"
                alt="Trainer"
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}