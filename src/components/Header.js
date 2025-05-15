import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`font-proxima w-full h-14 text-xs fixed top-0 left-0 transition-all duration-400 ease-in-out z-50
         ${ isScrolled || isHovered ? 'bg-white text-black' : 'bg-opacity-100 text-white backdrop-blur-full border-b border-gray-200 border-opacity-50' }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-center h-full p-7 mx-auto max-w-screen-xl">
     
        <div className="flex items-center mr-4">Logo</div>

  
        <nav className="flex items-center gap-6 relative">
          <div className="group relative">
            <Link
              to="/digital-transform"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Digital Transform
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/industries"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Industries
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/solutions"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Solutions
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/training"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Training
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/customer-stories"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Customer Stories
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/career"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-6 tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              Career
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

          <div className="group relative">
            <Link
              to="/about-us"
              className={`group-hover:border-b-4 group-hover:border-custom-blue group-hover:pb-4 leading-loose tracking-wide ${
                isScrolled || isHovered ? 'text-black' : 'text-white'
              }`}
            >
              About Us
            </Link>
            <div className="absolute left-0 hidden group-hover:block bg-gray-100 mt-5 p-4 top-full w-max">
              <Link to="/sub1" className="block text-black p-2">Submenu 1</Link>
              <Link to="/sub2" className="block text-black p-2">Submenu 2</Link>
            </div>
          </div>

        </nav>

        
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faGlobe} className={`text-base ${isScrolled || isHovered ? 'text-black' : 'text-white'}`} />
          <span className={`${isScrolled || isHovered ? 'text-black' : 'text-white'}`}>World</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
