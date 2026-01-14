// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { gsap } from "gsap";
// import logo from "../assets/ICBMA_2026.svg";
// import bennett from "../assets/bennett-university.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const registerRef = useRef(null);

//   const toggleMenu = (name) => {
//     setOpenMenu(openMenu === name ? null : name);
//   };

//   /* ---------------------- NAVBAR COLOR CHANGE ---------------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const triggerPoint = window.innerHeight * 0.2;
//       setScrolled(scrollTop > triggerPoint);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------------- REGISTER BUTTON ANIMATION ---------------------- */
//   useEffect(() => {
//     const tl = gsap.timeline({ paused: true });

//     tl.to(registerRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 120) {
//         tl.play();
//       } else {
//         tl.reverse();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 w-full z-500 transition-all duration-500 ${
//         scrolled
//           ? "bg-white/90 text-black shadow-md"
//           : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-[90%] mx-auto flex items-center justify-between relative">
        
//         {/* ---------------------- LOGO ---------------------- */}
//         <div className="logo h-[50px] w-[78px] my-5">
//           <Link to="">
//             <img
//               src={logo}
//               alt=""
//               className={`h-37px w-76px inline-block ${
//                 scrolled
//                   ? "brightness-50 contrast-170 saturate-150 hue-rotate-0" // Darker blue
//                   : "opacity-80 invert hue-rotate-180" // Light for dark bg
//               }`}
//             />
//           </Link>
//         </div>

        

//         <button
//           className="md:hidden text-2xl absolute right-0"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           ☰
//         </button>

//         {/* ---------------------- MENU ---------------------- */}
//         <ul className="hidden md:flex items-center space-x-5 text-[13px] font-bold tracking-wide">
//           <Link to="">
//             <li className="hover:text-gray-500 cursor-pointer">HOME</li>
//           </Link>

//           {/* COMMITTEES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("committees")}
//           >
//             <div className="flex items-center gap-1">
//               COMMITTEES <IoIosArrowDown />
//             </div>

//             {openMenu === "committees" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Advisory">
//                   <p className="hover:text-blue-600 cursor-pointer mb-3">
//                     ADVISORY BOARD
//                   </p>
//                 </Link>
//                 <Link to="Organising">
//                   <p className="hover:text-blue-600 cursor-pointer mb-3">
//                     ORGANISING COMMITTEE
//                   </p>
//                 </Link>
//                 <Link to="Program">
//                   <p className="hover:text-blue-600 cursor-pointer">
//                     TECHNICAL PROGRAM COMMITTEE
//                   </p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           {/* CALLS */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("calls")}
//           >
//             <div className="flex items-center gap-1">
//               CALLS <IoIosArrowDown />
//             </div>

//             {openMenu === "calls" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link
//                   to="Call_for_papers"
//                   className="hover:text-blue-600 cursor-pointer"
//                 >
//                   CALL FOR PAPERS
//                 </Link>

//                 <Link to="Submission_instruction">
//                   <p className="hover:text-blue-600 cursor-pointer mt-3">
//                     SUBMISSION INSTRUCTION
//                   </p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link to="Registration">
//             <li className="hover:text-gray-500 cursor-pointer">REGISTRATION</li>
//           </Link>

//           {/* PROGRAM */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("program")}
//           >
//             <div className="flex items-center gap-1">
//               PROGRAM <IoIosArrowDown />
//             </div>

//             {openMenu === "program" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Keynotes">
//                   <p className="hover:text-blue-600 cursor-pointer mb-2">
//                     KEYNOTES AND TUTORIALS
//                   </p>
//                 </Link>

//                 <Link to="Schedule">
//                   <p className="hover:text-blue-600 cursor-pointer">SCHEDULE</p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link to="Venue">
//             <li className="hover:text-gray-500 cursor-pointer">VENUE</li>
//           </Link>

