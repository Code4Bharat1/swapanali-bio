'use client';
import Image from 'next/image';

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[550px] flex items-center px-6 md:px-16"
        style={{ backgroundImage: "url('/home2.png')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-[45px] font-bold leading-snug">
              Biology Expert<br />and NEET Trainer
            </h1>
            <div className="text-white">
              <p className="text-[25px] font-semibold leading-tight">Swapnali Patkar</p>
              <p className="text-base mt-0 leading-tight">
                Teacher by profession since 1994 <br />
                Completed M.Sc in Microbiology, B.Ed, DMLT
              </p>
            </div>
            <button className="mt-2 bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition">
              Explore Research
            </button>
          </div>

          {/* Right Image */}
          <div className=" flex justify-end  -mt-8">
            <div className="relative w-[850px] pl-32 h-[1400px]">
              <Image
                src="/home1.png"
                alt="Trainer"
                fill
                priority
                unoptimized
                className="object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
