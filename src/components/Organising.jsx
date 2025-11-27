// import React, { useState, useEffect } from "react";
import React, { useLayoutEffect } from "react";
import Image from "./Image";
import bg from "../assets/organising.jpg";
import o1 from "../assets/org/1.jpg";
import o2 from "../assets/org/2.jpg";
import o3 from "../assets/org/3.jpg";
import o4 from "../assets/org/4.jpg";
import o5 from "../assets/org/5.jpg";
import o6 from "../assets/org/6.jpg";
import o7 from "../assets/org/7.jpg";
import o8 from "../assets/org/8.jpg";
import o9 from "../assets/org/9.jpg";
import o10 from "../assets/org/10.jpg";
import o11 from "../assets/org/11.jpg";
import o12 from "../assets/org/12.jpg";
import o13 from "../assets/org/13.jpg";
import o14 from "../assets/org/14.jpg";
import o15 from "../assets/org/15.jpg";
import o16 from "../assets/org/16.jpg";
import o17 from "../assets/org/17.jpg";
import o18 from "../assets/org/18.jpg";
import o19 from "../assets/org/19.jpg";
import o20 from "../assets/org/20.jpg";
import o21 from "../assets/org/21.jpg";
import gsap from "gsap";

export default function Organising() {
  const categories = {
    patron: {
      title: "Patron",
      people: [
        {
          img: o1,
          name: "Prof. Rajeev Tripathi",
          university: "Director, MNNIT Allahabad",
        },
      ],
    },

    general: {
      title: "General Chair",
      people: [
        {
          img: o2,
          name: "Prof. R.K. Singh",
          university: "Electrical Engineering Department, MNNIT Allahabad",
        },
      ],
    },

    conference: {
      title: "Conference Chair(s)",
      people: [
        {
          img: o3,
          name: "Dr. Nitin Singh",
          university: "Electrical Engineering Department",
        },
        {
          img: o4,
          name: "Dr. K.K. Mishra",
          university: "Computer Science and Engineering Department",
        },
      ],
    },

    technical: {
      title: "Technical Program Chair(s)",
      people: [
        {
          img: o5,
          name: "Prof. V.S. Tripathi",
          university: "Electronics and Communications Department",
        },
        {
          img: o6,
          name: "Dr. Navneet Kumar Singh",
          university: "Electrical Engineering Department",
        },
      ],
    },

    publication: {
      title: "Publication Chair(s)",
      people: [
        {
          img: o7,
          name: "Prof. R.M. Singh",
          university: "Civil Engineering Department",
        },
        {
          img: o8,
          name: "Dr. Pitam Singh",
          university: "Mathematics",
        },
      ],
    },

    publicity: {
      title: "Publicity Chair(s)",
      people: [
        {
          img: o9,
          name: "Prof. Anil Kumar Singh",
          university: "Computer Science and Engineering Department",
        },
        {
          img: o10,
          name: "Dr. Ashish Maurya",
          university: "Computer Science and Engineering Department",
        },
      ],
    },

    finance: {
      title: "Finance Chair / Treasurer",
      people: [
        {
          img: o11,
          name: "Dr. Nekram Rawal",
          university: "Civil Engineering Department",
        },
      ],
    },

    special: {
      title: "Special Sessions / Tutorial Chair(s)",
      people: [
        {
          img: o12,
          name: "Prof. Ajay Kumar Singh",
          university: "Civil Engineering Department",
        },
        {
          img: o13,
          name: "Dr. Rupesh Dewang",
          university: "Computer Science and Engineering Department",
        },
      ],
    },

    workshop: {
      title: "Workshop Chair(s)",
      people: [
        {
          img: o14,
          name: "Dr. Manish Tiwari",
          university: "Electronics and Communications Department",
        },
        {
          img: o15,
          name: "Dr. Ranvijay",
          university: "Computer Science and Engineering Department",
        },
      ],
    },

    hospitality: {
      title: "Hospitality Chair(s)",
      people: [
        {
          img: o16,
          name: "Dr. Anoj Kumar",
          university: "Computer Science and Engineering Department",
        },
        {
          img: o17,
          name: "Dr. Rajitha B",
          university: "Computer Science and Engineering Department",
        },
      ],
    },

    web: {
      title: "Web Management Chair(s)",
      people: [
        {
          img: o18,
          name: "Dr. Dinesh Singh",
          university: "Computer Science and Engineering Department",
        },
        {
          img: o19,
          name: "Dr. M.V. Naik",
          university: "Electrical Engineering Department",
        },
      ],
    },

    organising: {
      title: "Organising Secretary",
      people: [
        {
          img: o20,
          name: "Dr. Niraj Kumar Choudhary",
          university: "Electrical Engineering Department",
        },
        {
          img: o21,
          name: "Dr. Navjot Singh",
          university: "Computer Science and Engineering Department",
        },
      ],
    },
  };

  // ⭐ GSAP Animation Runs Once on Mount
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".profile-card", {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.15,
      });
    });
    return () => ctx.revert();
  }, []);


  return (
    <>
      {/* Header Section */}
      <div className="w-full">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="relative h-[400px] bg-cover bg-center"
        >
          <div className="absolute inset-0 bg-black/65"></div>

          <div className="relative z-10 h-full flex items-center justify-center">
            <h1 className="text-6xl font-light text-white text-center">
              Organising Committee
            </h1>
          </div>
        </div>
      </div>

      {/* Display All Categories */}
      {Object.keys(categories).map((key) => (
        <div key={key} className="flex flex-col justify-center items-center my-24 px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-light mb-14">
            {categories[key].title}
          </h1>

          <div className="flex flex-wrap justify-center gap-20">
            {categories[key].people.map((person, idx) => (
              <div key={idx} className="profile-card">
                <Image
                  img={person.img}
                  name={person.name}
                  university={person.university}
                />
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