//           {/* PAST CONFERENCES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("past")}
//           >
//             <div className="flex items-center gap-1">
//               PAST CONFERENCES <IoIosArrowDown />
//             </div>

//             {openMenu === "past" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://www.mnnit.ac.in/icbma2020/index.html">
//                   <p className="hover:text-blue-600 cursor-pointer">
//                     ICBMA 2020
//                   </p>
//                 </a>

//               </div>
//             )}
//           </li>

//           {/* ONLINE PAPER SUBMISSION */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("online")}
//           >
//             <div className="flex items-center gap-1">
//               ONLINE PAPER SUBMISSION <IoIosArrowDown />
//             </div>

//             {openMenu === "online" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://easychair.org/account2/signin?l=2332274231518289330">
//                   <p className="hover:text-blue-600 cursor-pointer">
//                     Click here
//                   </p>
//                 </a>
//               </div>
//             )}
//           </li>
//         </ul>

//         {/* RIGHT SIDE LOGO */}
//         <div className="absolute left-1/2 -translate-x-1/2 w-[40%] flex justify-center sm:static sm:translate-x-0 sm:left-auto sm:w-[15%]">
//           <img src={bennett} alt="" className="w-full" />
//         </div>
        
//       </div>

//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-xl text-black border border-white/20 shadow-lg p-6 transform transition-transform duration-300 z-[9999] ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         <button
//           className="text-2xl mb-6"
//           onClick={() => setMobileOpen(false)}
//         >
//           ✕
//         </button>

//         <div className="flex flex-col space-y-4 text-sm">
//           <Link to="" onClick={() => setMobileOpen(false)}>HOME</Link>
//           <Link to="Advisory" onClick={() => setMobileOpen(false)}>ADVISORY BOARD</Link>
//           <Link to="Organising" onClick={() => setMobileOpen(false)}>ORGANISING COMMITTEE</Link>
//           <Link to="Program" onClick={() => setMobileOpen(false)}>TECHNICAL PROGRAM COMMITTEE</Link>
//           <Link to="Call_for_papers" onClick={() => setMobileOpen(false)}>CALL FOR PAPERS</Link>
//           <Link to="Submission_instruction" onClick={() => setMobileOpen(false)}>SUBMISSION INSTRUCTION</Link>
//           <Link to="Registration" onClick={() => setMobileOpen(false)}>REGISTRATION</Link>
//           <Link to="Keynotes" onClick={() => setMobileOpen(false)}>KEYNOTES & TUTORIALS</Link>
//           <Link to="Schedule" onClick={() => setMobileOpen(false)}>SCHEDULE</Link>
//           <Link to="Venue" onClick={() => setMobileOpen(false)}>VENUE</Link>
//           <a href="https://www.mnnit.ac.in/icbma2020/index.html">ICBMA 2020</a>
//           <a href="https://www.mnnit.ac.in/icbma2021/">ICBMA 2021</a>
//           <a href="https://easychair.org/account2/signin?l=2332274231518289330">
//             ONLINE PAPER SUBMISSION
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { gsap } from "gsap";
// import logo from "../assets/ICBMA_2026.svg";
// import bennett from "../assets/bennett-university.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const registerRef = useRef(null);

//   const toggleMenu = (name) => {
//     setOpenMenu(openMenu === name ? null : name);
//   };

//   /* ---------------------- REGISTER BUTTON ANIMATION ---------------------- */
//   useEffect(() => {
//     const tl = gsap.timeline({ paused: true });

//     tl.to(registerRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 120) {
//         tl.play();
//       } else {
//         tl.reverse();
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className="sticky top-0 w-full z-500 bg-transparent text-black transition-all duration-500">
//       <div className="max-w-[90%] mx-auto flex items-center justify-between relative">
        
