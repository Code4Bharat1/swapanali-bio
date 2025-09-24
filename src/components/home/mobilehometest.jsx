'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'SHUBHAM THAKARE',
    text: 'Best Person There Ever Was Who Talks Are So Knowledgeable That Maths Turn Students Like To Get Inspired With',
  },
  {
    id: 2,
    name: 'ANUJA SHARMA',
    text: 'To the most amazing Biology teacher I have ever met. Thanks to you ma\'am, I got interested in Biology and made my career in this field. God bless you ma\'am!',
  },
  {
    id: 3,
    name: 'BASIM THAKUR',
    text: 'Learning With You Feels Like An Adventure. Thank You For Making Every Lesson Memorable And Meaningful.',
  },
];

export default function TestMobile() {
  return (
    <section className="block md:hidden bg-gradient-to-r from-blue-300 to-blue-300 py-12 px-4 w-full overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-black text-center relative pb-2"
        initial={{ y: -40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Testimonials
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      {/* Testimonials Container */}
      <div className="mt-10 space-y-8 flex flex-col items-center">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            className="relative w-full max-w-sm"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6,
              delay: index * 0.2
            }}
            viewport={{ once: true, margin: "-30px 0px -30px 0px" }}
          >
            {/* Yellow Background Shape */}
            <div
              className="bg-yellow-400 absolute inset-0 left-1/2 transform -translate-x-1/2 w-[calc(100%-40px)] h-[220px] -translate-y-2 z-0"
              style={{
                boxShadow: '4px 6px 15px rgba(0, 0, 0, 0.2)',
                borderTopLeftRadius: '92px',
                borderBottomRightRadius: '92px',
              }}
            />

            {/* White Card */}
            <div
              className="bg-white relative z-10 p-4 mt-[20px] mx-auto w-[calc(100%-40px)] shadow-xl"
              style={{
                borderTopLeftRadius: '92px',
                borderBottomRightRadius: '92px',
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.1)',
                minHeight: '200px',
              }}
            >
              {/* Circle with First Letter (No Image) */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ 
                  delay: index * 0.2 + 0.1,
                  type: "spring",
                  stiffness: 150
                }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-500 border-4 border-white shadow-md flex items-center justify-center">
                  <span className="text-white font-bold text-xl">
                    {t.name.charAt(0)}
                  </span>
                </div>
              </motion.div>

              {/* Content */}
              <div className="pt-12 text-center">
                <motion.h3
                  className="font-bold text-black text-sm mb-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.2 }}
                  viewport={{ once: true }}
                >
                  {t.name}
                </motion.h3>

                <motion.div
                  className="flex justify-center mb-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.25 }}
                  viewport={{ once: true }}
                >
                  <img
                    src="/starrating.png"
                    alt="Rating"
                    className="w-[110px] h-[20px] object-contain"
                  />
                </motion.div>

                <motion.p
                  className="text-black text-xs leading-relaxed px-1"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                >
                  {t.text}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
