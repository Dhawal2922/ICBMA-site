import React from 'react'
const bg = `${import.meta.env.BASE_URL}instructions.png`;

const Submission_instruction = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl font-light text-white text-center">
            Submission Instruction
          </h1>
        </div>
      </div>

      {/* White content section */}
      <div className="bg-white w-full py-16">
        <div className="max-w-[1100px] mx-auto px-6 leading-relaxed text-gray-500">

          {/* Main Title */}
          <h1 className="text-5xl font-light text-black text-center mb-14">
            INSTRUCTION FOR AUTHORS :-
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl font-light text-black text-center mb-10">
            Plagiarism Statement
          </h2>

          {/* Paragraph */}
          <p className="text-lg mb-12 text-justify">
            The program committee of ICBMA and Publisher takes plagiarism seriously. If an author has copied from another author or has used parts of another author's work (text, tables, figures, etc.), without his or her permission and a reference, then the paper on PublisherLink will be given a "retracted" stamp, and an erratum explaining the reasons for the retraction will be included. In addition, the volume editors and the author's academic supervisors will be informed that plagiarism has been committed. Please note that a retracted paper remains visible, with its "retracted" stamp. It does not simply disappear.
          </p>

          {/* List */}
          <ul className="list-decimal space-y-4 text-lg px-4">
            <li>
              Original papers based on theoretical or experimental works related to the above mentioned sub themes are solicited for presentation in the conference.
            </li>
            <li>
              All authors of accepted papers must submit the plagiarism declaration at the time of final submission of their paper.
            </li>
            <li>
              The paper should begin with title, short abstract and a list of keywords. Simultaneous and Multiple submissions (papers already submitted to other conferences/journals) are not allowed.
            </li>
            <li>
              All authors must follow Publisher's proceedings formatting instructions.
            </li>
            <li>
              Please do not submit plagiarized papers.
            </li>
            <li>
              The total length of the paper will not be exceeded by Ten A4 size pages including bibliography and appendices. However papers exceeding the limit of 10 pages will also be considered as special case. Paper must be in PDF and DOC format. Papers in Latex format are also acceptable.
            </li>
            <li>
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </li>
          </ul>

          {/* Important Note */}
          <div className="mt-20 text-center">
            <h2 className="text-4xl font-dark text-black mb-10">IMPORTANT NOTE:</h2>
            <p className="text-lg leading-relaxed text-justify text-gray-500 mb-20">
              Your paper will be excluded from proceedings at any level of quality checks carried out by Publisher.
              Conference organizers are not responsible if your paper detects plagiarism or any lack in quality reported
              by Publisher after submission of final proceedings (camera ready copies) to Publisher. Conference organizers
              are responsible for the technical quality of paper on the basis of reviews obtained. It is sole responsibility
              of author/s if their paper detects plagiarism even in later stages of quality check. No registration fee will
              be refunded in any case if your paper is excluded from proceedings by the Publisher.
            </p>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Submission_instruction