//         {/* ---------------------- LEFT LOGO ---------------------- */}
//         <div className="logo h-[50px] w-[78px] my-5">
//           <Link to="">
//             <img
//               src={logo}
//               alt=""
//               className="h-37px w-76px inline-block opacity-80 invert hue-rotate-180"
//             />
//           </Link>
//         </div>

//         {/* ---------------------- MOBILE TOGGLE ---------------------- */}
//         <button
//           className="md:hidden text-2xl absolute right-0"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           ☰
//         </button>

//         {/* ---------------------- DESKTOP MENU ---------------------- */}
//         <ul className="hidden md:flex items-center space-x-5 text-[13px] font-bold tracking-wide">
//           <Link to="">
//             <li className="hover:text-gray-500 cursor-pointer">HOME</li>
//           </Link>

//           {/* COMMITTEES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("committees")}
//           >
//             <div className="flex items-center gap-1">
//               COMMITTEES <IoIosArrowDown />
//             </div>

//             {openMenu === "committees" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Advisory">
//                   <p className="hover:text-blue-600 cursor-pointer mb-3">
//                     ADVISORY BOARD
//                   </p>
//                 </Link>
//                 <Link to="Organising">
//                   <p className="hover:text-blue-600 cursor-pointer mb-3">
//                     ORGANISING COMMITTEE
//                   </p>
//                 </Link>
//                 <Link to="Program">
//                   <p className="hover:text-blue-600 cursor-pointer">
//                     TECHNICAL PROGRAM COMMITTEE
//                   </p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           {/* CALLS */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("calls")}
//           >
//             <div className="flex items-center gap-1">
//               CALLS <IoIosArrowDown />
//             </div>

//             {openMenu === "calls" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Call_for_papers">
//                   <p className="hover:text-blue-600 cursor-pointer">CALL FOR PAPERS</p>
//                 </Link>

//                 <Link to="Submission_instruction">
//                   <p className="hover:text-blue-600 cursor-pointer mt-3">
//                     SUBMISSION INSTRUCTION
//                   </p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link to="Registration">
//             <li className="hover:text-gray-500 cursor-pointer">REGISTRATION</li>
//           </Link>

//           {/* PROGRAM */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("program")}
//           >
//             <div className="flex items-center gap-1">
//               PROGRAM <IoIosArrowDown />
//             </div>

//             {openMenu === "program" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Keynotes">
//                   <p className="hover:text-blue-600 cursor-pointer mb-2">KEYNOTES AND TUTORIALS</p>
//                 </Link>

//                 <Link to="Schedule">
//                   <p className="hover:text-blue-600 cursor-pointer">SCHEDULE</p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link to="Venue">
//             <li className="hover:text-gray-500 cursor-pointer">VENUE</li>
//           </Link>

//           {/* PAST CONFERENCES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("past")}
//           >
//             <div className="flex items-center gap-1">
//               PAST CONFERENCES <IoIosArrowDown />
//             </div>

//             {openMenu === "past" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://www.mnnit.ac.in/icbma2020/index.html">
//                   <p className="hover:text-blue-600 cursor-pointer">ICBMA 2020</p>
//                 </a>
//               </div>
//             )}
//           </li>

//           {/* ONLINE PAPER SUBMISSION */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("online")}
//           >
//             <div className="flex items-center gap-1">
//               ONLINE PAPER SUBMISSION <IoIosArrowDown />
//             </div>

//             {openMenu === "online" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://easychair.org/account2/signin?l=2332274231518289330">
//                   <p className="hover:text-blue-600 cursor-pointer">Click here</p>
//                 </a>
//               </div>
//             )}
//           </li>
//         </ul>

//         {/* ---------------------- RIGHT LOGO ---------------------- */}
//         <div className="absolute left-1/2 -translate-x-1/2 w-[40%] flex justify-center sm:static sm:translate-x-0 sm:left-auto sm:w-[15%]">
//           <img src={bennett} alt="" className="w-full" />
//         </div>

//       </div>

