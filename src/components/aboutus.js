import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto py-16 px-4 bg-[#092c4b]">
            <h2 className="text-3xl font-bold text-gray-800  dark:text-gray-100 mb-12 text-center">
                About Me
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Text content */}
                <div className="space-y-5">
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        Hello! I’m a passionate developer who thrives on building clean, efficient, and scalable applications. My work spans both frontend and backend, with a special focus on creating smooth user experiences.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        I love exploring new technologies and constantly challenging myself to grow. Whether I’m solving bugs, optimizing performance, or building features from scratch — I approach every task with focus and care.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        Beyond coding, I enjoy collaborating in teams, sharing knowledge, and continuously improving through learning and feedback. Let’s build something amazing together!
                    </p>
                </div>

                {/* Image */}
                <div className="flex justify-center">
                    <img
                        src="https://res.cloudinary.com/dx5lg8mei/image/upload/v1744517909/IMG_20241105_142411_res6rq.jpg"
                        alt="About Me"
                        className="rounded-lg shadow-lg max-h-[400px] w-auto object-cover"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
