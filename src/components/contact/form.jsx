'use client';

import React from 'react';

export default function Form() {
  return (
    <section className="relative bg-[#191970] text-white py-16 px-6">
      {/* Decorative Circles */}
      <div className="absolute top-15 left-[330px] w-[30px] h-[30px] bg-sky-300 rounded-full" />
      <div className="absolute top-[138px] right-[510px] w-4 h-4 bg-sky-400 rounded-full" />
      <div className="absolute top-[180px] left-[620px] w-8 h-8 bg-sky-400 rounded-full" />
      <div className="absolute bottom-10 right-6 w-4 h-4 bg-sky-300 rounded-full" />
      <div className="absolute bottom-0 left-1/2 w-5 h-5 bg-sky-400 rounded-full" />
       <div className="absolute bottom-[127px] right-[420px] w-8 h-8 bg-sky-300 rounded-full" />
        <div className="absolute bottom-[127px] right-[420px] w-8 h-8 bg-sky-300 rounded-full" />
      {/* Form Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">Send Us A Message</h2>
        <p className="text-center text-sky-100 mb-10">
          Give Us Chance To Serve And Bring Magic
        </p>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div className="flex flex-col">
            <label className="mb-1 text-white">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md px-4 py-2 shadow-2xl bg-white text-black focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="mb-1 text-white">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md px-4 py-2 bg-white text-black focus:outline-none"
            />
          </div>

          {/* Phone - full width */}
          <div className="flex flex-col">
            <label className="mb-1 text-white">Your Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-md px-4 bg-white py-2 text-black focus:outline-none"
            />
          </div>

          {/* Message - full width */}
          <div className="flex flex-col md:col-span-2">
            <label className="mb-1 text-white">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message here..."
              className="rounded-md px-4 py-2 bg-white text-black resize-none focus:outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 mt-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-semibold transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
