import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Image({ img, name, university, title }) {
  return (
    <div className="w-72 bg-white rounded-3xl shadow-md p-6 flex flex-col items-center text-center">

      {/* Image */}
      <img
        src={img}
        alt={name}
        className="w-32 h-32 object-cover rounded-full mb-4"
      />

      {/* Title */}
      {title && (
        <p className="text-sm uppercase tracking-wide text-gray-500">
          {title}
        </p>
      )}

      {/* Name */}
      <h3 className="text-xl font-semibold text-gray-900 mt-1">
        {name}
      </h3>

      {/* University */}
      <p className="mt-3 text-blue-500 text-sm leading-relaxed px-3">
        {university}
      </p>

    </div>
  );
}