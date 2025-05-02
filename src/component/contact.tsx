

import React from "react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-[90%] max-w-6xl bg-white flex shadow-lg relative">

        {/* Yellow vertical bar on left */}
        <div className="absolute left-0 top-1/3 w-8 h-10 bg-yellow-400"></div>

        {/* Left: Contact Form */}
        <div className="w-2/3 p-10">
          <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8 text-xl">
            Feel free to contact us any time. We will get back to you as soon as we can!
          </p>
          <form className="space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-lg bg-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-lg bg-transparent"
            />
            <textarea
              placeholder="Message"
              className="w-full border-b border-gray-300 focus:outline-none py-2 text-lg bg-transparent"
              rows={3}
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-8 py-2 text-lg tracking-widest"
            >
              SEND
            </button>
          </form>
        </div>

        {/* Right: Info Panel */}
        <div className="w-1/3 bg-black text-white p-10 relative z-10">
          {/* Top Yellow block */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-yellow-400 z-0"></div>
          <h3 className="text-xl font-semibold mb-6">Info</h3>
          <ul className="space-y-4 text-sm relative z-10">
            <li className="flex items-center gap-2">📧 info@getintouch.we</li>
            <li className="flex items-center gap-2">📞 +24 56 89 146</li>
            <li className="flex items-center gap-2">🏢 14 Greenroad St.</li>
            <li className="flex items-center gap-2">🕐 09:00 - 18:00</li>
          </ul>
        </div>

        {/* Bottom right yellow block */}
        <div className="absolute bottom-0 right-0 w-12 h-12 bg-yellow-400 z-0"></div>
      </div>
    </div>
  );
};

export default ContactPage;
