import React from "react";
import logo from "../assets/logo.svg";
export default function Footer() {
  return (
    <footer className="grid grid-cols-1 md:grid-cols-3 gap-3 px-5 lg:px-28 py-6 bg-slate-900">
      <section className="space-y-2">
        <figure className="flex items-center gap-x-2">
          <img src={logo} alt="logo" />
          <h2 className="text-2xl font-semibold text-white">Estate</h2>
        </figure>
        <figcaption className="text-sm text-slate-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis iusto
          officia facere nesciunt excepturi adipisci sunt eveniet dolorem
          deserunt nostrum!
        </figcaption>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg text-white">Company</h2>
        <ul className="text-sm space-y-2 text-slate-400">
          <li>Home</li>
          <li>About us</li>
          <li>Contact us</li>
          <li>Privacy policy</li>
        </ul>
      </section>
      <section className="space-y-2">
        <h2 className="text-lg text-white">Subscribe to our newsletter</h2>
        <p className="text-sm text-slate-400">
          The latest news, articles, and resources, sent to your inbox weekly.
        </p>
        <section className="flex gap-x-2">
          <input
            className="px-4 py-2 outline-none rounded-md bg-slate-600 text-white"
            type="email"
            placeholder="Enter your email"
          />
          <button className="px-4 py-2 rounded-md bg-sky-500 text-white">
            Subscribe
          </button>
        </section>
      </section>
    </footer>
  );
}
