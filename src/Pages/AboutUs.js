import React from 'react';
import Header from '../components/Header';

const AboutUs = () => {
  return (
    <div>
      <Header />
      <section id="about-us" className="relative pt-20 h-screen">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://xebia.com/wp-content/uploads/2021/07/thumb02-1.jpg)')" }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container mx-auto px-4 py-16">
         {/* content */}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
