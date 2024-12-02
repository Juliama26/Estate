import * as React from "react";
import Title from "./element/Title";
import Project from "./fragment/Project";
import project1 from "../assets/project_img_1.jpg";
import { motion } from "framer-motion";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export default function Projects() {
  const scroll = React.useRef(null);

  const scrollLeft = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };
  const scrollRight = () => {
    if (scroll.current) {
      scroll.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Projects"
      className="max-w-6xl mx-auto p-12"
    >
      <Title Title1="Projects" Title2="Completed">
        Crafting Spaces, Building Legacies—Explore Our Portfolio
      </Title>
      <section className="flex justify-between gap-x-3 pb-2">
        <FaAngleLeft size={22} onClick={scrollLeft} cursor={"pointer"} />
        <FaAngleRight size={22} onClick={scrollRight} cursor={"pointer"} />
      </section>
      <section className="overflow-hidden max-w-full h-full">
        <section ref={scroll} className="flex gap-x-4 pt-3 overflow-hidden">
          <Project
            Img={project1}
            Name="Skyline Haven"
            Price="$2,50,000"
            City="Depok"
          />
          <Project
            Img={project1}
            Name="Skyline Lavan"
            Price="$2,5,000"
            City="jakarta"
          />
          <Project
            Img={project1}
            Name="Skyline Dian"
            Price="$2,56,000"
            City="Bandung"
          />
          <Project
            Img={project1}
            Name="Skyline Lam"
            Price="$2,52,000"
            City="Bogor"
          />
          <Project
            Img={project1}
            Name="Skyline Disam"
            Price="$2,30,000"
            City="Medan"
          />
          <Project
            Img={project1}
            Name="Skyline Yoan"
            Price="$2,10,000"
            City="Papua"
          />
        </section>
      </section>
    </motion.div>
  );
}
