import React from "react";
import { motion } from "framer-motion";

import hero from "../assets/header_img.png";

export default function Home() {
  return (
    <main className="relative h-screen">
      <img src={hero} alt="hero" className="w-full h-full object-cover" />
      <motion.figcaption
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="absolute top-0 left-0 w-full h-full flex flex-col justify-around items-center text-center py-36 "
      >
        <h2 className="text-4xl md:text-6xl font-bold md:font-extrabold tracking-widest text-white">
          Explore Homes That <br /> Fit Your Dreams
        </h2>
        <section className="flex gap-x-4">
          <a
            href="#Projects"
            className="px-6 md:px-8 py-2 md:py-3 rounded-md border hover:border-sky-500 text-white "
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="px-6 md:px-8 py-2 md:py-3 rounded-md bg-sky-500 text-white"
          >
            Contact Us
          </a>
        </section>
      </motion.figcaption>
    </main>
  );
}
