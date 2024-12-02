import React from "react";

// eslint-disable-next-line react/prop-types
export default function Input({ name, type, placeholder }) {
  return (
    <input
      id={name}
      name={name}
      type={type}
      placeholder={placeholder}
      required
      autoComplete="off"
      className="w-full px-5 py-3 border rounded-md outline-none"
    />
  );
}
