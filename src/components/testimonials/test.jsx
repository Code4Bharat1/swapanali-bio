'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'ISHA BHOITE',
    image: '/isha.png',
    rating: 5,
    text: 'Best Person There Ever Was Who Talks Are So Knowledgeable That Maths Turn Students Like To Get Inspired With',
  },
  {
    id: 2,
    name: 'ANUJA SHARMA',
    image: '/isha.png',
    rating: 4,
    text: 'To the most amazing Biology teacher I have ever met. Because of you I got interest in Biology and made my career in this field.',
  },
  {
    id: 3,
    name: 'RAHUL VERMA',
    image: '/isha.png',
    rating: 5,
    text: 'Best person I have ever met. Your talks are so knowledgeable that students like us get inspired automatically.',
  },
  {
    id: 4,
    name: 'PRIYA DESAI',
    image: '/isha.png',
    rating: 5,
    text: 'It was your unsatisfiable passion for teaching and uncompromising ethics that shaped who I am today!',
  },
  {
    id: 5,
    name: 'KARAN MEHTA',
    image: '/isha.png',
    rating: 4,
    text: '"You\'ve taught me how to believe in myself. Your positive attitude inspires everyone in the classroom."',
  },
  {
    id: 6,
    name: 'NEHA KULKARNI',
    image: '/isha.png',
    rating: 5,
    text: '"Learning with you feels like an adventure. Thank you for making every lesson memorable."',
  },
];

// Helper to determine slide direction
const getSlideDirection = (name) => {
  const leftNames = ['SHUBHAM THAKARE', 'RAHUL VERMA', 'KARAN MEHTA'];
  return leftNames.includes(name) ? -100 : 100;
};

export default function Test() {
  return (
    <>
      <div className="bg-white w-auto h-[25px] mt-10 mb-[40px] flex items-center justify-start pl-9">
        <h2 id="testimonials-heading" className="text-3xl font-extrabold text-black">
          What My Students Say....
        </h2>
      </div>

      <section className="bg-gradient-to-r from-blue-300 to-blue-300 py-20 px-4">
        <div className="max-w-6xl mx-auto space-y-24">
          {/* Loop through testimonials in groups of 2 */}
          {[0, 2, 4].map((start, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="grid md:grid-cols-2 gap-20 justify-center items-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {testimonials.slice(start, start + 2).map((t, index) => (
                <motion.div
                  key={t.id}
                  className="relative w-full max-w-md mx-auto group"
                  initial={{ x: getSlideDirection(t.name), opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.03 }}
                >
                  {/* Background Yellow Card - Enhanced hover effect */}
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
                      transition: { duration: 0.3 }
                    }}
                  />

                  {/* White Card - Enhanced hover effect */}
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
                    {/* Image - Enhanced hover effect */}
                    <motion.div 
                      className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-30 h-30 rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-white shadow-lg group-hover:border-yellow-400 transition-colors duration-300">
                        <img
                          src={t.image}
                          alt={`${t.name}'s profile`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      </div>
                    </motion.div>

                    {/* Content */}
                    <div className="pt-16 text-center flex-1 flex flex-col">
                      <h3 className="font-bold text-gray-800 text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {t.name}
                      </h3>
                      <div className="flex justify-center mb-4">
                        <img
                          src="/rate.png"
                          alt="Rating"
                          className="w-[145px] h-[48px] object-contain group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="text-gray-700 text-sm leading-relaxed px-1 flex-1 flex items-center justify-center group-hover:text-gray-800 transition-colors duration-300">
                        <p className="text-center group-hover:scale-[1.02] transition-transform duration-300">
                          {t.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}