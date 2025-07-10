'use client';

import React, { useState } from 'react';

export default function FormMobile() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const targetNumber = '919820268079';
    const text = `Hello, my name is ${fullName}.%0AMy email is: ${email}%0AMy phone number is: ${phone}%0AMessage: ${message}`;
    const whatsappURL = `https://wa.me/${targetNumber}?text=${text}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <section className="relative bg-[#191970] text-white py-10 px-4">
      {/* Decorative Circles */}
      <div className="absolute top-10 left-10 w-4 h-4 bg-sky-300 rounded-full" />
      <div className="absolute top-[80px] right-[60px] w-3 h-3 bg-sky-400 rounded-full" />
      <div className="absolute top-[120px] left-[200px] w-5 h-5 bg-sky-400 rounded-full" />
      <div className="absolute bottom-[60px] right-[30px] w-3 h-3 bg-sky-300 rounded-full" />
      <div className="absolute bottom-2 left-1/2 w-4 h-4 bg-sky-400 rounded-full" />

      <div className="w-full max-w-md mx-auto relative z-10">
        <h2 className="text-2xl font-bold text-center mb-2">Send Us A Message</h2>
        <p className="text-center text-sky-100 mb-6 text-sm">
          Give Us Chance To Serve And Bring Magic
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div className="flex flex-col w-[320px] mx-auto">
            <label className="mb-1 text-white text-sm">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="rounded-md px-3 py-2 shadow bg-white text-black text-sm focus:outline-none"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>

          {/* Email */}
          <div className="flex flex-col w-[320px] mx-auto">
            <label className="mb-1 text-white text-sm">Email</label>
            <input
              type="email"
              placeholder="Your Email"
              className="rounded-md px-3 py-2 bg-white text-black text-sm focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Phone */}
          <div className="flex flex-col w-[320px] mx-auto">
            <label className="mb-1 text-white text-sm">Your Phone</label>
            <input
              type="tel"
              placeholder="Phone Number"
              className="rounded-md px-3 py-2 bg-white text-black text-sm focus:outline-none"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>

          {/* Message */}
          <div className="flex flex-col w-[320px] mx-auto">
            <label className="mb-1 text-white text-sm">Message</label>
            <textarea
              rows="4"
              placeholder="Type your message here..."
              className="rounded-md px-3 py-2 bg-white text-black text-sm resize-none focus:outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="pt-2 text-center">
            <button
              type="submit"
              className="w-[220px] bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-full font-semibold text-sm transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
