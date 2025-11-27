import React from "react";
import bg from "../assets/venue-2.jpg"

const Venue = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="relative h-[400px] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-6xl font-light text-white text-center">Venue</h1>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full mt-10 flex justify-center mb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2160.622071346352!2d77.58212148866136!3d28.45004141714132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cbf94deb6bc39%3A0x7ba6bedc9a2b537f!2sBennett%20University!5e0!3m2!1sen!2sin!4v1763675258430!5m2!1sen!2sin"
          width="90%"
          height="450"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default Venue;
