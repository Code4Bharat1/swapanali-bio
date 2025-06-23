'use client';
import Image from 'next/image';

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
    title: 'Chemistry',
    image: '/field4.png',
    description: 'Chemistry enthusiast with a talent for making reactions and equations interesting and relatable.',
  },
  {
    title: 'Physics',
    image: '/field3.png',
    description: 'Passionate about decoding the universe through motion, energy, and forces.',
  },
  {
    title: 'Mathematics',
    image: '/field2.png',
    description: 'Enjoys making numbers, patterns, and logic simple for learners at all levels.',
  },
  {
    title: 'Environment',
    image: '/field1.png',
    description: 'Dedicated to educating about sustainability, climate change, and eco-awareness.',
  },
];

export default function Field() {
  return (
   <section className="py-12 bg-white text-center px-4">
  <h2 className="text-3xl md:text-4xl font-bold">MY FIELD OF EXPERTISE</h2>
  <div className="w-24 h-1 bg-blue-500 mx-auto my-3"></div>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {expertiseData.map((item, idx) => (
      <div
        key={idx}
        className="relative w-[458px] h-[233px] bg-blue-50 rounded-[50px] p-6 pt-20 border-2 border-blue-200 mx-auto shadow-md hover:shadow-lg transition"
      >
        {/* Circle Image Overlapping Top */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-[80px] h-[80px] bg-white rounded-full shadow-md flex items-center justify-center">
            <Image src={item.image} alt={item.title} width={60} height={60} />
          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-700 text-sm">{item.description}</p>
      </div>
    ))}
  </div>
</section>

  );
}
