import React from 'react';

const Hero =() =>{
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-yellow-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-yellow-400 to-yellow-500 rounded-full transform translate-x-48 -translate-y-48 opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-yellow-300 to-yellow-400 rounded-full transform -translate-x-32 translate-y-32 opacity-15"></div>
      
      {/* Main hero content */}
      <div className="container mx-auto px-6 lg:px-8 pt-20 lg:pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Text content */}
          <div className="space-y-8 z-10 relative">
            <div className="space-y-2">
              <p className="text-gray-600 text-lg font-medium">Hello, I&apos;m Fathima Harsha</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                UI & UX
                <br />
                <span className="text-yellow-400">Designer</span>
              </h1>
            </div>
            
            <p className="text-gray-600 text-xl font-medium max-w-md">
              Freelance Web Designer And Developer
            </p>
            
            <div className="pt-4">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                HIRE ME
              </button>
            </div>
          </div>
          
          {/* Right side - Image and decorative elements */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Main orange background shape */}
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-80 h-96 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-3xl rounded-tr-[120px] z-0"></div>
            
            {/* Professional woman image placeholder */}
            <div className="relative z-10 w-72 h-80 bg-gray-200 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gray-500 rounded-full mx-auto mb-4"></div>
                  <p className="text-gray-700 font-medium">Professional Photo</p>
                  <p className="text-gray-600 text-sm">Replace with your image</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-8 right-8 text-yellow-300 font-bold text-8xl opacity-30 z-5">
              02
            </div>
            <div className="absolute bottom-8 right-16 text-yellow-300 font-bold text-6xl opacity-30 z-5">
              04
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-12 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-bounce"></div>
            <div className="absolute top-32 right-4 w-4 h-4 bg-yellow-500 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-300 rounded-full"></div>
        <div className="w-2 h-2 bg-yellow-200 rounded-full"></div>
      </div>
    </div>
  );
}
export default Hero;