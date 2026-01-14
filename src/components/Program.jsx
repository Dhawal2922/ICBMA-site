import React, { useState } from "react";
import bg from "../assets/registration.jpg";
import c4 from "../assets/committee/4.jpg";
import c5 from "../assets/committee/5.gif";
import c6 from "../assets/committee/6.jpg";
import c7 from "../assets/committee/7.jpg";
import c8 from "../assets/committee/8.jpg";
import c9 from "../assets/committee/9.jpg";
import c11 from "../assets/committee/11.jpg";
import c12 from "../assets/committee/12.jpg";
import c13 from "../assets/committee/13.jpg";
import c14 from "../assets/committee/14.jpg";
import c15 from "../assets/committee/15.jpg";
import c16 from "../assets/committee/16.jpg";
import c17 from "../assets/committee/17.jpg";
import c18 from "../assets/committee/18.jpg";
import c19 from "../assets/committee/19.jpg";
import c20 from "../assets/committee/20.jpg";
import c21 from "../assets/committee/21.jpg";
import c22 from "../assets/committee/22.jpg";
import c23 from "../assets/committee/23.jpg";
import c24 from "../assets/committee/24.jpg";
import c25 from "../assets/committee/25.jpg";
import c26 from "../assets/committee/26.jpg";
import c27 from "../assets/committee/27.jpg";
import c28 from "../assets/committee/28.jpg";
import c29 from "../assets/committee/29.jpg";
import c30 from "../assets/committee/30.jpg";
import c31 from "../assets/committee/31.jpg";
import c32 from "../assets/committee/32.jpg";
import c33 from "../assets/committee/33.jpg";
import c34 from "../assets/committee/34.jpg";
import c35 from "../assets/committee/35.jpg";
import c36 from "../assets/committee/36.jpg";
import c37 from "../assets/committee/37.jpg";
import c38 from "../assets/committee/38.jpg";
import c39 from "../assets/committee/39.jpg";
import c40 from "../assets/committee/40.jpg";
import c41 from "../assets/committee/41.jpg";
import c42 from "../assets/committee/42.jpg";
import c43 from "../assets/committee/43.jpg";
import c44 from "../assets/committee/44.jpg";
import c45 from "../assets/committee/45.jpg";
import c46 from "../assets/committee/46.gif";
import Image from "./Image"; // make sure this path is correct

