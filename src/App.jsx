import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Call_for_papers from "./components/Call_for_papers";
import Submission_instruction from "./components/Submission_instruction";
import Keynotes from "./components/Keynotes";
import Schedule from "./components/Schedule";

import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import RegistrationTable from "./components/Registration";
import Advisory from "./components/Advisory";
import Lenis from "@studio-freight/lenis";
import Venue from "./components/Venue";
import Program from "./components/Program";
import Organising from "./components/Organising";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smooth: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Sync Lenis with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : lenis.scroll;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });

    ScrollTrigger.addEventListener("refresh", () =>
      requestAnimationFrame((time) => lenis.raf(time))
    );
    ScrollTrigger.refresh();

    return () => {
      lenis.destroy();
    };
  }, []);

  const location = useLocation();

  useEffect(() => {
    gsap.fromTo(
      "#pageTransition",
      { opacity: 0, filter: "blur(20px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
    );
  }, [location]);

  return (
    <>
      {/* <Header/> */}
      <hr />
      <Navbar />
      <div id="pageTransition">
        <Routes>
          <Route
            path=""
            element={
              <>
                <Home />
                <About />
                <Footer />
              </>
            }
          />

          <Route
            path="Call_for_papers"
            element={
              <>
                <Call_for_papers />
                <Footer />
              </>
            }
          />
          <Route
            path="Submission_instruction"
            element={
              <>
                <Submission_instruction />
                <Footer />
              </>
            }
          />
          <Route
            path="Keynotes"
            element={
              <>
                <Keynotes />
                <Footer />
              </>
            }
          />
          <Route
            path="Schedule"
            element={
              <>
                <Schedule />
                <Footer />
              </>
            }
          />
          <Route
            path="Registration"
            element={
              <>
                <RegistrationTable />
                <Footer />
              </>
            }
          />
          <Route
            path="Advisory"
            element={
              <>
                <Advisory />
                <Footer />
              </>
            }
          />
          <Route
            path="Venue"
            element={
              <>
                <Venue />
                <Footer />
              </>
            }
          />
          <Route
            path="Program"
            element={
              <>
                <Program />
                <Footer />
              </>
            }
          />
          <Route
            path="Organising"
            element={
              <>
                <Organising />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

export default App;
