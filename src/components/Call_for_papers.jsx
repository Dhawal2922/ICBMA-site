import React from "react";
import bg from "../assets/paper.png";

const Call_for_papers = () => {
  return (
    <div className="w-full">
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl font-light text-white text-center">
            Call for Paper
          </h1>
        </div>
      </div>

      <div className="bg-white w-full">
        <div className="max-w-[1350px] mx-auto px-4 leading-relaxed text-[#333]">
          <p className="text-xl text-gray-500 leading-relaxed tracking-wide text-justify max-w-[1100px] mt-20 mx-auto mb-8">
            {" "}
            The 3<sup>rd</sup> International Conference on Big Data, Machine
            Learning & their Applications (ICBMA2026) is the premier forum for
            the presentation of new advances and research results in the fields
            of Big Data, Machine Learning & Their Applications. The conference
            will bring together leading researchers, engineers and scientists in
            the domain of interest from around the world. All submitted original
            papers will be peer reviewed before final acceptance.
          </p>

          <p className="text-xl text-gray-500 leading-relaxed tracking-wide text-justify max-w-[1100px] mx-auto mb-8">
            Topics of interest for submission include:
          </p>

          <div className="grid grid-cols-2 max-w-[1100px] mx-auto px-10 gap-20 text-gray-500 mt-16">
            <div>
              <h2 className="text-3xl underline font-dark text-black mb-6 text-left">
                Track I: Big Data
              </h2>
              <ul className="list-decimal space-y-2 text-base">
                <li>
                  Algorithms and Programming Techniques for Big Data Processing
                </li>
                <li>Architecture and Security Issues in Big Data</li>
                <li>Cloud computing implementation of big data</li>
                <li>Optimization and Analytics issues in big data</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl underline font-dark text-black mb-6 text-left">
                Track II: Machine Learning
              </h2>
              <ul className="list-decimal space-y-2 text-base">
                <li>
                  Machine learning applications and Methods in clustering &
                  classification
                </li>
                <li>Deep learning Algorithms and its applications</li>
                <li>Support Vector Machine & its application</li>
                <li>Convolution neural Network & its application</li>
                <li>Bayesian Model, HMM and its applications</li>
                <li>Variants of All existing Models</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-2 max-w-[1100px] mx-auto px-10 gap-20 text-gray-500 mt-24">
            <div>
              <h2 className="text-3xl underline font-dark text-black mb-6 text-left">
                Track III: Bio Inspired Algorithms
              </h2>
              <ul className="list-decimal space-y-2 text-base">
                <li>Genetic Algorithms & its application</li>
                <li>Multi objective optimization & its application</li>
                <li>Computational intelligence & its application</li>
                <li>Evolutionary Algorithms & its application</li>
                <li>Combinatorial Optimization & its application</li>
                <li>Swarm Intelligence Algorithm & its application</li>
              </ul>
            </div>

            <div>
              <h2 className="text-3xl underline font-dark text-black mb-6 text-left">
                Track IV: Artificial Intelligence
              </h2>
              <ul className="list-decimal space-y-2 text-base">
                <li>Robotics & Automation</li>
                <li>Natural Language Processing</li>
                <li>Neural Network and Fuzzy logic</li>
                <li>Decision Support Systems</li>
                <li>Intelligent Image Processing Algorithms</li>
                <li>Computer Vision</li>
                <li>Pattern Recognition</li>
              </ul>
            </div>
          </div>

          {/* Track V heading */}
          <div className="text-center mt-10 text-gray-500 leading-relaxed tracking-wide max-w-[1100px] mx-auto px-10">
            <h2 className="text-3xl underline text-black font-dark">
              Track V: Applications of Big Data, Machine Learning & Bio Inspired
              Algorithms
            </h2>
          </div>

          {/* Track V list */}
          <div className="max-w-[1100px] mx-auto text-gray-500 mt-6 px-10 mb-30">
            <ul className="list-decimal space-y-2 text-base">
              <li>Precision Agriculture</li>
              <li>Smart city</li>
              <li>Fog Computing</li>
              <li>Cloud Computing</li>
              <li>Systems biology</li>
              <li>IoT</li>
              <li>Medical and Health informatics</li>
              <li>
                Any other applications of Big Data, Machine Learning and AI.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call_for_papers;
