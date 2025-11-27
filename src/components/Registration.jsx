import React from "react";
import bg from "../assets/registration.jpg"


// Data structure for the registration table
const registrationData = [
  {
    type: "Regular Author",
    rows: [
      { nationality: "Indian", early: "INR 8000", late: "INR 9000" },
      {
        nationality: "Foreigner",
        early: "USD $ 400",
        late: "USD $ 450",
        isShaded: true,
      },
    ],
  },
  {
    type: "Student Author",
    rows: [
      { nationality: "Indian", early: "INR 6000", late: "INR 6500" },
      {
        nationality: "Foreigner",
        early: "USD $ 350",
        late: "USD $ 400",
        isShaded: true,
      },
    ],
  },
  {
    type: "Attendee/Co-Author Registration",
    rows: [
      { nationality: "Indian", early: "INR 3000", late: "INR 3500" },
      {
        nationality: "Foreigner",
        early: "USD $ 250",
        late: "USD $ 300",
        isShaded: true,
      },
    ],
  },
];

// Helper component for the table header (blue section)
const TableHeader = () => (
  <thead>
    <tr className="bg-[#0092c8] text-white font-semibold text-sm sm:text-base border-b-2 border-white">
      <th className="p-3 w-1/4 sm:w-1/5 text-center">Author Type</th>
      <th className="p-3 w-1/4 sm:w-[15%] text-center">Nationality</th>
      <th className="p-3 w-1/4 sm:w-[35%] text-center">
        Early Registration By 15 April 2021 (GST included)
      </th>
      <th className="p-3 w-1/4 sm:w-[30%] text-center">
        On spot / Late Registration (GST included)
      </th>
    </tr>
  </thead>
);

// Helper component for the table body
const TableBody = () => (
  <tbody>
    {registrationData.map((category, catIndex) => (
      // Fragment to hold the two rows for each category
      <React.Fragment key={catIndex}>
        {category.rows.map((row, rowIndex) => (
          <tr
            key={`${catIndex}-${rowIndex}`}
            className={`text-gray-700 border-b border-gray-300 transition-colors 
              ${row.isShaded ? "bg-gray-100" : "bg-white hover:bg-gray-50"}`}
          >
            {/* Author Type Cell - Uses rowSpan on the first row of each category */}
            {rowIndex === 0 && (
              <td
                rowSpan="2"
                className="p-3 font-semibold text-sm sm:text-base border-r border-gray-300 align-middle text-center w-1/4 sm:w-1/5"
              >
                {category.type}
              </td>
            )}

            {/* Nationality */}
            <td className="p-3 text-center border-r border-gray-300 w-1/4 sm:w-[15%]">
              {row.nationality}
            </td>

            {/* Early Registration Fee */}
            <td className="p-3 text-center border-r border-gray-300 w-1/4 sm:w-[35%] font-medium">
              {row.early}
            </td>

            {/* Late Registration Fee */}
            <td className="p-3 text-center w-1/4 sm:w-[30%] font-medium">
              {row.late}
            </td>
          </tr>
        ))}
      </React.Fragment>
    ))}
  </tbody>
);

/**
 * Component to display the full Registration Fee Table.
 * The table uses rowSpan to group 'Author Type' rows, mirroring the source image.
 */
const RegistrationTable = () => (
  <>
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="relative h-[400px] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/65"></div>

      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-6xl font-light text-white text-center">
          Registration
        </h1>
      </div>
    </div>
    <div className="overflow-x-auto mt-20 w-[90%] mx-auto mb-20 shadow-xl rounded-lg border border-gray-300">
      <table className="max-w-full text-sm border-collapse">
        <TableHeader />
        <TableBody />
      </table>
    </div>
  </>
);

export default RegistrationTable;