//       {/* ---------------------- MOBILE MENU ---------------------- */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-xl text-black border border-white/20 shadow-lg p-6 transform transition-transform duration-300 z-[9999] ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         <button className="text-2xl mb-6" onClick={() => setMobileOpen(false)}>
//           ✕
//         </button>

//         <div className="flex flex-col space-y-4 text-sm">
//           <Link to="" onClick={() => setMobileOpen(false)}>HOME</Link>
//           <Link to="Advisory" onClick={() => setMobileOpen(false)}>ADVISORY BOARD</Link>
//           <Link to="Organising" onClick={() => setMobileOpen(false)}>ORGANISING COMMITTEE</Link>
//           <Link to="Program" onClick={() => setMobileOpen(false)}>TECHNICAL PROGRAM COMMITTEE</Link>
//           <Link to="Call_for_papers" onClick={() => setMobileOpen(false)}>CALL FOR PAPERS</Link>
//           <Link to="Submission_instruction" onClick={() => setMobileOpen(false)}>SUBMISSION INSTRUCTION</Link>
//           <Link to="Registration" onClick={() => setMobileOpen(false)}>REGISTRATION</Link>
//           <Link to="Keynotes" onClick={() => setMobileOpen(false)}>KEYNOTES & TUTORIALS</Link>
//           <Link to="Schedule" onClick={() => setMobileOpen(false)}>SCHEDULE</Link>
//           <Link to="Venue" onClick={() => setMobileOpen(false)}>VENUE</Link>
//           <a href="https://www.mnnit.ac.in/icbma2020/index.html">ICBMA 2020</a>
//           <a href="https://www.mnnit.ac.in/icbma2021/">ICBMA 2021</a>
//           <a href="https://easychair.org/account2/signin?l=2332274231518289330">
//             ONLINE PAPER SUBMISSION
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React, { useEffect, useState, useRef } from "react";
// import { IoIosArrowDown } from "react-icons/io";
// import { gsap } from "gsap";
// import logo from "../assets/ICBMA_2026.svg";
// import bennett from "../assets/bennett-university.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [scrolled, setScrolled] = useState(false);
//   const [openMenu, setOpenMenu] = useState(null);
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const registerRef = useRef(null);

//   const toggleMenu = (name) => {
//     setOpenMenu(openMenu === name ? null : name);
//   };

//   /* ---------------------- NAVBAR COLOR CHANGE (100vh) ---------------------- */
//   useEffect(() => {
//     const handleScroll = () => {
//       const triggerPoint = window.innerHeight; // 100vh
//       setScrolled(window.scrollY > triggerPoint);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   /* ---------------------- REGISTER BUTTON ANIMATION ---------------------- */
//   useEffect(() => {
//     const tl = gsap.timeline({ paused: true });

//     tl.to(registerRef.current, {
//       opacity: 1,
//       y: 0,
//       duration: 0.8,
//       ease: "power3.out",
//     });

//     const handleScroll = () => {
//       if (window.scrollY > 120) tl.play();
//       else tl.reverse();
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`sticky top-0 w-full z-500 transition-all duration-500 ${
//         scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
//       }`}
//     >
//       <div className="max-w-[90%] mx-auto flex items-center justify-between relative">

//         {/* ---------------------- LOGO ---------------------- */}
//         <div className="logo h-[50px] w-[78px] my-5">
//           <Link to="">
//             <img
//               src={logo}
//               alt=""
//               className={`h-37px w-76px inline-block ${
//                 scrolled ? "" : "opacity-80 invert hue-rotate-180"
//               }`}
//             />
//           </Link>
//         </div>

//         {/* ---------------------- MOBILE TOGGLE ---------------------- */}
//         <button
//           className="md:hidden text-2xl absolute right-0"
//           onClick={() => setMobileOpen(!mobileOpen)}
//         >
//           ☰
//         </button>

