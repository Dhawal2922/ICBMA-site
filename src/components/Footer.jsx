import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 border-t border-gray-200 py-10 px-4 sm:px-6">
      <div className="max-w-[93%] mx-auto text-center md:text-left">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 pb-10">

          {/* LEFT — Institute Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold text-gray-900">
              ICBMA Conference
            </h2>

            <p className="mt-2 text-gray-700">
              School of Computer Science Engineering and Technology<br />
            </p>

            <p className="mt-2 text-gray-900 font-semibold">
              Bennett University
            </p>

            <div className="mt-3 flex items-start gap-3 text-gray-700">
              <FiMapPin className="text-[#0092c8] mt-1" />
              <p>
                Greater Noida, Uttar Pradesh<br />
                India
              </p>
            </div>
          </div>

          {/* MIDDLE — Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Contact
            </h2>

            <p className="text-gray-800 font-medium">
              Prof. (Dr.) Shailesh Tiwari<br />
              Prof. (Dr.) Jagendra Singh
            </p>

            <div className="mt-4 flex items-center gap-3 text-gray-700">
              <FiMail className="text-[#0092c8]" />
              <a href="mailto:icbma2021@gmail.com" className="hover:underline">
                icbma2026@gmail.com
              </a>
            </div>

            <div className="mt-3 flex items-center gap-3 text-gray-700">
              <FiPhone className="text-[#0092c8]" />
              <p>9540987274/9958458344</p>
            </div>
          </div>

          {/* RIGHT — Optional Button or Seal */}
          <div className="flex flex-col items-center md:items-center">
            <button className="bg-[#1E3A8A] text-white px-6 py-2 rounded-md shadow cursor-pointer hover:bg-[#017eab] w-full sm:w-auto text-sm sm:text-base">
              CONTACT & HELP
            </button>

            {/* <div className="mt-6">
              <img
                src="/ICBMA_2026.svg"
                alt="Seal"
                className="h-16 w-auto inline-block opacity-80 invert hue-rotate-180"
              />
            </div> */}
          </div>

        </div>

        {/* Divider */}
        <hr className="border-gray-300" />

       

        {/* COPYRIGHT */}
        <div className="text-center text-[10px] sm:text-xs text-gray-500 mt-6">
          © 2025 ICBMA — All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
