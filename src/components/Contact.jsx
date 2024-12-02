import React from "react";
import Title from "./element/Title";
import IndexInput from "./fragment/IndexInput";
import IndexTextArea from "./fragment/IndexTextArea";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "dbfd82e1-758a-4dc6-b7f6-12daff88d1f0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      id="Contact"
      className="max-w-6xl mx-auto p-12"
    >
      <Title Title1="Contact" Title2="With Us">
        Ready to Make a Move? Let’s Build Your Future Together
      </Title>
      <form
        onSubmit={onSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-3 md:max-w-2xl mx-auto pt-6"
      >
        <IndexInput Name="Your Name" type="text" Placeholder="Your Name" />
        <IndexInput Name="Your Email" type="email" Placeholder="Your Email" />
        <IndexTextArea Name="Message" className="md:col-span-2" />
        <button className="px-3 py-2 rounded-md bg-sky-500 text-white md:col-span-2">
          {result ? result : "Send Message"}
        </button>
      </form>
    </motion.div>
  );
}
