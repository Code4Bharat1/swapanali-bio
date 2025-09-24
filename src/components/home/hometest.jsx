'use client';

import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'ISHA BHOITE',
    image: '',
    rating: 5,
    text: 'Best Person There Ever Was Who Talks Are So Knowledgeable That Maths Turn Students Like To Get Inspired With',
  },
  {
    id: 2,
    name: 'SAKSHI BHOITE',
    image: '',
    rating: 4,
    text: 'To the most amazing Biology teacher i have ever met in my life. Thanks to you maam because of you i got interest in Biology and made my carrier in this field God bless you maam grow higher',
  },
];

export default function Test() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="bg-gradient-to-r from-blue-300 to-blue-300 py-20 px-4"
    >
      <motion.h2
        id="testimonials-heading"
        className="text-3xl font-bold text-black text-center -mt-9"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        TESTIMONIALS
      </motion.h2>

      <div className="max-w-full mt-20 h-[250px]">
        <div className="grid md:grid-cols-2 gap-40 mb-9 max-w-5xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="relative w-full max-w-md mx-auto -mt-10 group"
              // ✅ Animate first card from right, second from left
              initial={{ 
                x: index === 0 ? 100 : -100, 
                opacity: 0 
              }}
              whileInView={{ 
                x: 0, 
                opacity: 1 
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Yellow background card */}
              <motion.div
                className="bg-yellow-400 ml-[20px] mt-[3px] absolute inset-0 transform translate-x-2 w-[444px] h-[300px] -translate-y-2 z-0"
                style={{
                  boxShadow: '4px 6px 10px rgba(0, 0, 0, 0.15)',
                  borderTopLeftRadius: '91.21px',
                  borderBottomRightRadius: '91.21px',
                }}
                whileHover={{
                  translateX: 5,
                  translateY: -5,
                  boxShadow: '6px 8px 15px rgba(0, 0, 0, 0.2)',
                }}
                transition={{ duration: 0.3 }}
              />

              {/* White foreground card */}
              <motion.div
                className="bg-white relative shadow-lg p-8 mt-[20px] flex flex-col justify-start z-10 min-h-[300px] group-hover:bg-blue-50 transition-colors duration-300"
                style={{
                  borderTopLeftRadius: '92.3px',
                  borderBottomRightRadius: '92.3px',
                  boxShadow: '4px 6px 10px rgba(0, 0, 0, 0.15)',
                }}
                whileHover={{
                  boxShadow: '8px 12px 20px rgba(0, 0, 0, 0.2)',
                }}
              >
                {/* Profile image */}
                <motion.div
                  className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="w-30 h-30 rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-white shadow-lg group-hover:border-yellow-400 transition-all duration-300">
                    {t.image ? (
                      <motion.img
                        src={t.image}
                        alt={`${t.name}'s profile`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg group-hover:bg-blue-600 transition-colors duration-300">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Card content */}
                <div className="pt-16 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-black text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    {t.name}
                  </h3>

                  <div className="flex justify-center mb-4">
                    <motion.img
                      src="/starrating.png"
                      alt="Rating"
                      className="w-[145px] h-[48px] object-contain group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                    />
                  </div>

                  <div className="text-gray-700 text-sm leading-relaxed px-1 flex-1 flex items-center justify-center group-hover:text-gray-800 transition-colors duration-300">
                    <motion.p
                      className="text-center group-hover:scale-[1.02] transition-transform duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      {t.text}
                    </motion.p>
                  </div>

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-yellow-400"
                    >
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                    </svg>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
