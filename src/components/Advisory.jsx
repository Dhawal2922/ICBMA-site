import React, { useState } from "react";
import Image from "./Image";
import bg from "../assets/registration.jpg";

import i19 from "../assets/international/19.jpg";
import i20 from "../assets/international/20.jpg";
import i21 from "../assets/international/21.gif";
import i22 from "../assets/international/22.jpg";
import i23 from "../assets/international/23.jpg";
import i24 from "../assets/international/24.jpg";
import i25 from "../assets/international/25.jpg";
import i27 from "../assets/international/27.jpg";
import i28 from "../assets/international/28.jpg";
import i29 from "../assets/international/29.jpg";

import n1 from "../assets/national/1.jpg";
import n2 from "../assets/national/2.jpg";
import n6 from "../assets/national/6.jpg";
import n8 from "../assets/national/8.jpg";
import n9 from "../assets/national/9.jpg";
import n10 from "../assets/national/10.jpg";
import n11 from "../assets/national/11.jpg";
import n13 from "../assets/national/13.jpg";
import n14 from "../assets/national/14.jpg";
import n15 from "../assets/national/15.jpg";
import n16 from "../assets/national/16.jpg";
import n17 from "../assets/national/17.jpg";
import n18 from "../assets/national/18.jpg";
import n26 from "../assets/national/26.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// ------------ REAL MEMBER DATA ------------ //

const international = [
  {
    img: i19,
    name: "Prof. Janusz Kacprzyk",
    university:
      "Systems Research Institute, Polish Academy of Sciences, Poland"
  },
  {
    img: i20,
    name: "Prof. Sanjiv K. Bhatia",
    university: "University of Missouri, St. Louis, USA"
  },
  {
    img: i21,
    name: "Prof. Yong Wang",
    university: "Central South University, China"
  },
  {
    img: i22,
    name: "Dr. Peter Mueller",
    university: "IBM Zurich Research Laboratory, Switzerland"
  },
  {
    img: i23,
    name: "Prof. Ajay Gupta",
    university: "Western Michigan University, USA"
  },
  {
    img: i24,
    name: "Prof. Edward David Moreno Ordonez",
    university: "Federal University of Sergipe, Brazil"
  },
  {
    img: i25,
    name: "Prof. Victor Chang",
    university: "Teesside University, UK"
  },
  {
    img: i29,
    name: "Philippe Fournier-Viger",
    university: "Harbin Institute of Technology (Shenzhen), China"
  },
  {
    img: i27,
    name: "Prof. Sajjan G. Shiva",
    university: "The University of Memphis, USA"
  },
  {
    img: i28,
    name: "Prof. Dimiter Velev",
    university:
      "University of National and World Economy, Bulgaria"
  }
];

const national = [
  {
    img: n15,
    name: "Prof. Geetika",
    university: "School of Management Studies"
  },
  {
    img: n16,
    name: "Prof. M. M. Gore",
    university: "Computer Science and Engineering"
  },
  {
    img: n17,
    name: "Prof. Rakesh Narain",
    university: "Mechanical Engineering"
  },
  {
    img: n18,
    name: "Prof. K. N. Pandey",
    university: "Mechanical Engineering"
  },
  {
    img: n1,
    name: "Dr. Ramesh Pandey",
    university: "Applied Mechanics"
  },
  {
    img: n2,
    name: "Dr. Vishnu Agarwal",
    university: "Biotechnology"
  },
  {
    img: n6,
    name: "Dr. Sushil Kumar",
    university: "Chemical Engineering"
  },
  {
    img: n8,
    name: "Prof. R. C. Vaishya",
    university: "Civil Engineering"
  },
  {
    img: n9,
    name: "Prof. D. S. Kushwaha",
    university: "Computer Science and Engineering"
  },
  {
    img: n10,
    name: "Prof. Asheesh K. Singh",
    university: "Electrical Engineering"
  },
  {
    img: n11,
    name: "Prof. Amit Dhawan",
    university: "Electronics and Communication Engineering"
  },
  {
    img: n13,
    name: "Dr. Tripti Singh",
    university: "School of Management Studies"
  },
  {
    img: n14,
    name: "Prof. R. S. Yadav",
    university: "GIS Cell"
  },
  {
    img: n26,
    name: "Prof. G. P. Sahu",
    university: "MNNIT Allahabad"
  }
];

export default function Advisory() {
  const [activeTab, setActiveTab] = useState("international");

  const currentList =
    activeTab === "international" ? international : national;

  return (
    <>
      {/* Header */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl font-light text-white text-center">
            Advisory Board
          </h1>
        </div>
      </div>

      {/* ---------- BUTTON TOGGLES ---------- */}
      <div className="flex justify-center gap-6 mt-10">
        <button
          className={`px-6 py-2 rounded-full border text-lg transition ${
            activeTab === "international"
              ? "bg-blue-900 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setActiveTab("international")}
        >
          International
        </button>

        <button
          className={`px-6 py-2 rounded-full border text-lg transition ${
            activeTab === "national"
              ? "bg-blue-900 text-white border-blue-600"
              : "bg-white text-gray-700 border-gray-300"
          }`}
          onClick={() => setActiveTab("national")}
        >
          National
        </button>
      </div>

      {/* ---------- CAROUSEL ---------- */}
      <h2 className="text-4xl font-light text-center mt-20 mb-10">
        {activeTab === "international"
          ? "International Advisory Board"
          : "National Advisory Board"}
      </h2>

      <div className="w-[90%] mx-auto mt-8 mb-28">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={4}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
        >
          {currentList.map((person, idx) => (
            <SwiperSlide key={idx} className="mb-10">
              <Image
                img={person.img}
                name={person.name}
                university={person.university}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}