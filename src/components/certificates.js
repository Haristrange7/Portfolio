import React from "react";

// Import local PDF files
import Certificate1 from "../assets/certificate (1).pdf";
import Certificate2 from "../assets/certificate (2).pdf";
import Certificate3 from "../assets/certificate (3).pdf";
import Certificate4 from "../assets/certificate (4).pdf";
import Certificate5 from "../assets/certificate (5).pdf";
import Certificate6 from "../assets/certificate (6).pdf";
import Certificate7 from "../assets/certificate (7).pdf";
import Certificate8 from "../assets/certificate (8).pdf";
import Certificate9 from "../assets/certificate (9).pdf";
import Certificate10 from "../assets/certificate (10).pdf";
import Certificate11 from "../assets/certificate (11).pdf";

const certificates = [
    {
        id: 1,
        title: "Certificate of Completion Git",
        issuer: "Nxt Wave",
        date: "March 2024",
        pdf: Certificate10, // Use the imported PDF
    },
    {
        id: 2,
        title: "Certificate of Completion React Js",
        issuer: "Nxt Wave",
        date: "July 2024",
        pdf: Certificate1, // Use the imported PDF
    },
    {
        id: 3,
        title: "Certificate of Completion JavaScript",
        issuer: "Nxt Wave",
        date: "February 2024",
        pdf: Certificate8, // Use the imported PDF
    },
    {
        id: 4,
        title: "Certificate of Completion Sqlite",
        issuer: "Nxt Wave",
        date: "January 2024",
        pdf: Certificate4, // Use the imported PDF
    },
    {
        id: 5,
        title: "Certificate of Completion Python",
        issuer: "Nxt Wave",
        date: "September 2023",
        pdf: Certificate5, // Use the imported PDF
    },
    {
        id: 6,
        title: "Certificate of Completion Node js",
        issuer: "Nxt Wave",
        date: "July 2024",
        pdf: Certificate11, // Use the imported PDF
    },
    {
        id: 7,
        title: "Certificate of Completion Responsive Web Designing - Flexbox",
        issuer: "Nxt Wave",
        date: "February 2024",
        pdf: Certificate7, // Use the imported PDF
    },
    {
        id: 8,
        title: "Certificate of Completion Fundamental Skills",
        issuer: "Nxt Wave",
        date: "October 2023",
        pdf: Certificate6, // Use the imported PDF
    },
    {
        id: 9,
        title: "Certificate of Completion Responsive Web Designing - Bootstrap",
        issuer: "Nxt Wave",
        date: "August 2023",
        pdf: Certificate9, // Use the imported PDF
    },
    {
        id: 10,
        title: "Certificate of Completion Static Web Designing - HTML CSS & Bootstrap",
        issuer: "Nxt Wave",
        date: "March 2023",
        pdf: Certificate2, // Use the imported PDF
    },
    {
        id: 11,
        title: "Certificate of Completion Dynamic Web Designing - JavaScript ",
        issuer: "Nxt Wave",
        date: "December 2023",
        pdf: Certificate3, // Use the imported PDF
    },
];

const Certificates = () => {
    return (
        <div className="bg-gray-700 py-10">
            <div className="container mx-auto px-4">
                <h1 className=" text-4xl font-bold text-center mb-8 text-white">My Certificates</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {certificates.map((certificate) => (
                        <div
                            key={certificate.id}
                            className="bg-white/5 shadow-md rounded-lg backdrop-blur-2xl overflow-hidden"
                        >
                            <iframe
                                src={certificate.pdf}
                                title={certificate.title}
                                className="w-full h-48"
                            ></iframe>
                            <div className="p-4">
                                <h3 className="text-white text-lg font-semibold">{certificate.title}</h3>
                                <p className="text-blue-500 font-semibold">{certificate.issuer}</p>
                                <p className="text-orange-200 text-sm">{certificate.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Certificates;