//         {/* ---------------------- DESKTOP MENU ---------------------- */}
//         <ul className="hidden md:flex items-center space-x-5 text-[13px] font-bold tracking-wide">
//           <Link to="">
//             <li className="hover:text-gray-500 cursor-pointer">HOME</li>
//           </Link>

//           {/* COMMITTEES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("committees")}
//           >
//             <div className="flex items-center gap-1">
//               COMMITTEES <IoIosArrowDown />
//             </div>

//             {openMenu === "committees" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Advisory"><p className="hover:text-blue-600 mb-3">ADVISORY BOARD</p></Link>
//                 <Link to="Organising"><p className="hover:text-blue-600 mb-3">ORGANISING COMMITTEE</p></Link>
//                 <Link to="Program"><p className="hover:text-blue-600">TECHNICAL PROGRAM COMMITTEE</p></Link>
//               </div>
//             )}
//           </li>

//           {/* CALLS */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("calls")}
//           >
//             <div className="flex items-center gap-1">CALLS <IoIosArrowDown /></div>

//             {openMenu === "calls" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Call_for_papers"><p className="hover:text-blue-600">CALL FOR PAPERS</p></Link>
//                 <Link to="Submission_instruction">
//                   <p className="hover:text-blue-600 mt-3">SUBMISSION INSTRUCTION</p>
//                 </Link>
//               </div>
//             )}
//           </li>

//           <Link to="Registration">
//             <li className="hover:text-gray-500 cursor-pointer">REGISTRATION</li>
//           </Link>

//           {/* PROGRAM */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("program")}
//           >
//             <div className="flex items-center gap-1">PROGRAM <IoIosArrowDown /></div>

//             {openMenu === "program" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
//                 <Link to="Keynotes"><p className="hover:text-blue-600 mb-2">KEYNOTES AND TUTORIALS</p></Link>
//                 <Link to="Schedule"><p className="hover:text-blue-600">SCHEDULE</p></Link>
//               </div>
//             )}
//           </li>

//           <Link to="Venue">
//             <li className="hover:text-gray-500 cursor-pointer">VENUE</li>
//           </Link>

//           {/* PAST CONFERENCES */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("past")}
//           >
//             <div className="flex items-center gap-1">PAST CONFERENCES <IoIosArrowDown /></div>

//             {openMenu === "past" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://www.mnnit.ac.in/icbma2020/index.html">
//                   <p className="hover:text-blue-600">ICBMA 2020</p>
//                 </a>
//               </div>
//             )}
//           </li>

//           {/* ONLINE PAPER SUBMISSION */}
//           <li
//             className="relative cursor-pointer hover:text-gray-500"
//             onClick={() => toggleMenu("online")}
//           >
//             <div className="flex items-center gap-1">ONLINE PAPER SUBMISSION <IoIosArrowDown /></div>

//             {openMenu === "online" && (
//               <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-56 p-4 space-y-3 z-50">
//                 <a href="https://easychair.org/account2/signin?l=2332274231518289330">
//                   <p className="hover:text-blue-600">Click here</p>
//                 </a>
//               </div>
//             )}
//           </li>
//         </ul>

//         {/* ---------------------- RIGHT LOGO ---------------------- */}
//         <div className="absolute left-1/2 -translate-x-1/2 w-[40%] flex justify-center sm:static sm:translate-x-0 sm:left-auto sm:w-[15%]">
//           <img src={bennett} alt="" className="w-full" />
//         </div>

//       </div>

//       {/* ---------------------- MOBILE MENU ---------------------- */}
//       <div
//         className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-xl text-black border border-white/20 shadow-lg p-6 transform transition-transform duration-300 z-[9999] ${
//           mobileOpen ? "translate-x-0" : "translate-x-full"
//         } md:hidden`}
//       >
//         <button className="text-2xl mb-6" onClick={() => setMobileOpen(false)}>
//           ✕
//         </button>

