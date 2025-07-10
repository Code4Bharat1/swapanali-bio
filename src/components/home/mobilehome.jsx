'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HomepageMobile() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return (
    <div className="block md:hidden bg-cover bg-center text-white px-4 pt-30 pb-8" style={{ backgroundImage: "url('/home2.png')" }}>
      {/* Text Section */}
      <div className="text-left space-y-4">
        <motion.h1 
          className="text-3xl font-bold leading-snug text-white"
          style={{ textShadow: '2px 2px 5px white' }}
          initial={{ x: -50, opacity: 0 }}
          animate={isMounted ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          Biology Expert<br />and NEET Trainer
        </motion.h1>

        <motion.p
          className="text-xl font-semibold"
          style={{ textShadow: '1px 1px 3px white' }}
          initial={{ x: -50, opacity: 0 }}
          animate={isMounted ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Swapnali Patkar
        </motion.p>

        <motion.p
          className="text-base"
          style={{ textShadow: '1px 1px 3px white' }}
          initial={{ x: -50, opacity: 0 }}
          animate={isMounted ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Teacher by profession since 1994<br />
          Completed M.Sc in Microbiology, B.Ed, DMLT
        </motion.p>

        <motion.button
          className="mt-2 bg-white text-blue-700 font-semibold px-5 py-2 rounded-full shadow hover:bg-blue-100"
          initial={{ x: -50, opacity: 0 }}
          animate={isMounted ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Explore Research
        </motion.button>
      </div>
    </div>
  );
}