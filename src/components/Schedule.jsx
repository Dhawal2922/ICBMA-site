import React from "react";
import Navbar from "./Navbar";
import bg from "../assets/schedule.jpg"

const Schedule = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white text-center px-4">
            Event Schedule
          </h1>
        </div>
      </div>

      {/* Important Dates Section */}
      <div className="w-full bg-white py-16">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-center mb-12 text-gray-500 px-4">
          Important Dates
        </h2>

        <div className="max-w-[1100px] mx-auto border border-gray-300 p-6 sm:p-10 text-gray-500">
          
          {/* Row 1 */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 border-b border-dashed gap-2">
            <p className="text-base sm:text-lg lg:text-xl">Paper Submission Deadline</p>
            <p className="text-base sm:text-lg lg:text-xl">

              20 February 2026
            </p>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 border-b border-dashed gap-2">
            <p className="text-base sm:text-lg lg:text-xl">Notification of Acceptance</p>
            <p className="text-base sm:text-lg lg:text-xl">

              31st March 2026
            </p>
          </div>

          {/* Row 3 */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 border-b border-dashed gap-2">
            <p className="text-base sm:text-lg lg:text-xl">Final Paper Submission Deadline</p>
            <p className="text-base sm:text-lg lg:text-xl">

              10 April 2026
            </p>
          </div>

          {/* Row 4 */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 border-b border-dashed gap-2">
            <p className="text-base sm:text-lg lg:text-xl">Author's Registration</p>
            <p className="text-base sm:text-lg lg:text-xl">10 April 2026</p>
          </div>

          {/* Row 5 */}
          <div className="flex flex-col items-center text-center sm:flex-row sm:justify-between sm:text-left py-6 gap-2">
            <p className="text-base sm:text-lg lg:text-xl">Conference</p>
            <p className="text-base sm:text-lg lg:text-xl">
              23-24th April, 2026
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Schedule;
