import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Client, ID } from "appwrite"; // ✅ Added missing ID import
import RTE from "../RTE/RTE";

function AddBlog() {
  const navigate = useNavigate();
  const [imageId, setImageId] = useState("");

  // Initialize Appwrite Client
  const client = new Client();
  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Replace with your Appwrite endpoint
    .setProject("YOUR_PROJECT_ID"); // Replace with your Appwrite project ID

  const {
    register,
    handleSubmit,
    control,
    getValues,
    formState: { errors },
  } = useForm();

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin-login");
  };

  const onSubmit = (data) => {
    const generatedImageId = ID.unique(); // Generate Appwrite Unique ID
    setImageId(generatedImageId);

    const formData = {
      ...data,
      imageId: generatedImageId,
    };

    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-900 pt-10">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-2xl lg:w-2/3">
        <h2 className="text-3xl font-semibold text-center text-white mb-6">
          Create Blog Post
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Title Input */}
          <div>
            <label className="block text-gray-400 font-medium">Title</label>
            <input
              type="text"
              {...register("title", { required: "Title is required" })}
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              placeholder="Enter title"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Content Input */}
          <div>
            <label className="block text-gray-400 font-medium">Content</label>
            <RTE
              name="content"
              control={control}
              defaultValue={getValues("content")}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-400 font-medium">
              Upload Image
            </label>
            <input
              type="file"
              {...register("image", { required: "Image is required" })}
              className="w-full px-4 py-3 border rounded-lg bg-gray-700 text-white"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>

        {/* Display Unique Image ID */}
        {imageId && (
          <p className="text-green-400 text-sm mt-4 text-center">
            Image ID: <strong>{imageId}</strong>
          </p>
        )}
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}

export default AddBlog;
