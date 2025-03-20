import React from "react";
import { Link } from "react-router";
function Blog() {
  return (
    <div className="h-screen ">
      <h2 className="text-white mt-28">Here is my blog</h2>
      <button className="bg-blue-700">
        <Link to="/adminlogin">Admin</Link>
      </button>
    </div>
  );
}

export default Blog;