//         <div className="flex flex-col space-y-4 text-sm">
//           <Link to="" onClick={() => setMobileOpen(false)}>HOME</Link>
//           <Link to="Advisory" onClick={() => setMobileOpen(false)}>ADVISORY BOARD</Link>
//           <Link to="Organising" onClick={() => setMobileOpen(false)}>ORGANISING COMMITTEE</Link>
//           <Link to="Program" onClick={() => setMobileOpen(false)}>TECHNICAL PROGRAM COMMITTEE</Link>
//           <Link to="Call_for_papers" onClick={() => setMobileOpen(false)}>CALL FOR PAPERS</Link>
//           <Link to="Submission_instruction" onClick={() => setMobileOpen(false)}>SUBMISSION INSTRUCTION</Link>
//           <Link to="Registration" onClick={() => setMobileOpen(false)}>REGISTRATION</Link>
//           <Link to="Keynotes" onClick={() => setMobileOpen(false)}>KEYNOTES & TUTORIALS</Link>
//           <Link to="Schedule" onClick={() => setMobileOpen(false)}>SCHEDULE</Link>
//           <Link to="Venue" onClick={() => setMobileOpen(false)}>VENUE</Link>
//           <a href="https://www.mnnit.ac.in/icbma2020/index.html">ICBMA 2020</a>
//           <a href="https://www.mnnit.ac.in/icbma2021/">ICBMA 2021</a>
//           <a href="https://easychair.org/account2/signin?l=2332274231518289330">ONLINE PAPER SUBMISSION</a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React, { useEffect, useState, useRef } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { gsap } from "gsap";
import logo from "../assets/ICBMA_2026.svg";
import bennett from "../assets/bennett-university.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const registerRef = useRef(null);

  const toggleMenu = (name) => {
    setOpenMenu(openMenu === name ? null : name);
  };

  /* ---------------------- NAVBAR COLOR CHANGE ON 100vh and atTop ---------------------- */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const triggerPoint = window.innerHeight; // 100vh
      setIsAtTop(y < 50);
      setScrolled(y > triggerPoint);
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
      if (window.scrollY > 120) tl.play();
      else tl.reverse();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 w-full z-500 transition-all duration-500 ${
        isAtTop
          ? "bg-white text-black"
          : scrolled
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <div className="max-w-[90%] mx-auto flex items-center justify-between relative">

        {/* ---------------------- LOGO ---------------------- */}
        <div className="logo h-[50px] w-[78px] my-5">
          <Link to="">
            <img
              src={logo}
              alt=""
              className={`h-37px w-76px inline-block ${
                isAtTop
                  ? ""
                  : scrolled
                  ? ""
                  : "opacity-80 invert hue-rotate-180"
              }`}
            />
          </Link>
        </div>

        {/* ---------------------- MOBILE TOGGLE ---------------------- */}
        <button
          className="md:hidden text-2xl absolute right-0"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>

        {/* ---------------------- DESKTOP MENU ---------------------- */}
        <ul className="hidden md:flex items-center space-x-5 text-[13px] font-bold tracking-wide">

          <Link to="">
            <li className="hover:text-gray-500 cursor-pointer">HOME</li>
          </Link>

          {/* ---------------------- COMMITTEES ---------------------- */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("committees")}
          >
            <div className="flex items-center gap-1">
              COMMITTEES <IoIosArrowDown />
            </div>

            {openMenu === "committees" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <Link to="Advisory"><p className="hover:text-blue-600 mb-3">ADVISORY BOARD</p></Link>
                <Link to="Organising"><p className="hover:text-blue-600 mb-3">ORGANISING COMMITTEE</p></Link>
                <Link to="Program"><p className="hover:text-blue-600">TECHNICAL PROGRAM COMMITTEE</p></Link>
              </div>
            )}
          </li>

          {/* ---------------------- CALLS ---------------------- */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("calls")}
          >
            <div className="flex items-center gap-1">
              CALLS <IoIosArrowDown />
            </div>

            {openMenu === "calls" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <Link to="Call_for_papers"><p className="hover:text-blue-600">CALL FOR PAPERS</p></Link>
                <Link to="Submission_instruction">
                  <p className="hover:text-blue-600 mt-3">SUBMISSION INSTRUCTION</p>
                </Link>
              </div>
            )}
          </li>

          <Link to="Registration">
            <li className="hover:text-gray-500 cursor-pointer">REGISTRATION</li>
          </Link>

          {/* ---------------------- PROGRAM ---------------------- */}
          <li
            className="relative cursor-pointer hover:text-gray-500"
            onClick={() => toggleMenu("program")}
          >
            <div className="flex items-center gap-1">
              PROGRAM <IoIosArrowDown />
            </div>

            {openMenu === "program" && (
              <div className="absolute top-6 left-0 bg-white text-black shadow-lg w-64 p-4 space-y-3 z-50">
                <Link to="Keynotes"><p className="hover:text-blue-600 mb-2">KEYNOTES AND TUTORIALS</p></Link>
                <Link to="Schedule"><p className="hover:text-blue-600">SCHEDULE</p></Link>
              </div>
            )}
          </li>

          <Link to="Venue">
            <li className="hover:text-gray-500 cursor-pointer">VENUE</li>
          </Link>

          {/* ---------------------- PAST CONFERENCES ---------------------- */}
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
                  <p className="hover:text-blue-600">ICBMA 2020</p>
                </a>
              </div>
            )}
          </li>

          {/* ---------------------- ONLINE SUBMISSION ---------------------- */}
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
                  <p className="hover:text-blue-600">Click here</p>
                </a>
              </div>
            )}
          </li>

        </ul>

        {/* ---------------------- RIGHT LOGO ---------------------- */}
        <div className="absolute left-1/2 -translate-x-1/2 w-[40%] flex justify-center sm:static sm:translate-x-0 sm:left-auto sm:w-[15%]">
          <img src={bennett} alt="" className="w-full" />
        </div>

      </div>

      {/* ---------------------- MOBILE MENU ---------------------- */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white/50 backdrop-blur-xl text-black border border-white/20 shadow-lg p-6 transform transition-transform duration-300 z-[9999] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button className="text-2xl mb-6" onClick={() => setMobileOpen(false)}>
          ✕
        </button>

        <div className="flex flex-col space-y-4 text-sm">
          <Link to="" onClick={() => setMobileOpen(false)}>HOME</Link>
          <Link to="Advisory" onClick={() => setMobileOpen(false)}>ADVISORY BOARD</Link>
          <Link to="Organising" onClick={() => setMobileOpen(false)}>ORGANISING COMMITTEE</Link>
          <Link to="Program" onClick={() => setMobileOpen(false)}>TECHNICAL PROGRAM COMMITTEE</Link>
          <Link to="Call_for_papers" onClick={() => setMobileOpen(false)}>CALL FOR PAPERS</Link>
          <Link to="Submission_instruction" onClick={() => setMobileOpen(false)}>SUBMISSION INSTRUCTION</Link>
          <Link to="Registration" onClick={() => setMobileOpen(false)}>REGISTRATION</Link>
          <Link to="Keynotes" onClick={() => setMobileOpen(false)}>KEYNOTES & TUTORIALS</Link>
          <Link to="Schedule" onClick={() => setMobileOpen(false)}>SCHEDULE</Link>
          <Link to="Venue" onClick={() => setMobileOpen(false)}>VENUE</Link>
          <a href="https://www.mnnit.ac.in/icbma2020/index.html">ICBMA 2020</a>
          <a href="https://www.mnnit.ac.in/icbma2021/">ICBMA 2021</a>
          <a href="https://easychair.org/account2/signin?l=2332274231518289330">ONLINE PAPER SUBMISSION</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;