'use client';

import Image from 'next/image';

const items = [
  {
    title: 'Graphologist',
    imgSrc: '/guide.png',
    bg: 'bg-gradient-to-b from-yellow-400 to-yellow-500',
    hover: 'hover:from-[#175EF7] hover:to-[#175EF7]',
  },
  {
    title: 'Tarot Card Reader',
    imgSrc: '/tcr.png',
    bg: 'bg-teal-400',
    hover: 'hover:bg-teal-600',
  },
  {
    title: 'Numerologist',
    imgSrc: '/nuro.png',
    bg: 'bg-gradient-to-r from-red-500 to-orange-400',
    hover: 'hover:from-orange-500 hover:to-orange-600',
  },
  {
    title: 'Vastu Consultant',
    imgSrc: '/explore.png',
    bg: 'bg-gradient-to-r from-cyan-800 to-cyan-600',
    hover: 'hover:from-cyan-900 hover:to-cyan-700',
  },
  {
    title: 'Reiki Grand Master',
    imgSrc: '/rmt.png',
    bg: 'bg-gradient-to-r from-purple-700 to-purple-500',
    hover: 'hover:from-purple-800 hover:to-purple-600',
  },
  {
    title: 'Spiritual Healer',
    imgSrc: '/st.png',
    bg: 'bg-indigo-900',
    hover: 'hover:bg-indigo-700',
  },
];

export default function CircleMobile() {
  return (
    <div className="relative w-full px-4 py-6 bg-white flex flex-col items-center">
      {/* Title Image */}
      <div className="mb-6">
        <Image
          src="/academmicsss.png"
          alt="Beyond Academics"
          width={200}
          height={80}
          className="mx-auto h-auto rounded-md shadow transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Cards Stack */}
      <div className="flex flex-col items-center gap-4 w-full">
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`${item.bg} ${item.hover} transition-all duration-300 hover:scale-105 w-[85%] h-[110px] rounded-md shadow-md flex flex-col items-center justify-between`}
          >
            <div className="w-full flex justify-center pt-4">
              <Image
                src={item.imgSrc}
                alt={item.title}
                width={50}
                height={50}
                className="object-contain"
              />
            </div>
            <span className="text-white font-semibold text-center px-4 pb-4">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