// ---------------- MEMBER LIST ---------------- //
const committee = [
  { img: c4, name: "Dr. Pavel A. Osipov", university: "Riga Technical University, Latvia" },
  { img: c5, name: "Prof. Jose Roberto Castilho Piqueira", university: "University of São Paulo, Brazil" },
  { img: c6, name: "Dr. I. Joe Louis Paul", university: "SSN College of Engineering, India" },
  { img: c7, name: "Dr. K. K. Chaturvedi", university: "Indian Agricultural Statistics Research Institute, India" },
  { img: c8, name: "Dr. Anastasios (Tasos) Doulamis", university: "National Technical University of Athens, Greece" },
  { img: c9, name: "Dr. Somnath Banerjee", university: "University of Milano-Bicocca, Italy" },
  { img: c11, name: "Prof. M. P. Singh", university: "NIT Patna, India" },
  { img: c12, name: "Dr. Ashwani Kush", university: "Kurukshetra University, India" },
  { img: c13, name: "Dr. Debashis Das", university: "NIT Hamirpur, India" },
  { img: c14, name: "Dr. A. K. Verma", university: "Thapar Institute of Engineering & Technology, India" },
  { img: c15, name: "Dr. Biswa Mohan Acharya", university: "SOA University, India" },
  { img: c13, name: "Dr. Fernando Zacarias Flores", university: "Universidad Autonoma de Puebla, Mexico" },
  { img: c16, name: "Dr. Michael McGuire", university: "University of Victoria, Canada" },
  { img: c17, name: "Dr. Ching-Hao Lai", university: "Industrial Technology Research Institute of Taiwan, Taiwan" },
  { img: c18, name: "Dr. Ruggero Donida Labati", university: "University of Milan, Italy" },
  { img: c19, name: "Prof. M.M. Sufyan Beg", university: "Aligarh Muslim University, India" },
  { img: c20, name: "Dr. Bhaskar Biswas", university: "IIT BHU, India" },
  { img: c21, name: "Dr. S. K. Mishra", university: "IIT BHU, India" },
  { img: c22, name: "Dr. Pilli Emmanuel Shubhakar", university: "MNIT Jaipur, India" },
  { img: c23, name: "Dr. Sushant Upadhyaya", university: "MNIT Jaipur, India" },
  { img: c24, name: "Prof. K. K. Shukla", university: "IIT BHU, India" },
  { img: c25, name: "Dr. Yannis Karamitsos", university: "Rochester Institute of Technology - Dubai Campus" },
  { img: c26, name: "Prof. Gang Wang", university: "Hefei University of Technology, China" },
  { img: c27, name: "Dr. Saurabh Chaudhury", university: "NIT Silchar, India" },
  { img: c28, name: "Dr. Neetesh Kumar", university: "IIT Roorkee, India" },
  { img: c29, name: "Dr. Hemant Kumar Aggarwal", university: "The University of IOWA, USA" },
  { img: c30, name: "Dr. M. Tanveer", university: "IIT Indore, India" },
  { img: c31, name: "Dr. Omprakash Kaiwartya", university: "Nottingham Trent University, England" },
  { img: c32, name: "Dr. Deepak Gupta", university: "NIT Arunachal Pradesh, India" },
  { img: c33, name: "Dr. Krishan Kumar", university: "NIT Uttarakhand, India" },
  { img: c34, name: "Dr. Vrijendra Singh", university: "IIIT Allahabad, India" },
  { img: c35, name: "Dr. Diksha Shukla", university: "University of Wyoming, USA" },
  { img: c36, name: "Dr. Bijil Prakash", university: "Presidency University, India" },
  { img: c37, name: "Dr. Amit Pimpalkar", university: "G. H. Raisoni AET, Nagpur, India" },
  { img: c38, name: "Dr. Vahid Abolghasemi", university: "University of Essex, UK" },
  { img: c39, name: "Dr. P. Vijayakumar", university: "VIT Chennai, India" },
  { img: c40, name: "Dr. Dheerendra Mishra", university: "IIT Kharagpur, India" },
  { img: c41, name: "Dr. Yogendra Kumar Prajapati", university: "MNNIT Allahabad, India" },
  { img: c42, name: "Dr. Gadadhar Sahoo", university: "IIT (ISM) Dhanbad, India" },
  { img: c43, name: "Dr. Amar Buchade", university: "Pune Institute of Computer Technology, Pune, India" },
  { img: c44, name: "Prof. Paulo Francisco Butzen", university: "Federal University of Rio Grande Sul, Brazil" },
  { img: c45, name: "Prof. Joberto S. B. Martins", university: "Salvador University, Brazil" },
  { img: c46, name: "Dr. Nasimuddin", university: "Institute for Infocomm Research A-STAR, Singapore" }
];

const Program = () => {
  const [page, setPage] = useState(1);

  const pageSize = 8;
  const totalPages = Math.ceil(committee.length / pageSize);

  const currentData = committee.slice((page - 1) * pageSize, page * pageSize);

  return (
    <>
      {/* Header */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-white text-center px-4">
            Technical Program Committee
          </h1>
        </div>
      </div>

      {/* PAGINATED CARD GRID */}
      <div className="w-[90%] mx-auto mt-20 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 justify-items-center">
          {currentData.map((member, idx) => (
            <Image
              key={idx}
              img={member.img}
              name={member.name}
              university={member.university}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-12 gap-4">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className={`px-5 py-2 rounded-lg border ${
              page === 1
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Previous
          </button>

          <span className="px-5 py-2 text-lg">
            Page {page} of {totalPages}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className={`px-5 py-2 rounded-lg border ${
              page === totalPages
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Program;