// app/about/page.tsx

import React from "react";
import Image from "next/image";
import Navbar from "@/component/navbar";

const AboutPage = () => {
  
  return (
    <main className="min-h-screen bg-white text-gray-800 py-16 px-6 md:px-20">
      <Navbar />
      <section className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 border-l-4 border-yellow-400 pl-4">
          About Me
        </h1>

        <div className="flex flex-col md:flex-row items-start gap-10">
        <Image
  src="/profile.jpg" // Make sure this image is in the public folder
  alt="Profile"
  width={192} // w-48 = 192px
  height={192} // h-48 = 192px
  className="object-cover rounded-full border-4 border-yellow-400 shadow-md"
/>

          <div className="space-y-5 text-lg leading-relaxed">
            <p>
              Hi! I’m <span className="font-semibold text-black">Fathima Harsha</span>,
              a passionate React developer based in Malappuram. I recently graduated
              with a BSc in Mathematics from Calicut University, where I also studied
              Computer Science as a complementary subject.
            </p>

            <p>
              I completed a six-month internship in the MERN stack and am currently
              expanding my skills in full-stack development. I enjoy building
              responsive, user-friendly interfaces and exploring the latest in
              frontend technologies.
            </p>

            <p>
              Apart from coding, I’m interested in UI/UX design and always seek to
              improve user experience with clean, intuitive layouts.
            </p>

            <p>
              If you’re looking for a dedicated and creative developer, feel free to
              <a href="/contact" className="text-yellow-500 underline ml-1">
                get in touch!
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
