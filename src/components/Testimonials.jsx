import React from "react";
import Title from "./element/Title";
import profile1 from "../assets/profile_img_1.png";
import profile2 from "../assets/profile_img_2.png";
import profile3 from "../assets/profile_img_3.png";
import Testimoni from "./fragment/Testimoni";
import { motion } from "framer-motion";

export default function Testimonials() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Testimonials"
      className="max-w-6xl mx-auto p-12"
    >
      <Title Title1="Customer" Title2="Testimonials">
        Real Stories from Those Who Found Home with Us
      </Title>
      <section className="flex flex-wrap gap-3 pt-6">
        <Testimoni
          Img={profile1}
          Name="Donald Jackman"
          Title="Marketing Manager"
          starCount={5}
          Text="From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        />
        <Testimoni
          Img={profile2}
          Name="Richard Nelson"
          Title="UI/UX Designer"
          starCount={4}
          Text="From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        />
        <Testimoni
          Img={profile3}
          Name="James Washington"
          Title="Co-Founder"
          starCount={5}
          Text="From the very first meeting, they understood my vision and helped me find the perfect property. Their attention to detail and commitment to client satisfaction is unmatched."
        />
      </section>
    </motion.div>
  );
}
