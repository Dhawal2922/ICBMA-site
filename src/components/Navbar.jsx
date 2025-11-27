import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";
import logo from "../assets/ICBMA_2026.svg";
import bennett from "../assets/bennett-university.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const registerRef = useRef(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  /* ---------------------- NAVBAR COLOR CHANGE ---------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const triggerPoint = window.innerHeight * 0.2;
      setScrolled(scrollTop > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------------------- REGISTER BUTTON ANIMATION ---------------------- */
  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.to(registerRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    });

    const handleScroll = () => {
      if (window.scrollY > 120) {
        tl.play();
      } else {
        tl.reverse();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-500 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between relative">
        
        {/* ---------------------- LOGO ---------------------- */}
        <div className="logo h-[50px] w-[78px] my-5">
          <a href="/">
            <img
              src={logo}
              alt=""
              className={`h-37px w-76px inline-block ${
                scrolled
                  ? "brightness-50 contrast-170 saturate-150 hue-rotate-0" // Darker blue
                  : "opacity-80 invert hue-rotate-180" // Light for dark bg
              }`}
            />
          </a>
        </div>

        

        <button
          className="md:hidden text-2xl absolute right-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* ---------------------- MENU ---------------------- */}
        <ul className="hidden md:flex items-center space-x-5 text-xs tracking-wide">
          <a href="/">
            <li className="hover:text-gray-500 cursor-pointer">HOME</li>
          </a>

          {/* COMMITTEES */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("committees")}
          >
            <div className="flex items-center gap-1">
              COMMITTEES <IoIosArrowDown />
            </div>

            {openMenu === "committees" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <a href="/Advisory">
                  <p className="hover:text-blue-600 cursor-pointer mb-3">
                    ADVISORY BOARD
                  </p>
                </a>
                <a href="/Organising">
                  <p className="hover:text-blue-600 cursor-pointer mb-3">
                    ORGANISING COMMITTEE
                  </p>
                </a>
                <a href="/Program">
                  <p className="hover:text-blue-600 cursor-pointer">
                    TECHNICAL PROGRAM COMMITTEE
                  </p>
                </a>
              </div>
            )}
          </li>

          {/* CALLS */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("calls")}
          >
            <div className="flex items-center gap-1">
              CALLS <IoIosArrowDown />
            </div>

            {openMenu === "calls" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <a
                  href="/Call_for_papers"
                  className="hover:text-blue-600 cursor-pointer"
                >
                  CALL FOR PAPERS
                </a>

                <a href="/Submission_instruction">
                  <p className="hover:text-blue-600 cursor-pointer mt-3">
                    SUBMISSION INSTRUCTION
                  </p>
                </a>
              </div>
            )}
          </li>

          <a href="/Registration">
            <li className="hover:text-gray-500 cursor-pointer">REGISTRATION</li>
          </a>

          {/* PROGRAM */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("program")}
          >
            <div className="flex items-center gap-1">
              PROGRAM <IoIosArrowDown />
            </div>

            {openMenu === "program" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <a href="/Keynotes">
                  <p className="hover:text-blue-600 cursor-pointer mb-2">
                    KEYNOTES AND TUTORIALS
                  </p>
                </a>

                <a href="/Schedule">
                  <p className="hover:text-blue-600 cursor-pointer">SCHEDULE</p>
                </a>
              </div>
            )}
          </li>

          <a href="/Venue">
            <li className="hover:text-gray-500 cursor-pointer">VENUE</li>
          </a>

          {/* PAST CONFERENCES */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("past")}
          >
            <div className="flex items-center gap-1">
              PAST CONFERENCES <IoIosArrowDown />
            </div>

            {openMenu === "past" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
                <a href="https://www.mnnit.ac.in/icbma2020/index.html">
                  <p className="hover:text-blue-600 cursor-pointer">
                    ICBMA 2020
                  </p>
                </a>

              </div>
            )}
          </li>

          {/* ONLINE PAPER SUBMISSION */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("online")}
          >
            <div className="flex items-center gap-1">
              ONLINE PAPER SUBMISSION <IoIosArrowDown />
            </div>

            {openMenu === "online" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
                <a href="https://easychair.org/account2/signin?l=2332274231518289330">
                  <p className="hover:text-blue-600 cursor-pointer">
                    Click here
                  </p>
                </a>
              </div>
            )}
          </li>
        </ul>

        {/* RIGHT SIDE LOGO */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[40%] flex justify-center sm:static sm:translate-x-0 sm:left-auto sm:w-[15%]">
          <img src={bennett} alt="" className="w-full" />
        </div>
        
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-xl text-black border border-white/20 shadow-lg p-6 transform transition-transform duration-300 z-[9999] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="text-2xl mb-6"
          onClick={() => setMobileOpen(false)}
        >
          ✕
        </button>

        <div className="flex flex-col space-y-4 text-sm">
          <a href="/" onClick={() => setMobileOpen(false)}>HOME</a>
          <a href="/Advisory" onClick={() => setMobileOpen(false)}>ADVISORY BOARD</a>
          <a href="/Organising" onClick={() => setMobileOpen(false)}>ORGANISING COMMITTEE</a>
          <a href="/Program" onClick={() => setMobileOpen(false)}>TECHNICAL PROGRAM COMMITTEE</a>
          <a href="/Call_for_papers" onClick={() => setMobileOpen(false)}>CALL FOR PAPERS</a>
          <a href="/Submission_instruction" onClick={() => setMobileOpen(false)}>SUBMISSION INSTRUCTION</a>
          <a href="/Registration" onClick={() => setMobileOpen(false)}>REGISTRATION</a>
          <a href="/Keynotes" onClick={() => setMobileOpen(false)}>KEYNOTES & TUTORIALS</a>
          <a href="/Schedule" onClick={() => setMobileOpen(false)}>SCHEDULE</a>
          <a href="/Venue" onClick={() => setMobileOpen(false)}>VENUE</a>
          <a href="https://www.mnnit.ac.in/icbma2020/index.html">ICBMA 2020</a>
          <a href="https://www.mnnit.ac.in/icbma2021/">ICBMA 2021</a>
          <a href="https://easychair.org/account2/signin?l=2332274231518289330">
            ONLINE PAPER SUBMISSION
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
