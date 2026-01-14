import bg from "../assets/Bennett_University_.jpg"
import logo2 from "../assets/logo2.png";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

const Home = () => {
  const logoRef = useRef(null);

  useLayoutEffect(() => {
    if (!logoRef.current) return;

    const ctx = gsap.context(() => {
        gsap.fromTo(
            logoRef.current,
            { scale: 0 },
            { scale: 1, duration: 3, ease: "back.out(1.7)" }
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div className="shadow-lg shadow-black/50">
        <div
          style={{ backgroundImage: `url(${bg})` }}
          className="relative h-screen bg-cover bg-center"
        >
          {/* <div className="absolute inset-0 bg-black/70"></div> */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/80"></div>
          {/* <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.5),rgba(0,0,0,0.9))]"></div> */}

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center text-white">
            {/* <div className="bg-black/50 rounded-full flex items-center justify-center backdrop-blur-sm" style={{ width: "260px", height: "260px" }}> */}
            <img
              ref={logoRef}
              src={logo2}
              alt=""
              className="w-[130px] h-[130px] sm:w-[150px] sm:h-[150px] lg:w-[220px] lg:h-[220px] object-contain"
            />
            {/* </div> */}
            <div className="mt-6 text-center leading-tight">
              <p className="text-base sm:text-sm lg:text-3xl font-semibold text-center px-6">
                3<sup>rd</sup> International Conference on
              </p>
              <p className="hidden sm:block text-2xl sm:text-3xl lg:text-5xl font-bold whitespace-normal sm:whitespace-nowrap mt-2 text-center px-4">
                Big Data, Machine Learning & Their Applications
              </p>
              <p className="block sm:hidden text-2xl font-semibold mt-2 text-center px-4 whitespace-nowrap">
                Big Data & ML Applications
              </p>
              <p className="text-base sm:text-lg font-medium mt-2 text-center">ICBMA 2026</p>
              <p className="text-sm sm:text-md mt-1 text-center">April 23-24, 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
