'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Biology',
    image: '/field6.png',
    description:
      'Experienced NEET trainer and Biology educator since 1994, passionate about simplifying complex concepts.',
  },
  {
    title: 'Science & Technology',
    image: '/field5.png',
    description:
      'Firm believer in blending scientific knowledge with modern tools to enhance learning and spiritual growth.',
  },
  {
    title: 'Numerologist',
    image: '/field4.png',
    description:
      'Certified Numerologist guiding individuals through the power of numbers and personal vibrations.',
  },
  {
    title: 'Education',
    image: '/field3.png',
    description:
      'Experienced NEET trainer and Biology educator since 1994, passionate about simplifying complex concepts.',
  },
  {
    title: 'Passion',
    image: '/field2.png',
    description:
      'Deeply passionate about teaching, personal growth, and helping others unlock their true potential.',
  },
  {
    title: 'Graphologist',
    image: '/field1.png',
    description:
      'Expert in handwriting analysis, offering insights into personality and behavior through Graphology.',
  },
];

export default function FieldMobile() {
  return (
    <section className="block md:hidden py-10 bg-white px-4">
      {/* Centered Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex flex-col items-center"
      >
        <h2 className="text-2xl font-bold text-center">MY FIELD OF EXPERTISE</h2>
        <motion.div
          className="w-32 h-0.5 bg-blue-500 my-2 mt-4"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </motion.div>

      {/* Centered Cards Container */}
      <div className="mt-6 flex flex-col items-center space-y-12">
        {expertiseData.map((item, idx) => (
          <motion.div
  key={idx}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ 
    duration: 0.6,
    delay: idx * 0.15
  }}
  viewport={{ once: true, margin: "-50px 0px -50px 0px" }}
  className="relative w-[320px] sm:w-[300px] bg-blue-50 rounded-[30px] px-4 pt-14 pb-6 border border-[#1D8EFF]"
  style={{
     boxShadow: "0 10px 25px rgba(0, 119, 255, 0.18)"  // soft blue glow
  }}
>

            {/* Animated Profile Image */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: idx * 0.15 + 0.1,
                type: "spring"
              }}
              viewport={{ once: true }}
              className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            >
              <div className="w-[60px] h-[60px] bg-white rounded-full shadow flex items-center justify-center overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={60} 
                  height={60}
                  className="object-contain p-2"
                />
              </div>
            </motion.div>

            {/* Animated Content */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ 
                duration: 0.4,
                delay: idx * 0.15 + 0.3
              }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-sm text-black font-bold px-2">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}