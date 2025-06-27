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
  <div className="w-24 h-1 bg-blue-500 mx-auto my-3"></div>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
    {expertiseData.map((item, idx) => (
      <div
        key={idx}
        className="relative w-[458px] h-[233px] bg-blue-50 rounded-[50px] p-6 pt-20 border-3 border-[#1D8EFF] mx-auto shadow-md hover:shadow-lg transition"
      >
        {/* Circle Image Overlapping Top */}
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
          <div className="w-[80px] h-[80px] bg-white rounded-full shadow-md flex items-center justify-center">
           <Image src={item.image} alt={item.title} width={161} height={161} />

          </div>
        </div>

        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
        <p className="text-gray-700  text-md ">{item.description}</p>
      </div>
    ))}
  </div>
</section>

  );
}
