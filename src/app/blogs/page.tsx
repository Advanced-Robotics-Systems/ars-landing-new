import { BlogsHero, GetInTouch, Resources } from "@/sections";
import React from "react";

const Blogs = () => {
  return (
    <main
      className="bg-fixed min-h-screen "
      style={{
        background: `
        linear-gradient(30deg, rgba(5, 144, 200, 0.02) 51.31%, #0D242673 114.45%), 
        linear-gradient(30deg, #D7EFF9 51.31%, #0590C8B3 114.45%)`,
      }}
    >
      <div className=" h-full">
        <BlogsHero />
        <Resources />
        <GetInTouch />
      </div>
    </main>
  );
};

export default Blogs;
