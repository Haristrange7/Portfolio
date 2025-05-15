import React from "react";

const skills = [
    {
        name: "HTML",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/html5-logo-31813_udxo3g.png",
    },
    {
        name: "CSS",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526701/icons8-css-logo-480_xeqbwy.png",
    },
    {
        name: "JavaScript",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-javascript-480_afdeqc.png",
    },
    {
        name: "React Js",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526106/1174949_js_react_js_logo_react_react_native_icon_zwdzxb.png",
    },
    {
        name: "Node Js",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/1012818_code_development_logo_nodejs_icon_bfggzj.png",
    },
    {
        name: "Git",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/2993773_git_social_media_icon_qlx8xs.png",
    },
    {
        name: "Tailwind CSS",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526157/icons8-tailwindcss-480_gix3ml.png",
    },
    {
        name: "Bootstrap",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526318/icons8-bootstrap-240_gutyn5.png",
    },
    {
        name: "PostgreSQL",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-postgresql-480_gp84jf.png",
    },
    {
        name: "SQLite",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526643/SQLite_rlulf4.png",
    },
    {
        name: "Java",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526105/4373217_java_logo_logos_icon_o6ll8s.png",
    },
    {
        name: "Spring Boot",
        image:
            "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744526317/icons8-spring-boot-480_vucs9a.png",
    },
];

const Skills = () => {
    return (
        <div className="flex flex-col items-center justify-around bg-gray-600 mx-auto min-h-screen min-w-screen p-24">
            <h2 className="text-3xl font-bold text-center text-[35px] mb-6 text-white">My Skills</h2>
            <div className="flex flex-wrap justify-center gap-4">
                {skills.map((skill, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center justify-center bg-white/20 backdrop-blur-md p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:bg-gray-700 transition-colors duration-300 w-60 h-50"
                    >
                        <img
                            src={skill.image}
                            alt={skill.name}
                            className="w-24 h-24 mb-2 object-contain"
                        />
                        <p className="text-lg font-medium text-white">{skill.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
