import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const [selectedSubject, setSelectedSubject] = useState("");

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  const handleSubjectChange = (value) => {
    setSelectedSubject(value);
    setValue("subject", value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg p-8 bg-gray-800 bg-opacity-30 backdrop-blur-2xl shadow-2xl rounded-xl"
      >
        <h2 className="text-3xl font-extrabold text-center text-white mb-6">
          Get in Touch
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-white">Name</label>
            <input
              placeholder="Enetr your name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter a valid email",
                },
              })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-1 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Subject
            </label>
            <div className="flex space-x-4">
              {["General Inquiry", "Support", "Feedback"].map((subject) => (
                <label
                  key={subject}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    checked={selectedSubject === subject}
                    onChange={() => handleSubjectChange(subject)}
                    className="form-radio h-5 w-5 text-indigo-600 focus:ring-indigo-400"
                  />
                  <span className="text-white">{subject}</span>
                </label>
              ))}
            </div>
            {errors.subject && (
              <p className="text-red-500 text-sm">{errors.subject.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              placeholder="Enter message"
              {...register("message", { required: "Message is required" })}
              className="w-full p-3 mt-1 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none bg-gray-700 bg-opacity-50 backdrop-blur-md text-white"
              rows="4"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 text-white font-semibold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-indigo-300 transition-all"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
