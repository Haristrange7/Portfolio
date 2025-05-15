import React from "react";
const projects = [
    {
        id: 1,
        title: "Jobby Application",
        description: "Job Searching Portal, like Naukri. Username: rahul, Password: rahul@2021",
        imageUrl: "https://assets.ccbp.in/frontend/react-js/logo-img.png",
        projectUrl: "https://jobbyapzp.ccbp.tech",
        skills: ["React Js", "Bootstrap", "Node Js", "Express Js"],
        imageStyle: {objectFit: "contain"},
    },
    {
        id: 2,
        title: "Nxt Watch Application",
        description: "Video Streaming Platform like Youtube. Username: rahul, Password: rahul@2021",
        imageUrl: "https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png",
        projectUrl: "https://nxtytwatch.ccbp.tech",
        skills: ["Node.js", "Express", "MongoDB"],
        imageStyle: { objectFit: "contain" },
    },
    {
        id: 3,
        title: "Fly Buy",
        description: "Responsive E-Commerce Application",
        imageUrl: "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/ecommerce-website-logo-img.png",
        projectUrl: "https://flybuy.ccbp.tech",
        skills: ["HTML", "CSS", "Bootstrap", "Flexbox"],
        imageStyle: { objectFit: "contain" },
    },
    {
        id: 4,
        title: "Rock Paper Scissors",
        description: "Rock Paper Scissors E-game Application.",
        imageUrl: "https://miro.medium.com/v2/resize:fit:1000/0*pwDqZoXvHo79MoT7.png",
        projectUrl: "https://stonegamez.ccbp.tech/",
        skills: ["Bootstrap", "ReactJs"],
        imageStyle: {objectFit:"contain"},
    },
    {
        id: 5,
        title: "Dood Technologies",
        description: "Company's Official Website.",
        imageUrl: "https://res.cloudinary.com/dx5lg8mei/image/upload/v1744600592/Doods_Technolo_1_a70qfs.jpg",
        projectUrl: "https://doodstechnology.netlify.app/",
        skills: ["React Js", "Tailwind CSS"],
        imageStyle: { objectFit: "contain" },
    },
    {
        id: 6,
        title: "Cyber Technologies",
        description: "Company's Official Website.",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRdblf3UxMKXKrQFHjBhqpyKtlu5ZwLQVmARk256YVRJa4VqzLY5lx-_b2i4LoerUjxg&usqp=CAU",
        projectUrl: "https://01-demo-home.netlify.app/",
        skills: ["Java", "Spring Boot", "MySQL"],
        imageStyle: {objectFit:"cover"},
    },
];

const Projects = () => {
    return (
        <div className="p-6 bg-gray-800 min-h-screen">
            <h1 className="text-3xl font-bold text-center mb-8 text-white">My Projects</h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <a
                        key={project.id}
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-4 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 group relative overflow-hidden"
                    >
                        <img
                            src={project.imageUrl}
                            alt={project.title}
                            style={project.imageStyle}
                            className="w-full h-40 rounded-md mb-4"
                        />
                        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                        <p className="text-gray-600 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center text-center p-4">
                            {project.description}
                        </p>
                        <ul className="text-sm text-gray-500">
                            {project.skills.map((skill, index) => (
                                <li key={index} className="inline-block mr-2">
                                    <span className="bg-gray-200 px-2 py-1 rounded">{skill}</span>
                                </li>
                            ))}
                        </ul>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;