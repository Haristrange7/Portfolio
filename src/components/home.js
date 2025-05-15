import React from "react";
import Header from "./Header";
import "./home.css"; // Ensure your keyframes and styles are defined here
import Skills from "./skills";
import AboutUs from "./aboutus";
import Experience from "./experience";
import Projects from "./projects";
import ContactUs from "./Contactus";
import Certificates from "./certificates";

const Home = () => {
return (
    <div className="relative overflow-hidden" >
        <Header />
        <div id="" className="flex flex-col  md:flex-row h-[100vh] items-center justify-center md:justify-between min-h-screen gap-2 md:gap-20 bg-gray-800 w-screen">
            <div className="text-center md:text-left order-2 md:order-1 ">
                <h1 className="text-4xl md:text-6xl font-bold text-white">
                    Hariharan Natarajan
                </h1>
                <p className="mt-4 text-lg md:text-xl text-white font-semibold">
                    Full Stack Developer
                </p>
                <div className="mt-6">
                    <a
                        href="https://drive.google.com/uc?export=download&id=1YNlw8BTHAs48f08mKO5qOTcBxoiPtpyb"
                        className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 font-semibold transition"
                        download
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Right Section: Animated Image */}
            <div className="relative flex justify-center items-center order-1 md:order-2 ">
                <div className="relative w-64 h-64 md:w-80 md:h-80">
                    {/* Outer Circle */}
                    <div
                        className="absolute inset-0 rounded-full border-8 border-blue-500"
                        style={{
                            animation: "spin-slow 15s linear infinite",
                            borderStyle: "dashed",
                        }}
                    ></div>
                    {/* Middle Circle */}
                    <div
                        className="absolute inset-4 rounded-full border-4 border-blue-300"
                        style={{
                            animation: "spin-reverse 20s linear infinite",
                            borderStyle: "dashed",
                        }}
                    ></div>
                    {/* Inner Circle with Image */}
                    <div className="absolute inset-7 rounded-full overflow-hidden shadow-lg">
                        <img
                            src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
                            alt="Portfolio"
                            className="w-full h-full object-top object-cover rounded-full"
                        />
                    </div>
                </div>
            </div>
        </div>
        <AboutUs id="about" />
        <Skills id="skill" />
        <Experience id="experience" />
        <Certificates id="certificate"/>
        <Projects id="projects"/>
        <ContactUs id="contact-us"/>

    </div>
);
};

export default Home;
