import React from "react";

const Contact = () => {
  return (
    <section className="body-font relative">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          title="map"
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=Delhi&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        ></iframe>
      </div>
      <div className=" h-screen ">
        <div className=" bg-white rounded-lg p-8 flex flex-col w-4/12   mt-40 mx-auto relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
            Feedback
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Provide the feedback for this Website
          </p>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-100  focus:ring-2 focus:ring-orange-100  text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-300 focus:border-orange-100 focus:ring-2 focus:ring-orange-100  h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <button className="text-white font-semibold  bg-[#940b0b]  border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
