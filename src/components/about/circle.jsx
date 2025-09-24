'use client';

import Image from 'next/image';

const items = [
  {
    title:'Graphologist',
    imgSrc: '/guide.png',
    bg: 'bg-gradient-to-b from-yellow-400 to-yellow-500',
    hover: 'hover:from-[#175EF7] hover:to-[#175EF7]',
    side: 'left',
  },
  {
    title: 'Tarot Card Reader',
    imgSrc: '/tcr.png',
    bg: 'bg-teal-400',
    hover: 'hover:bg-teal-600',
    side: 'right',
  },
  {
    title: 'Numerologist',
    imgSrc: '/nuro.png',
    bg: 'bg-gradient-to-r from-red-500 to-orange-400',
    hover: 'hover:from-orange-500 hover:to-orange-600',
    side: 'left',
  },
  {
    title: 'Vastu Consultant',
    imgSrc: '/explore.png',
    bg: 'bg-gradient-to-r from-cyan-800 to-cyan-600',
    hover: 'hover:from-cyan-900 hover:to-cyan-700',
    side: 'right',
  },
  {
    title: 'Reiki Grand Master',
    imgSrc: '/rmt.png',
    bg: 'bg-gradient-to-r from-purple-700 to-purple-500',
    hover: 'hover:from-purple-800 hover:to-purple-600',
    side: 'left',
  },
  {
    title: 'Spiritual Healer',
    imgSrc: '/st.png',
    bg: 'bg-indigo-900',
    hover: 'hover:bg-indigo-700',
    side: 'right',
  },
];

export default function BeyondAcademics() {
  return (
    <div className="relative w-full max-w-6xl mx-auto mt-[30px] px-4 bg-white flex flex-col items-center pb-4 ">

      {/* Title Image */}
      <div className="relative z-10 text-center mb-6 mt-6">
        <Image
          src="/academmicsss.png"
          alt="Beyond Academics"
          width={250}
          height={100}
          className="mx-auto h-auto rounded-md shadow transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Center Vertical Line */}
      <div className="absolute top-[140px] bottom-0 left-1/2 transform -translate-x-1/2 w-[2px] bg-black z-0" />

      {/* Alternating Rows */}
      <div className="flex flex-col gap-sm w-full mt-2">
        {items.map((item, idx) => (
  <div key={idx} className="relative flex items-center w-full justify-center px-4">
    {item.side === 'left' ? (
      <div className="flex items-center gap-1 z-10   mr-[calc(50%-130px)]">
        {/* Card */}
        <div
          className={`${item.bg} ${item.hover} transition-all duration-300 hover:scale-105 w-[220px] h-[110px] rounded-md shadow-md flex flex-col items-center justify-between`}
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
          <span className="text-white font-semibold text-center px-4 pb-6">
            {item.title}
          </span>
        </div>
        {/* Horizontal Line */}
        <div className="h-[2px] w-48 bg-black" />
      </div>
    ) : (
      <div className="flex items-center gap-1 z-10 ml-[calc(50%-130px)]">
        {/* Horizontal Line */}
        <div className="h-[2px] w-48 bg-black" />
        {/* Card */}
        <div
          className={`${item.bg} ${item.hover} transition-all duration-300 hover:scale-105 w-[220px] h-[110px] rounded-md shadow-md flex flex-col items-center justify-between`}
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
          <span className="text-white font-semibold text-center px-4 pb-6">
            {item.title}
          </span>
        </div>
      </div>
    )}
  </div>
))}
      </div>
    </div>
  );
}
