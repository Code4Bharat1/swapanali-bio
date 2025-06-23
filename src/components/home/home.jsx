'use client';
import Image from 'next/image';

export default function Homepage() {
  return (
    <>
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center text-white h-[500px] flex items-center px-6 md:px-16"
        style={{ backgroundImage: "url('/home2.png')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between w-full">
          {/* Left Text Content */}
          <div className="md:w-1/2 space-y-4">
            <h1 className="text-4xl font-bold leading-snug">
              Biology Expert<br />and NEET Trainer
            </h1>
            <p className="text-lg font-semibold">Swapnali Patkar</p>
            <p className="text-sm">
              Teacher by profession since 1994 <br />
              Completed M.Sc in Microbiology, B.Ed, DMLT
            </p>
            <button className="mt-4 bg-white text-blue-700 font-semibold px-6 py-2 rounded-full shadow hover:bg-blue-100 transition">
              Explore Research
            </button>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <Image
              src="/home1.png"
              alt="Trainer"
              width={606}
              height={1200}
              priority
              unoptimized
              className="w-[606px] h-[500px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="bg-[#e8f3ff] min-h-screen flex items-center justify-center p-4">
        <div className=" p-6 max-w-5xl w-full flex flex-col md:flex-row gap-6">
          {/* Profile Image */}
          <div className="border-4 border-cyan-400 rounded-xl overflow-hidden w-full md:w-1/3 flex justify-center">
            <Image
              src="/swapnali.png"
              alt="Swapnali Patkar"
              width={250}
              height={300}
              className="object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="space-y-4 text-gray-800 md:w-2/3">
            <p className="text-lg leading-relaxed">
              <span className="font-semibold text-xl text-black">I’m Swapnali Patkar</span>, a Passionate Teacher since 1994, currently teaching Biology & NEET at <span className="font-semibold">Mahesh Tutorials Lakshya</span>.
              <br />
              Alongside teaching, I’m a Certified Numerologist, Tarot Reader, Reiki Grand Master, and Spiritual Healer.
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">🎓</span>
              <span><strong>Education :</strong> M.Sc in Microbiology, B.Ed, DMLT</span>
            </p>

            <p className="flex items-center gap-2">
              <span className="text-blue-600 text-lg">📘</span>
              <span><strong>Academic Experience :</strong> 31+ Years</span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-blue-600 text-lg">👩‍🏫</span>
              <span>
                <strong>Taught In :</strong> Ramchandras institute, Brilliance classes, Abhinandan classes, Kutty classes, Mayur educare as Biology Teacher and NEET trainer
              </span>
            </p>

            <p className="flex items-start gap-2">
              <span className="text-pink-600 text-lg">💖</span>
              <span>
                <strong>Passion :</strong> Numerologist, Tarot card reader, Graphologist, Reiki Grand Master, Vastu consultant, Spiritual Healer and Guide.
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
