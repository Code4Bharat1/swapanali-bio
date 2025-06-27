'use client';

import React from 'react';
import { Star } from 'lucide-react';

// StarRating component
const StarRating = ({ rating }) => (
  <div className="flex space-x-1">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={i < rating ? 'text-yellow-400' : 'text-gray-300'}
        size={20}
      />
    ))}
  </div>
);

// Testimonials data
const testimonials = [
  {
    id: 1,
    name: 'SHUBHAM THAKARE',
    image: '/test1.png',
    rating: 5,
    text:
      'Best Person There Ever Was Who Talks Are So Knowledgeable That Maths Turn Students Like To Get Inspired With',
  },
  {
    id: 2,
    name: 'ANUJA SHARMA',
    image: '/test1.png',
    rating: 4,
    text: 'To the most amazing Biology teacher i have ever met in my life. Thanks to you maam because of you i got interest in Biology and made my carrier in this field God bless you maam grow higher',
  },
 
];

export default function Test() {
 return (
   <>
 


    <section
      aria-labelledby="testimonials-heading"
      className="bg-gradient-to-r from-blue-300 to-blue-300 py-20 px-4"
    >
      <h2
          id="testimonials-heading"
          className="text-3xl  font-bold text-black text-center -mt-9"
        >
          TESTIMONIALS
        </h2>
       
      <div className="max-w-full   mt-20 h-[250px]">
    
              {/* Left Side with white background and text */}
   

        <div className="grid md:grid-cols-2 gap-40 mb-9 max-w-5xl mx-auto">
          {testimonials.map((t) => (
        <div key={t.id} className="relative w-full max-w-md mx-auto -mt-10">
              {/* Yellow background card */}
              <div
                className="bg-yellow-400 ml-[20px] mt-[3px] absolute inset-0 transform translate-x-2 w-[444px] h-[300px] -translate-y-2 z-0"
                style={{
                  boxShadow: '4px 6px 10px rgba(0, 0, 0, 0.15)',
                  borderTopLeftRadius: '91.21px',
                  borderBottomRightRadius: '91.21px',
                }}
              />

              {/* White foreground card */}
              <div
                className="bg-white relative shadow-lg p-8 mt-[20px] flex flex-col justify-start z-10 min-h-[300px]"
                style={{
                  borderTopLeftRadius: '92.3px',
                  borderBottomRightRadius: '92.3px',
                  boxShadow: '4px 6px 10px rgba(0, 0, 0, 0.15)',
                }}
              >
                {/* Profile image */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <div className="w-30 h-30 rounded-full overflow-hidden bg-white flex items-center justify-center border-4 border-white shadow-lg">
                    {t.image ? (
                      <img
                        src={t.image}
                        alt={`${t.name}'s profile`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
                        {t.name.charAt(0)}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card content */}
                <div className="pt-16 text-center flex-1 flex flex-col">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{t.name}</h3>

                  <div className="flex justify-center mb-4">
                    <img
                      src="/rate.png"
                      alt="Rating"
                      className="w-[145px] h-[48px] object-contain"
                    />
                  </div>

                  {/* Review Text - Auto sizing */}
                  <div className="text-gray-700 text-sm leading-relaxed px-1 flex-1 flex items-center justify-center">
                    <p className="text-center">{t.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section></> 
  );
}