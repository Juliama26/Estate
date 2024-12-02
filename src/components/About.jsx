import React from "react";
import Title from "./element/Title";
import CountUp from "react-countup";
import brand from "../assets/brand_img.png";
import CountStart from "./element/CountStart";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="About"
      className="max-w-6xl mx-auto px-5 py-12"
    >
      <Title Title1="About" Title2="Our Brand">
        Passionate About Properties, Dedicated to Your Vision
      </Title>
      <section className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 pt-12">
        <figure>
          <img src={brand} alt="brand" />
        </figure>
        <figcaption className="flex flex-col gap-y-6 md:gap-y-12">
          <section className="grid grid-cols-2 gap-3">
            <CountStart Name="Years of Excellence">
              <CountUp start={0} end={10} />
            </CountStart>
            <CountStart Name="Projects Completed">
              <CountUp start={0} end={12} />
            </CountStart>
            <CountStart Name="Mn. Sq. Ft. Delivered">
              <CountUp start={0} end={20} />
            </CountStart>
            <CountStart Name="Ongoing Projects">
              <CountUp start={0} end={25} />
            </CountStart>
          </section>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint neque
            quam placeat quaerat incidunt! Harum sapiente aut doloremque ipsa
            ducimus hic quas aperiam error culpa tempore delectus, omnis, natus
            maxime.
          </p>
          <button className="flex justify-start">
            <a
              href="#"
              className="px-6 md:px-8 py-2 md:py-3 rounded-md bg-sky-500 text-white"
            >
              Learn More
            </a>
          </button>
        </figcaption>
      </section>
    </motion.div>
  );
}
