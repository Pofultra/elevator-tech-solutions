import React from "react";
import background from "/images/home_fondo.webp";

const Home = () => {
  return (
    
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${background})` }}>
      <div className="absolute top-[246px] left-[24px] w-[373px] h-[198px] flex flex-col justify-between">
        <div>
          <h1 className="text-white font-extrabold text-[34px] leading-[39px] tracking-[0px] font-sf">ELEVATOR TECH SOLUTIONS</h1>
          <p className="text-white font-sf">Serving all of South Florida</p>
        </div>
        <button className="bg-blue-500 text-white py-2 px-6 rounded-md shadow-md font-sf hover:scale-105 transition-transform">Get a Quote</button>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-6">
        <button className="bg-white p-3 rounded-full shadow-md">
          <i className="ri-whatsapp-line text-green-500 text-xl"></i>
        </button>
        <button className="bg-white p-3 rounded-full shadow-md">
          <i className="ri-mail-line text-blue-500 text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Home;
