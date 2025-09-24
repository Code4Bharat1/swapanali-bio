'use client';
import React from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'ISHA BHOITE',
    rating: 5,
    text: 'Best Person There Ever Was Who Talks Are So Knowledgeable That Maths Turn Students Like To Get Inspired With',
  },
  {
    id: 2,
    name: 'ANUJA SHARMA',
    rating: 4,
    text: 'To the most amazing Biology teacher I have ever met. Because of you I got interest in Biology and made my career in this field.',
  },
  {
    id: 3,
    name: 'RAHUL VERMA',
    rating: 5,
    text: 'Best person I have ever met. Your talks are so knowledgeable that students like us get inspired automatically.',
  },
  {
    id: 4,
    name: 'PRIYA DESAI',
    rating: 5,
    text: 'It was your unsatisfiable passion for teaching and uncompromising ethics that shaped who I am today!',
  },
  {
    id: 5,
    name: 'KARAN MEHTA',
    rating: 4,
    text: '"You\'ve taught me how to believe in myself. Your positive attitude inspires everyone in the classroom."',
  },
  {
    id: 6,
    name: 'NEHA KULKARNI',
    rating: 5,
    text: '"Learning with you feels like an adventure. Thank you for making every lesson memorable."',
  },
];

const getSlideDirection = (name) => {
  const leftNames = ['SHUBHAM THAKARE', 'RAHUL VERMA', 'KARAN MEHTA'];
  return leftNames.includes(name) ? -100 : 100;
};

export default function TestMobile() {
  return (
    <>
      <div className="bg-white w-full px-4 mt-8 mb-6">
        <h2 className="text-2xl font-extrabold text-black">
          What My Students Say...
        </h2>
      </div>

      <section className="bg-gradient-to-r from-blue-300 to-blue-300 py-10 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              className="relative w-full max-w-xs mx-auto"
              initial={{ x: getSlideDirection(t.name), opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            >
              {/* Background Yellow Card */}
              <div
                className="bg-yellow-400 ml-4 mt-1 absolute inset-0 transform translate-x-2 w-[calc(100%-20px)] h-[260px] -translate-y-2 z-0"
                style={{
                  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
                  borderTopLeftRadius: '60px',
                  borderBottomRightRadius: '60px',
                }}
              />

              {/* White Card */}
              <div
                className="bg-white relative shadow-md p-6 mt-4 flex flex-col justify-start z-10 min-h-[240px]"
                style={{
                  borderTopLeftRadius: '60px',
                  borderBottomRightRadius: '60px',
                  boxShadow: '2px 4px 8px rgba(0, 0, 0, 0.1)',
                }}
              >
                {/* Blue Circle with First Letter */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center border-4 border-white shadow-md">
                    <span className="text-white font-bold text-xl">
                      {t.name.charAt(0)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="pt-12 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-base mb-2">{t.name}</h3>
                  <div className="flex justify-center mb-3">
                    <img
                      src="/starrating.png"
                      alt="Rating"
                      className="w-[100px] h-[32px] object-contain"
                    />
                  </div>
                  <div className="text-gray-700 text-xs leading-relaxed px-1 flex-1 flex items-center justify-center">
                    <p className="text-center">{t.text}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
