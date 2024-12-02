import React from "react";

// eslint-disable-next-line react/prop-types
export default function Textarea({ Name }) {
  return (
    <textarea
      name={Name}
      id={Name}
      rows="5"
      placeholder={Name}
      className="w-full px-5 py-3 border rounded-md outline-none"
    ></textarea>
  );
}
