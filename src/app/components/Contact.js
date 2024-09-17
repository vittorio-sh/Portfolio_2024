"use client";

import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:vittorio.shiffman@gmail.com?subject=Message from ${formData.name}&body=${encodeURIComponent(
      formData.message
    )}`;

    window.location.href = mailtoLink;

    setFormData({ name: "", message: "" });
  };

  return (
    <div className="mt-16 mb-20 w-full bg-gray-900 bg-opacity-60 text-gray-200 rounded-2xl">
      <h2 className="pt-6 text-5xl font-bold text-center mb-12">Contact Me</h2>
      <form onSubmit={sendEmail} className="max-w-lg mx-auto">
        <div className="mb-6 p-4">
          <label htmlFor="name" className="block text-xl font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
          />
        </div>
        <div className="mb-6 p-4">
          <label htmlFor="message" className="block text-xl font-bold mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows="6"
            className="w-full px-4 py-2 bg-gray-800 text-gray-200 border border-gray-700 rounded-lg focus:outline-none focus:border-cyan-400"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className=" mb-6 w-3/5 py-2 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
