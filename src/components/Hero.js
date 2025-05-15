import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
    const handleScrollDown = () => {
        const nextSection = document.getElementById('next-section');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative w-full h-screen z-0">
  
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://xebia.com/wp-content/uploads/2023/12/xebia_ai_video_header-1080p-1.mp4"
                autoPlay
                loop
                muted
                playsInline
            ></video>
 <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#next-section" onClick={handleScrollDown} className="flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 backdrop-blur-md rounded-full text-white text-2xl">
                    <FontAwesomeIcon icon={faChevronDown} />
                </a>
            </div>
        </section>
    );
};

export default Hero;
