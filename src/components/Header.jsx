import * as React from "react";
import logo from "../assets/logo.svg";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { motion } from "framer-motion";

const Menu = ["About", "Projects", "Testimonials"];

export default function Header() {
  const [open, setOpen] = React.useState(false);
  return (
    <motion.header
      initial={{ opacity: 0, y2: 100 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y2: 0 }}
      className="absolute right-0 left-0 z-10 flex items-center justify-between max-w-6xl mx-auto p-5"
    >
      <section className="flex items-center gap-x-2">
        <img src={logo} alt="assets" className="w-10 h-10" />
        <h2 className="text-3xl font-semibold text-white">Estate</h2>
      </section>
      <ul className="hidden md:flex gap-x-5 text-white">
        <a href="#">Home</a>
        {Menu.map((item, index) => (
          <li key={index}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <button className="hidden md:block px-6 py-2 rounded-full bg-white text-black">
        Sign Up
      </button>
      <button onClick={() => setOpen(!open)} className="md:hidden text-white">
        {open ? <CgClose size={35} /> : <CgMenuRight size={35} />}
      </button>
    </motion.header>
  );
}
