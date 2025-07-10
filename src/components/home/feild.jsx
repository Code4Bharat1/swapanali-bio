'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Biology',
    image: '/field6.png',
    description: 'Experienced NEET trainer and Biology educator since 1994, passionate about simplifying complex concepts.',
  },
  {
    title: 'Science & Technology',
    image: '/field5.png',
    description: 'Firm believer in blending scientific knowledge with modern tools to enhance learning and spiritual growth.',
  },
  {
    title: 'Numerologist',
    image: '/field4.png',
    description: 'Certified Numerologist guiding individuals through the power of numbers and personal vibrations.',
  },
  {
    title: 'Education',
    image: '/field3.png',
    description: 'Experienced NEET trainer and Biology educator since 1994, passionate about simplifying complex concepts.',
  },
  {
    title: 'Passion',
    image: '/field2.png',
    description: 'Deeply passionate about teaching, personal growth, and helping others unlock their true potential.',
  },
  {
    title: 'Graphologist',
    image: '/field1.png',
    description: 'Expert in handwriting analysis, offering insights into personality and behavior through Graphology.',
  },
];

export default function Field() {
  return (
    <section className="py-12 bg-white text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold">MY FIELD OF EXPERTISE</h2>
      <div className="w-54 h-0.5 bg-blue-500 mx-auto my-3"></div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {expertiseData.map((item, idx) => {
          // Animation direction based on title
          const leftTitles = ['Biology', 'Numerologist', 'Passion'];
          const rightTitles = ['Science & Technology', 'Education', 'Graphologist'];

          const animateFrom = leftTitles.includes(item.title)
            ? { x: -100, opacity: 0 }
            : rightTitles.includes(item.title)
            ? { x: 100, opacity: 0 }
            : { x: 0, opacity: 1 };

          const animateTo = { x: 0, opacity: 1 };

          return (
            <motion.div
              key={idx}
              className="group relative w-[458px] h-[233px] bg-blue-50 rounded-[50px] p-6 pt-20 border-3 border-[#1D8EFF] mx-auto shadow-md hover:shadow-lg transition-all duration-300"
              initial={animateFrom}
              whileInView={animateTo}
              whileHover={{
                y: -10,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
                borderColor: '#3B82F6',
                backgroundColor: 'rgba(239, 246, 255, 0.8)'
              }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              {/* Logo Animation with Hover */}
              <motion.div
                className="absolute -top-10 left-1/2 transform -translate-x-1/2"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-[80px] h-[80px] bg-white rounded-full shadow-md flex items-center justify-center group-hover:bg-blue-100 group-hover:ring-2 group-hover:ring-blue-400 transition-all duration-300">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    width={161} 
                    height={161}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
              </motion.div>

              {/* Title with Hover Effect */}
              <motion.h3
                className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors duration-300"
              >
                {item.title}
              </motion.h3>

              {/* Description with Hover Effect */}
              <motion.p
                className="text-black text-md font-semibold group-hover:text-gray-800 group-hover:scale-[1.02] transition-all duration-300"
              >
                {item.description}
              </motion.p>

              {/* Hidden Learn More Button on Hover */}
              <motion.div
                className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}